import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Components/Layout';
import { mainRoutes, workoutRoutes } from './routes';
import { Exercise } from './pages';
import useAppContext from './context/contextProvider';
// Create a component to handle the underdevelopment route
const UnderDevelopment = () => {
  const { exercises } = useAppContext();
  const location = useLocation();
  const exerciseId = location.state?.exerciseId;
  if (exerciseId)
    return <Exercise exercise={exercises[exerciseId]} />;
  else
    return
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {mainRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="/workouts/underdevelopment" element={<UnderDevelopment />} />
          {workoutRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
