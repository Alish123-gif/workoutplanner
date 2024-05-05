import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MuscleBodySvg from '../Components/MuscleSketch';
import SvgBackMuscles from '../Components/BackMuscles';
import { IconBar, InfoCard, Arrow } from '../Components';
import { cardsData } from '../data/dummy';

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState('MuscleBodySvg');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSwitchComponent = () => {
    setCurrentComponent(currentComponent === 'MuscleBodySvg' ? 'SvgBackMuscles' : 'MuscleBodySvg');
  };

  const renderMainContent = () => {
    if (windowWidth < 500) {
      return (
        <div className="flex items-center justify-between">
          <button onClick={handleSwitchComponent} className="bg-white/20 text-white px-3 py-2 rounded-lg transition duration-300 hover:bg-blue-800 shadow-lg mr-4">
            <Arrow className={'-rotate-90'} />
          </button>
          {currentComponent === 'MuscleBodySvg' ? <MuscleBodySvg /> : <SvgBackMuscles />}
          <button onClick={handleSwitchComponent} className="bg-white/20 text-white px-3 py-2 rounded-lg transition duration-300 hover:bg-blue-800 shadow-lg ml-4">
            <Arrow className={'rotate-90'} />
          </button>
        </div>
      );
    } else {
      return (
        <div className="sm:mt-0 flex justify-center gap-10">
          <MuscleBodySvg />
          <SvgBackMuscles />
        </div>
      );
    }
  };

  return (
    <div className="w-full flex flex-col mt-0">
      <div className="relative flex-1 flex justify-center items-center bg-black">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 via-sky-800 to-gray-800 opacity-75"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-around w-full h-[500px]">
          <div className="sm:mt-0 flex justify-center gap-10 md:block">
            {renderMainContent()}
          </div>
          <div className="flex flex-col items-center md:items-start p-1 sm:mt-0">
            <h1 className="text-3xl sm:text-3xl font-bold text-white mb-6 text-center md:text-left">
              Welcome to Flex Gym
            </h1>
            <p className="text-sm md:text-lg text-gray-200 mb-4 text-center md:text-left">
              Achieve your fitness goals with our state-of-the-art <br />equipment and experienced trainers.
            </p>
            <Link to={"/login"}><button className="bg-white/70 stroke-black stroke-2 text-black px-5 py-2 rounded-lg transition duration-300 hover:bg-blue-900/90 hover:text-white shadow-lg">
              Join Now
            </button></Link>
          </div>
        </div>
      </div>

      <IconBar />

      <div className="flex flex-wrap justify-center p-1 gap-1">
        {cardsData.map((cardInfo, index) => (
          <InfoCard
            key={index}
            image={cardInfo.Image}
            title={cardInfo.Title}
            description={cardInfo.Description}
            link="#"
            className="transform hover:scale-105 transition duration-300 ease-in-out shadow-xl"
          />
        ))}
      </div>
    </div>

  );
};

export default Home;
