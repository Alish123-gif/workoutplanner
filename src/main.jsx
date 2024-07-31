import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context/contextProvider';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './lib/query/QueryProvider';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
