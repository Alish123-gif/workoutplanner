import React from "react";
import Card from "./Card";
import { useDrag } from 'react-dnd';

export default function DraggableCard({ exercise, place, onEndDrag, onClick, updateSets, updateReps }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { id: exercise.id },
        end: (item, monitor) => {
            const didDrop = monitor.didDrop();
            if (!didDrop && onEndDrag) {
                onEndDrag(item.id);
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} onClick={onClick}>
            <Card
                exerciseName={exercise.title}
                muscleName={exercise.type}
                difficultyColor={exercise.difficultyColor}
                difficulty={exercise.level}
                sets={exercise.sets}
                reps={exercise.reps}
                place={place}
                updateSets={(newSets) => updateSets(exercise.id, newSets)}
                updateReps={(newReps) => updateReps(exercise.id, newReps)}
            />
        </div>
    );
};
