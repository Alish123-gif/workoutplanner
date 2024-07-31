import { Home, Login, SignUp, YourPlan, Workouts, Exercise } from './pages';


const workoutFilters = [
  'chest', 'biceps', 'abductors', 'abdominals', 'forearms', 'hamstrings', 'calves', 'shoulders', 'traps', 'lowerback', 'middleback', 'lats', 'glutes', 'abductors', 'quadriceps', 'triceps'
];

export const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/index.html", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/yourplan", element: <YourPlan /> },
  { path: "/workouts/underdevelopment", element: <Exercise /> },
  { path: "/workouts", element: <Workouts /> },
];

export const workoutRoutes = workoutFilters.flatMap(filter => [
  { path: `/home/workouts/${filter}`, element: <Workouts filters={filter} /> },
  { path: `/workouts/${filter}`, element: <Workouts filters={filter} /> }
]);
