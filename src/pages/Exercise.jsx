// Exercise.jsx
import React from 'react';

const Exercise = ({ exercise }) => {
    return (
        <div className='flex bg-gradient-to-r from-gray-800 via-sky-800 to-gray-800 m-0.5 rounded-lg'>
            <div className="flex flex-col mt-16 max-w-m rounded overflow-hidden shadow-lg m-4 w-1/2 p-2 bg-white h-[88%]">
                <div className='flex justify-left '>
                    <iframe
                        width="480" height="250"
                        src="https://www.youtube.com/embed/tuwHzzPdaGc?si=zt1kbe2R1Z-iC79F"
                        title="YouTube video player"
                        frameborder="0"
                        className='rounded-2xl'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2">{exercise.name}</div>
                        <p className="text-gray-700 text-ms mt-4">
                            Muscle: {exercise.muscle}
                        </p>
                        <p className="text-gray-600 text-sm">
                            Difficulty: {exercise.difficulty}
                        </p>
                    </div>
                </div>

                <p className='flex mt-4 font-semibold text-md scrollable'>
                    The barbell bench press is a classic exercise popular among all weight lifting circles. From bodybuilders to powerlifters, the bench press is a staple chest exercise in nearly every workout program.
                    <br />
                    For powerlifters, it is known as one of the “big three” lifts which includes the squat, deadlift, and bench press. For athletes, 1 rep max on bench press is a good indicator for on field/court performance. And for bodybuilders, the bench press is a compound exercise that targets many of the muscles in your upper body.
                    <br />
                    By performing the bench press, you primarily work your pectoralis major (your chest). Other muscles which assist in moving the barbell during a bench press are other muscles of the chest, triceps, and shoulders.
                    <br />
                    Not everyone is built to perform the traditional barbell bench press, so several variations have been created to ensure people can train this crucial movement pattern in a safe and comfortable way.
                </p>
            </div>
        </div>

    );
};

export default Exercise;
