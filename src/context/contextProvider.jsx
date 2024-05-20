import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import axios from 'axios';


// Initial state
const initialState = {
  isOpen: true,
  content: null,
  active: false,
  activeID: null,
  screenSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

// Create context
const AppContext = createContext();

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_IS_OPEN':
      return { ...state, isOpen: !state.isOpen };
    case 'SET_CONTENT':
      return { ...state, content: action.payload };
    case 'SET_ACTIVE':
      return { ...state, active: action.payload };
    case 'SET_ACTIVE_ID':
      return { ...state, activeID: action.payload };
    case 'SET_SCREEN_SIZE':
      return { ...state, screenSize: action.payload };
    default:
      return state;
  }
}

// Context Provider Component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const setIsOpen = () => dispatch({ type: 'SET_IS_OPEN' });
  const setContent = content => dispatch({ type: 'SET_CONTENT', payload: content });
  const setActive = active => dispatch({ type: 'SET_ACTIVE', payload: active });
  const setActiveID = activeID => dispatch({ type: 'SET_ACTIVE_ID', payload: activeID });
  const setScreenSize = screenSize => dispatch({ type: 'SET_SCREEN_SIZE', payload: screenSize });
  const [exercises, setExercises] = useState([]);
  const [days, setDays] = useState({
    Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [], Sunday: []
  });

  const toggleSidebar = () => {
    setIsOpen();
  };

  useEffect(() => {
    axios.get('https://alishibliportfolio.000webhostapp.com/fetch_exercises.php')
      .then(response => {
        const fetchedExercises = response.data.map(ex => ({
          id: ex.id,
          name: ex.title,
          muscle: ex.muscle,
          equipment: ex.equipment,
          difficulty: ex.difficulty,
          desc: ex.desc
        })).slice(0, 500);
        setExercises(fetchedExercises);  // Update state
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setScreenSize]);
  // Value provided to context consumers
  const value = {
    ...state,
    setIsOpen,
    setContent,
    setActive,
    setActiveID,
    setScreenSize,
    toggleSidebar,
    days,
    setDays,
    exercises,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use context
export const useAppContext = () => useContext(AppContext);

export default useAppContext;
