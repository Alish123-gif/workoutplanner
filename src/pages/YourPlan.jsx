// YourPlan.js
import React, { useState, useEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import jsPDF from 'jspdf';
import { DroppableZone, DraggableCard, LazyLoader } from '../Components';
import useAppContext from '../context/contextProvider';
import Modal from '../Components/Modal';
import { useGetExecrsises } from '../lib/query/queries';
import { generatePDF } from '../lib/functions';

export default function YourPlan() {
    const { screenSize } = useAppContext();
    const { data: exercises, isPending } = useGetExecrsises();
    const [days, setDays] = useState({
        Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: []
    });
    const exercisesRef = useRef(exercises?.data || []);

    const [filter, setFilter] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentDay, setCurrentDay] = useState();
    const [visibleCount, setVisibleCount] = useState(10); // State for lazy loading

    useEffect(() => {
        exercisesRef.current = exercises;
    }, []);

    const handleAddExercise = (day) => {
        setCurrentDay(day); // Set the current day
        setModalOpen(true); // Open the modal
    };

    const updateExerciseSets = (exerciseId, newSets) => {
        setDays(prevDays => {
            return Object.fromEntries(
                Object.entries(prevDays).map(([day, exercises]) => [
                    day,
                    exercises.map(ex => ex.id === exerciseId ? { ...ex, sets: newSets } : ex)
                ])
            );
        });
    };

    const updateExerciseReps = (exerciseId, newReps) => {
        setDays(prevDays => {
            return Object.fromEntries(
                Object.entries(prevDays).map(([day, exercises]) => [
                    day,
                    exercises.map(ex => ex.id === exerciseId ? { ...ex, reps: newReps } : ex)
                ])
            );
        });
    };

    const handleDrop = (day, exerciseId) => {
        const exercise = exercisesRef.current.find(ex => ex.id === exerciseId);
        if (!exercise) {
            console.error('Exercise not found');
            return;
        }

        const updatedExercise = {
            ...exercise,
            sets: 3,
            reps: 10
        };

        setDays(prevDays => {
            const newDays = { ...prevDays };

            // Remove the exercise from all days before adding to the selected day
            Object.keys(newDays).forEach(d => {
                newDays[d] = newDays[d].filter(e => e.id !== exerciseId);
            });

            // Add the updated exercise to the selected day
            newDays[day] = [...newDays[day], updatedExercise];

            // Optionally close the modal if needed
            if (setModalOpen) {
                setModalOpen(false);
            }

            return newDays;
        });
    };

    const handleEndDrag = (exerciseId) => {
        setDays(prevDays => {
            const newDays = { ...prevDays };
            Object.keys(newDays).forEach(day => {
                newDays[day] = newDays[day].filter(exercise => exercise.id !== exerciseId);
            });
            return newDays;
        });
    };

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 10);
    };

    const filteredExercises = exercises?.filter(exercise =>
        exercise.title.toLowerCase().includes(filter.toLowerCase()) ||
        exercise.type.toLowerCase().includes(filter.toLowerCase()) ||
        exercise.equipment.toLowerCase().includes(filter.toLowerCase())
    ).slice(0, visibleCount);

    return (
        <>
            <div className="flex flex-col">
                <div className="bg-sky-900/95 m-0.5 h-52 flex items-end mb-2 rounded-md">
                    <button
                        className="text-sky-900 bg-white/85 p-1 px-2 m-2 rounded-lg shadow-xl"
                        onClick={generatePDF}
                    >
                        Download
                    </button>
                </div>
                <DndProvider backend={HTML5Backend}>
                    <div className="flex flex-row">
                        {screenSize.width > 1024 && (
                            <div className="flex flex-col border-4 w-3/12">
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
                                <div className="overflow-y-auto scrollable">
                                    {filteredExercises?.map((exercise) => (
                                        <DraggableCard key={exercise.id} exercise={exercise} move={false} onEndDrag={handleEndDrag} />
                                    ))}
                                    <LazyLoader onLoadMore={handleLoadMore} />
                                </div>
                            </div>
                        )}
                        <div className={`flex flex-col border-4 ${screenSize.width > 1024 ? 'mx-3' : ""} w-full`}>
                            <legend className="ml-5 font-semibold text-center text-black">
                                Your Plan
                            </legend>
                            <div className="flex flex-wrap lg:flex-row w-full justify-center overflow-y-auto">
                                {Object.entries(days).map(([day, exe]) => (
                                    <React.Fragment key={day}>
                                        <DroppableZone
                                            day={day}
                                            onDrop={handleDrop}
                                            exercises={exe}
                                            move={true}
                                            updateSets={updateExerciseSets}
                                            updateReps={updateExerciseReps}
                                            handleAddExercise={handleAddExercise}
                                        />
                                        {screenSize.width < 1024 && (
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
                                                    {filteredExercises?.map((exercise) => (
                                                        <DraggableCard
                                                            key={exercise.id}
                                                            exercise={exercise}
                                                            onClick={() => handleDrop(currentDay, exercise.id)}
                                                        />
                                                    ))}
                                                    <LazyLoader onLoadMore={handleLoadMore} />
                                                </div>
                                            </Modal>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </DndProvider>
            </div>
        </>
    );
}
