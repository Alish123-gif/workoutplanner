import React, { useState } from 'react';
import DraggableCard from './DraggableCard';
import { useDrop } from 'react-dnd';
import useAppContext from '../context/contextProvider';

export default function DroppableZone({ day, onDrop, exercises, updateSets, updateReps, handleAddExercise }) {
    const { screenSize } = useAppContext();
    const [isOpen, setIsOpen] = useState(false); // State to manage open/folded
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'card',
        drop: (item, monitor) => {
            if (monitor.canDrop()) {
                onDrop(day, item.id);
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver({ shallow: true }),
        }),
    }));

    // Toggle function for open/folded state
    const toggleOpen = () => setIsOpen(!isOpen);

    // Conditional styles for the container
    const containerStyle = isOpen ? 'min-w-80 min-h-60 flex flex-col items' : 'max-w-14 h-80 items-center border-l-0 ';
    const backgroundColor = isOver ? 'bg-blue-200' : 'bg-gray-500/40';
    const dayStyle = isOpen ? 'text-center w-full mt-1' : 'rotate-90 origin-bottom mt-4 mr-4 ';

    return (
        <div ref={drop} onClick={isOpen?null: toggleOpen} className={`border-2 m-2 flex-grow ${containerStyle} ${backgroundColor}`} >
            <div className={`text-white font-semibold text-2xl ${dayStyle}`} onClick={isOpen? toggleOpen:null} >{day}</div>
            {isOpen && exercises.map(
                exercise => (
                    <DraggableCard
                        exercise={exercise}
                        key={exercise.id}
                        place={"day"}
                        updateSets={updateSets}
                        updateReps={updateReps}
                    />
                ))}

            {isOpen && screenSize.width < 1024 &&
                <button
                    onClick={() => handleAddExercise(day)}
                    className="p-1 bg-sky-800/70 text-white rounded h-fit mt-3 mx-1 ">
                    Add Exercise
                </button>}
        </div>
    );
};
