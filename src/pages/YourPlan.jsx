import React, { useState, useEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import jsPDF from 'jspdf';
import { DroppableZone, DraggableCard } from '../Components';
import useAppContext from '../context/contextProvider';
import Modal from '../Components/Modal';

export default function YourPlan() {
    const { screenSize, exercises, setExercises } = useAppContext();
    const [days, setDays] = useState({
        Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: []
    });
    const exercisesRef = useRef(exercises);
    const [filter, setFilter] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentDay, setCurrentDay] = useState();

    

    useEffect(() => {
        exercisesRef.current = exercises;
    }, [exercises]);

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

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFillColor(12, 74, 110); // Blue color
        doc.setDrawColor(255); // White border color
        doc.roundedRect(2, 2, 206, 36, 5, 5, 'F'); // Rounded blue background rectangle with barely visible margin

        doc.setFontSize(18);
        doc.setTextColor(255); // White color
        doc.text('Your Exercise Plan', 10, 17);
        let y = 45; // Initial y position for content
        let pageHeight = doc.internal.pageSize.height;

        Object.entries(days).forEach(([day, exercises]) => {
            if (exercises.length > 0) {
                if (y + 40 + exercises.length * 10 > pageHeight) {
                    doc.addPage();
                    y = 20;
                }
                doc.setFillColor(200, 200, 200); // Gray background color
                doc.rect(10, y, 190, 10, 'F');

                doc.setFontSize(14);
                doc.setTextColor(0); // Black color
                doc.text(day, 15, y + 7);

                doc.setFillColor(240, 240, 240); // Light gray background color for table headers
                doc.rect(10, y + 12, 190, 10, 'F');

                doc.setFontSize(12);
                doc.setTextColor(50); // Dark gray color for text
                doc.text('Exercise Name', 15, y + 20);
                doc.text('Muscle Type', 75, y + 20);
                doc.text('Reps', 115, y + 20);
                doc.text('Sets', 155, y + 20);

                exercises.forEach((exercise, index) => {
                    if (y + 30 + index * 10 > pageHeight) {
                        doc.addPage();
                        y = 20;
                    }

                    const rowColor = index % 2 === 0 ? [255, 255, 255] : [245, 245, 245];

                    doc.setFillColor(rowColor[0], rowColor[1], rowColor[2]);
                    doc.rect(10, y + 22 + index * 10, 190, 10, 'F');

                    doc.setTextColor(0);
                    doc.text(exercise.name, 15, y + 30 + index * 10);
                    doc.text(exercise.muscle, 75, y + 30 + index * 10);
                    doc.text(exercise.reps.toString(), 115, y + 30 + index * 10);
                    doc.text(exercise.sets.toString(), 155, y + 30 + index * 10);
                });

                y += 30 + exercises.length * 10;
            }
        });

        doc.save('exercise_plan.pdf');
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

    const filteredExercises = exercises.filter(exercise =>
        exercise.name.toLowerCase().includes(filter.toLowerCase()) ||
        exercise.muscle.toLowerCase().includes(filter.toLowerCase()) ||
        exercise.equipment.toLowerCase().includes(filter.toLowerCase())
    );

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
                                    {filteredExercises.map((exercise) => (
                                        <DraggableCard key={exercise.id} exercise={exercise} move={false} onEndDrag={handleEndDrag} />
                                    ))}
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
                                                    {filteredExercises.map((exercise) => (
                                                        <DraggableCard
                                                            key={exercise.id}
                                                            exercise={exercise}
                                                            onClick={() => handleDrop(currentDay, exercise.id)}
                                                        />
                                                    ))}
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
