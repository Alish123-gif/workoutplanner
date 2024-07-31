import React, { useState, useEffect, useRef } from 'react';
import bg from '../data/workouts.jpg';
import { Link } from 'react-router-dom';
import { useGetExecrsises } from '../lib/query/queries';
import { useInView } from 'react-intersection-observer';

export default function Workouts(filters) {
  const [filter, setFilter] = useState(`${filters.filters ? filters.filters : ""}`);
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const { data: exercises, isLoading } = useGetExecrsises();
  const [shuffledExercises, setShuffledExercises] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setVisibleCount(prevCount => prevCount + 10);
    }
  }, [inView]);

  // Function to shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle data on initial fetch
  useEffect(() => {
    if (exercises) {
      setShuffledExercises(shuffleArray([...exercises]));
    }
  }, [exercises]);

  const filteredExercises = shuffledExercises?.filter(exercise =>
    exercise.title.toLowerCase().includes(filter.toLowerCase()) ||
    exercise.type.toLowerCase().includes(filter.toLowerCase()) ||
    exercise.equipment.toLowerCase().includes(filter.toLowerCase())
  )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    })
    .slice(0, visibleCount);

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="w-full flex flex-col mt-0">
      <div className="relative flex-1 flex justify-center items-center bg-black background-section"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="relative top-0 left-0 w-full h-80 bg-gradient-to-r from-gray-800 via-sky-800 to-gray-800 opacity-75 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-3xl font-bold">Exercise Database</h1>
          <p className="text-white text-lg mt-2">
            The most comprehensive database of free video exercise guides! Learn how to perform exercises using correct technique.
          </p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Filter exercises..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="p-3 py-2 w-full border-2 text-[13px]"
      />
      <div className="p-2 scrollable mx-2">
        <div className="mt-0">
          <table className="w-full text-xs text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th onClick={() => handleSort('title')}>Name</th>
                <th onClick={() => handleSort('type')}>Type</th>
                <th onClick={() => handleSort('equipment')}>Equipment</th>
                <th onClick={() => handleSort('level')}>Level</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? [] : filteredExercises.map(exercise => (
                <tr key={exercise.id} className="bg-white border-b text-[11px]">
                  <td className='p-1.5'><Link to={`underdevelopment`} state={{ exercise }}>{exercise.title}</Link></td>
                  <td className='p-1.5'>{exercise.type}</td>
                  <td className='p-1.5'>{exercise.equipment}</td>
                  <td className='p-1.5'>
                    <p className={`${exercise.level === "Beginner" ? "bg-green-400/60" : exercise.level === "Intermediate" ? "bg-yellow-400/60" : exercise.level === "Expert" ? "bg-red-400/60" : " "} p-1 rounded-lg w-fit`}>{exercise.level}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoading && <div>Loading...</div>}
          <div ref={ref} />
        </div>
      </div>
    </div>
  );
}
