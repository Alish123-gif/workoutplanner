import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Components/Layout';
import { mainRoutes, workoutRoutes } from './routes';

const App = () => {
  return (
    <Layout>
      <Routes>
        {mainRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {workoutRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
