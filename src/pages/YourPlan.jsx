import React, { useState, useEffect } from 'react';
import { exercises } from '../data/dummy';
import { Card } from '../Components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DroppableZone, DraggableCard } from '../Components';
import useAppContext from '../context/contextProvider';

import Modal from '../Components/Modal';

export default function YourPlan() {
    const { screenSize } = useAppContext()
    const [filter, setFilter] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentDay, setCurrentDay] = useState();

    var [days, setDays] = useState({
        Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: []
    });

    const handleAddExercise = (day) => {
        setCurrentDay(day); // Set the current day
        setModalOpen(true); // Open the modal
    };

    const handleDrop = (day, exerciseId) => {
        console.log(day)
        var exercise = exercises.find(ex => ex.id === exerciseId);
        if (exercise) {
            exercise = { "id": exercise.id, "name": exercise.name, "difficulty": exercise.difficulty, "muscle": exercise.muscle, "equipment": exercise.equipment }
            setDays(prevDays => {
                const newDays = { ...prevDays };

                let isNew = true;

                // Check if the exercise is already in any day
                Object.keys(newDays).forEach(d => {
                    if (newDays[d].find(ex => ex.id === exerciseId)) {
                        isNew = false;
                    }
                });

                Object.keys(newDays).forEach(d => {
                    newDays[d] = newDays[d].filter(e => e.id !== exerciseId);
                });

                days[day].push(exercise)
                newDays[day] = [...newDays[day], exercise];
                setModalOpen(false)
                return newDays;
            });
        }
    };
    const handleEndDrag = (exerciseId) => {
        setDays(prevDays => {
            const newDays = { ...prevDays };
            // Remove the exercise from all days
            Object.keys(newDays).forEach(day => {
                newDays[day] = newDays[day].filter(exercise => exercise.id !== exerciseId);
            });
            return newDays;
        });
    };

    const filteredExercises = exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(filter.toLowerCase()) ||
        exercise.muscle.toLowerCase().includes(filter.toLowerCase()) ||
        exercise.equipment.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="bg-sky-900/95 m-0.5 flex items-end mb-2 h-52 rounded-md">
                    <button className="text-sky-900 bg-white/85 p-1 px-2 m-2 rounded-lg shadow-xl">
                        Download
                    </button>
                </div>
                <DndProvider backend={HTML5Backend}>
                    <div className="flex flex-col lg:flex-row h-[calc(85vh-100px)]">
                        {screenSize.width > 1024 &&
                            <div className="flex flex-col border-4 w-full lg:w-3/12">
                                <div className="border-b-4">
                                    <legend className="p-2 font-semibold text-black">
                                        Recommended
                                    </legend>
                                    <input
                                        type="text"
                                        placeholder="Filter exercises..."
                                        onChange={(e) => setFilter(e.target.value)}
                                        className="p-2 w-[98%] rounded-sm mb-1"
                                    />
                                </div>
                                <div className="overflow-y-auto h-full">
                                    {filteredExercises.map((exercise) => (
                                        <DraggableCard key={exercise.id} exercise={exercise} move={false} onEndDrag={handleEndDrag} />
                                    ))}
                                </div>
                            </div>}
                        <div className={`flex flex-col border-4 ${screenSize.width>1024?'mx-3':""} w-full`}>
                            <legend className="ml-5 font-semibold text-center text-black">
                                Your Plan
                            </legend>
                            <div className="flex flex-wrap lg:flex-row w-full justify-center overflow-y-auto">
                                {Object.entries(days).map(([day, exe]) => (
                                    <>
                                        <DroppableZone key={day} day={day} onDrop={handleDrop} exercises={exe} move={true} />
                                        {screenSize.width < 1024 &&
                                            <>
                                                <button onClick={() => handleAddExercise(day)} className="p-1 bg-sky-800/70 text-white rounded h-fit self-start mt-3">
                                                    Add Exercise
                                                </button>
                                                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                                                    <div className="border-b-4">
                                                        <legend className="p-2 font-semibold text-black">
                                                            Recommended
                                                        </legend>
                                                        <input
                                                            type="text"
                                                            placeholder="Filter exercises..."
                                                            onChange={(e) => setFilter(e.target.value)}
                                                            className="p-2 w-[98%] rounded-sm mb-1"
                                                        />
                                                    </div>
                                                    <div className="overflow-y-auto h-full">
                                                        {filteredExercises.map((exercise) => (
                                                            <DraggableCard
                                                                key={exercise.id}
                                                                exercise={exercise}
                                                                onClick={() => handleDrop(currentDay, exercise.id)} // Use currentDay here
                                                            />
                                                        ))}
                                                    </div>
                                                </Modal>
                                            </>}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </DndProvider>
            </div>
        </>
    );
}