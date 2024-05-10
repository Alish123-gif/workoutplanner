import React, { useState } from 'react';
import DraggableCard from './DraggableCard';
import { useDrop } from 'react-dnd';
import Modal from './Modal';


export default function DroppableZone({ day, onDrop, exercises, updateSets, updateReps }) {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'card',
        drop: (item) => onDrop(day, item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div ref={drop} className={`border-2 m-2 min-w-60 min-h-10 inline-block ${isOver ? 'bg-blue-200' : 'bg-white'}`}>
            <div className='text-center w-full underline underline-offset-8'>{day}</div>
            {exercises.map(exercise => (
                <DraggableCard
                    exercise={exercise}
                    key={exercise.id}
                    place={"day"}
                    updateSets={updateSets}
                    updateReps={updateReps}
                />
            ))}

        </div>
    );
};