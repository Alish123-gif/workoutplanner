import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SideBar, Footer } from './Components';
import { Workouts, Home, Login, YourPlan, Exercise, SignUp } from './pages';
import { exercises, Logo } from './data/dummy';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const notLocations = ['/login', '/signup']
  const show = !notLocations.includes(location.pathname);

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-grow'>
        <Routes>
          <Route path="/gym" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/yourplan" element={<YourPlan />} />
          <Route path="/contactus" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/underdevelopment" element={<Exercise exercise={exercises[0]}/>}/>

          <Route path="home/workouts/chest" element={<Workouts filters="chest" />} />
          <Route path="home/workouts/upperabs" element={<Workouts filters="upperabs" />} />
          <Route path="home/workouts/biceps" element={<Workouts filters="biceps" />} />
          <Route path="home/workouts/triceps" element={<Workouts filters="triceps" />} />
          <Route path="home/workouts/forearms" element={<Workouts filters="forearms" />} />
          <Route path="home/workouts/quads" element={<Workouts filters="quads" />} />
          <Route path="home/workouts/hamstring" element={<Workouts filters="hamstring" />} />
          <Route path="home/workouts/calves" element={<Workouts filters="calves" />} />
          <Route path="home/workouts/lowerabs" element={<Workouts filters="lowerabs" />} />
          <Route path="home/workouts/shoulders" element={<Workouts filters="shoulders" />} />
          <Route path="home/workouts/traps" element={<Workouts filters="traps" />} />
          <Route path="workouts/chest" element={<Workouts filters="chest" />} />
          <Route path="workouts/upperabs" element={<Workouts filters="upperabs" />} />
          <Route path="workouts/biceps" element={<Workouts filters="biceps" />} />
          <Route path="workouts/triceps" element={<Workouts filters="triceps" />} />
          <Route path="workouts/forearms" element={<Workouts filters="forearms" />} />
          <Route path="workouts/quads" element={<Workouts filters="quads" />} />
          <Route path="workouts/hamstring" element={<Workouts filters="hamstring" />} />
          <Route path="workouts/calves" element={<Workouts filters="calves" />} />
          <Route path="workouts/lowerabs" element={<Workouts filters="lowerabs" />} />
          <Route path="workouts/shoulders" element={<Workouts filters="shoulders" />} />
          <Route path="workouts/traps" element={<Workouts filters="traps" />} />
        </Routes>
      </div>

      {show && <SideBar />}
      {show && <Logo className="absolute top-0 right-5 mt-5" />}
      {show && <Footer className="absolute bottom-0 w-full" />}
    </div>
  );
};

export default App;
