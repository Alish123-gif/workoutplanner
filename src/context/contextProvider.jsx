import React, { createContext, useReducer, useContext } from 'react';


// Initial state
const initialState = {
  isOpen: true,
  content: null,
  active: false,
  activeID: null,
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
  const setIsMobile = isMobile => dispatch({ type: 'SET_IS_MOBILE', payload: isMobile });


  const toggleSidebar = () => {
    setIsOpen();
  };

  // Value provided to context consumers
  const value = {
    ...state,
    setIsOpen,
    setContent,
    setActive,
    setActiveID,
    setIsMobile,
    toggleSidebar,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use context
export const useAppContext = () => useContext(AppContext);

export default useAppContext;
