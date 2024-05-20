import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bg from '../data/workouts.jpg';
import { Link } from 'react-router-dom';
import useAppContext from '../context/contextProvider';

export default function Workouts(filters) {
  const [filter, setFilter] = useState(`${filters.filters ? filters.filters : ""}`);
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const {exercises} = useAppContext();
  console.log(exercises)
  const filteredExercises = exercises
    .filter(exercise =>
      exercise.name.toLowerCase().includes(filter.toLowerCase()) ||
      exercise.muscle.toLowerCase().includes(filter.toLowerCase()) ||
      exercise.equipment.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="w-full flex flex-col mt-0">
      <div className="relative flex-1 flex justify-center items-center bg-black background-section "
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

        <div className="mt-0 ">
          <table className="w-full text-xs text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th onClick={() => handleSort('name')}>Name</th>
                <th onClick={() => handleSort('type')}>Type</th>
                <th onClick={() => handleSort('muscle')}>Muscle</th>
                <th onClick={() => handleSort('equipment')}>Equipment</th>
                <th onClick={() => handleSort('difficulty')}>Level</th>
              </tr>
            </thead>
            <tbody>
              {filteredExercises.map(exercise => (
                <tr key={exercise.id} className="bg-white border-b text-[11px]">
                  <td className='p-1.5'><Link to={`underdevelopment`} state={{exerciseId:exercise.id, exerciseName:exercise.name}}>{exercise.name}</Link></td>
                  <td className='p-1.5'>{exercise.type}</td>
                  <td className='p-1.5'>{exercise.muscle}</td>
                  <td className='p-1.5'>{exercise.equipment}</td>
                  <td className='p-1.5'>
                    <p className={`${exercise.difficulty == "Beginner"?"bg-green-400/60":exercise.difficulty == "Intermediate"?"bg-yellow-400/60":exercise.difficulty == "Expert"?"bg-red-400/60":" "} p-1 rounded-lg w-fit`}>{exercise.difficulty}</p>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
