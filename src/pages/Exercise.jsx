import React from 'react';

const Exercise = ({ exercise }) => {
    return (
        <div className='flex justify-center bg-gradient-to-r from-gray-800 via-sky-800 to-gray-800 m-0.5 rounded-lg'>
            <div className="flex flex-col mt-10 max-w-md rounded-lg overflow-hidden shadow-lg m-4 p-4 bg-white w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                <div className='flex justify-center'>
                    <iframe
                        width="100%" height="250"
                        src="https://www.youtube.com/embed/tuwHzzPdaGc?si=zt1kbe2R1Z-iC79F"
                        title="YouTube video player"
                        frameBorder="0"
                        className='rounded-2xl border-8 border-sky-800/90'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="px-6 py-4 bg-sky-800/90 mt-4 rounded-md text-white w-fit self-center">
                    <div className="font-bold text-2xl mb-2">{exercise.name}</div>
                    <p className="text-sm mt-2">
                        Muscle: {exercise.muscle}
                    </p>
                    <p className='text-sm mt-2'>
                        Difficulty: <span className={`${exercise.difficulty === "beginner" ? "text-green-400" : exercise.difficulty === "intermediate" ? "text-yellow-400" : exercise.difficulty === "advanced" ? "text-red-400" : ""}`}>{exercise.difficulty}</span>
                    </p>
                </div>
                <div className='px-4 py-2 mt-4 text-sm text-gray-700 overflow-y-auto max-h-40 border'>
                    <p>
                        The barbell bench press is a classic exercise popular among all weight lifting circles. From bodybuilders to powerlifters, the bench press is a staple chest exercise in nearly every workout program.
                        <br />
                        For powerlifters, it is known as one of the “big three” lifts which includes the squat, deadlift, and bench press. For athletes, 1 rep max on bench press is a good indicator for on-field/court performance. And for bodybuilders, the bench press is a compound exercise that targets many of the muscles in your upper body.
                        <br />
                        By performing the bench press, you primarily work your pectoralis major (your chest). Other muscles which assist in moving the barbell during a bench press are other muscles of the chest, triceps, and shoulders.
                        <br />
                        Not everyone is built to perform the traditional barbell bench press, so several variations have been created to ensure people can train this crucial movement pattern in a safe and comfortable way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Exercise;
