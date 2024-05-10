// src/routes.js
import { Home, Login, SignUp, YourPlan, Workouts, Exercise } from './pages';
import { exercises } from './data/dummy';

const workoutFilters = [
  'chest', 'core', 'arms', 'forearms', 'legs', 'calves', 'shoulders', 'traps', 'back'
];

export const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/gym", element: <Home /> },
  { path: "/index.html", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/yourplan", element: <YourPlan /> },
  { path: "/contactus", element: <Home /> },
  { path: "/workouts", element: <Workouts /> },
  { path: "/underdevelopment", element: <Exercise exercise={exercises[0]} /> }
];

export const workoutRoutes = workoutFilters.flatMap(filter => [
  { path: `/home/workouts/${filter}`, element: <Workouts filters={filter} /> },
  { path: `/workouts/${filter}`, element: <Workouts filters={filter} /> }
]);
