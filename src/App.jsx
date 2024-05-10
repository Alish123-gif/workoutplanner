// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import { mainRoutes, workoutRoutes } from './routes';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {mainRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
          {workoutRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
