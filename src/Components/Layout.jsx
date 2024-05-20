// src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { SideBar, Footer } from '.';
import { Logo } from '../data/dummy';

const Layout = ({ children }) => {
  const location = useLocation();
  const notLocations = ['/login', '/signup'];
  const show = !notLocations.includes(location.pathname);

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        {children}
      </div>
      {show && <SideBar />}
      // {show && <Logo className="absolute top-0 right-5 mt-5" />}
      {show && <Footer className="w-full" />}
    </div>
  );
};

export default Layout;
