import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Exercise = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const { exercise } = useLocation().state;
    
    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        q: "how to do " + exercise.title,
                        maxResults: 1,
                        order: 'viewCount', // This orders the results by view count, getting the most popular video
                        type: 'video',
                        key: 'AIzaSyDM7PY2pGPq_ZlOBqH0Dhq3np8nNmXbVf0', // Replace with your actual API key
                    }
                });

                if (response.data.items.length > 0) {
                    const videoId = response.data.items[0].id.videoId;
                    setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
                }
            } catch (error) {
                console.error('Error fetching video', error);
            }
        };

        fetchVideo();
    }, [exercise.title]);
    return (
        <div className='flex justify-center bg-gradient-to-r from-gray-800 via-sky-800 to-gray-800 m-0.5 rounded-lg'>
            <div className="flex flex-col mt-10 max-w-md rounded-lg overflow-hidden shadow-lg m-4 p-4 bg-white w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                <div className='flex justify-center'>
                    {videoUrl && (
                        <iframe
                            width="100%" height="250"
                            src={videoUrl}
                            title="YouTube video player"
                            className='rounded-2xl border-8 border-sky-800/90'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <div className="px-6 py-4 bg-sky-800/90 mt-4 rounded-md text-white w-fit self-center">
                    <div className="font-bold text-2xl mb-2">{exercise.title}</div>
                    <p className="text-sm mt-2">
                        Muscle: {exercise.type}
                    </p>
                    <p className='text-sm mt-2'>
                        Difficulty: <span className={`${exercise.difficulty === "beginner" ? "text-green-400" : exercise.difficulty === "intermediate" ? "text-yellow-400" : exercise.difficulty === "expert" ? "text-red-400" : ""}`}>{exercise.difficulty}</span>
                    </p>
                </div>
                <div className='px-4 py-2 mt-4 text-sm text-gray-700 overflow-y-auto max-h-40 border'>
                    <p>
                        {exercise.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Exercise;
