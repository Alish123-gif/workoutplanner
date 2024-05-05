import React from "react";
import Card from "./Card";
import { useDrag } from 'react-dnd';
export default function DraggableCard({ exercise, place}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { id: exercise.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    if(isDragging){
        console.log(exercise.name + " " +exercise.id)
    }

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <Card
                exerciseName={exercise.name}
                muscleName={exercise.muscle}
                difficultyColor={exercise.difficultyColor}
                difficulty={exercise.difficulty}
                sets={3}
                reps={10}
                place={place}
            />
        </div>
    );
};