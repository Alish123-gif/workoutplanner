import React, { useState } from 'react';

export default function Card({ exerciseName, muscleName, difficulty, place, sets, reps, updateSets, updateReps }) {


    const buttonStyle = {
        width: '15px',
        height: '15px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        userSelect: 'none'
    };

    return (
        <div className='border-4 rounded-lg px-2 m-2 bg-white h-fit min-h-16'>
            <div className='flex gap-2 justify-between py-1'>
                <div className='text-base font-semibold'>
                    {exerciseName}<span className='ml-2 text-gray-500 text-xs'>{muscleName}</span>
                </div>
                <p className={`${difficulty === "beginner" ? "bg-green-400/60" : difficulty === "intermediate" ? "bg-yellow-400/60" : difficulty === "advanced" ? "bg-red-400/60" : ""} py-0.5 px-1 rounded-lg w-fit text-xs m-0 mt-1 self-center`}>{difficulty}</p>
            </div>

            {place === "day" && <div className='flex gap-4 justify-between py-2 text-gray-500'>
                <div>
                    <button style={buttonStyle} onClick={() => updateSets(sets - 1)}>-</button>
                    <span className='mx-2'>{sets} sets</span>
                    <button style={buttonStyle} onClick={() => updateSets(sets + 1)}>+</button>
                </div>
                <div>
                    <button style={buttonStyle} onClick={() => updateReps(reps - 1)}>-</button>
                    <span className='mx-2'>{reps} reps</span>
                    <button style={buttonStyle} onClick={() => updateReps(reps + 1)}>+</button>
                </div>
            </div>}
        </div>
    );
}
