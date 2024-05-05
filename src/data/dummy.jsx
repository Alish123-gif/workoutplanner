import React from 'react';
import W5x5 from './StrongLifts5x5.png'
import PX50 from './PX50.jpg'
import CrossFit from './CrossFit.jpg'
import HIIT from './HIIT.jpg'
import BodyWeight from './BodyweightWorkout.webp'
import logo from './logo.jsx';
import Instagram from './instagram.jsx'
import benchPress from '../data/barbell-bench-press.webp';
import Facebook from './Facebook.jsx';
import Twitter from './Twitter.jsx';
import Linkedin from './Linkedin.jsx';
import GitHub from './Github.jsx';
export const cardsData = [
    {
        Title: "StrongLifts 5x5",
        Description: "Beginner strength program with five compound lifts, 3x/week, 5 sets of 5 reps each, for muscle and strength gains",
        Image: W5x5
    },
    {
        Title: "P90X",
        Description: "90-day home program mixing resistance, cardio, and flexibility workouts for overall fitness improvement and muscle confusion",
        Image: PX50
    },
    {
        Title: "CrossFit",
        Description: "High-intensity fitness regimen blending weightlifting, gymnastics, and cardio for strength, endurance, and functional fitness.",
        Image: CrossFit
    },
    {
        Title: "HIIT (High-Intensity Interval Training)",
        Description: "Intense intervals alternating with rest for efficient calorie burn and cardiovascular health, customizable with diverse exercises.",
        Image: HIIT
    },
    {
        Title: "Bodyweight Training",
        Description: "Utilizes body weight for strength and endurance exercises, accessible, minimal equipment, focuses on functional movements and lean muscle.",
        Image: BodyWeight
    },
]


export const exercises = [
    { id: 1, url: "https://youtu.be/tuwHzzPdaGc", name: 'Bench Press', muscle: 'Chest', equipment: 'Barbell', difficulty: "beginner" },
    { id: 2, url: "", name: 'Squat', muscle: 'Legs', equipment: 'Barbell', difficulty: "intermediate" },
    { id: 3, url: "", name: 'Deadlift', muscle: 'Back', equipment: 'Barbell', difficulty: "advanced" },
    { id: 4, url: "", name: 'Pull-up', muscle: 'Back', equipment: 'Bodyweight', difficulty: "intermediate" },
    { id: 5, url: "", name: 'Push-up', muscle: 'Chest', equipment: 'Bodyweight', difficulty: "beginner" },
    { id: 6, url: "", name: 'Barbell Row', muscle: 'Back', equipment: 'Barbell', difficulty: "intermediate" },
    { id: 7, url: "", name: 'Dumbbell Bench Press', muscle: 'Chest', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 8, url: "", name: 'Leg Press', muscle: 'Legs', equipment: 'Machine', difficulty: "intermediate" },
    { id: 9, url: "", name: 'Lunges', muscle: 'Legs', equipment: 'Bodyweight/Dumbbell', difficulty: "intermediate" },
    { id: 10, url: "", name: 'Romanian Deadlift', muscle: 'Hamstrings', equipment: 'Barbell/Dumbbell', difficulty: "advanced" },
    { id: 11, url: "", name: 'Dumbbell Shoulder Press', muscle: 'Shoulders', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 12, url: "", name: 'Bicep Curl', muscle: 'Biceps', equipment: 'Dumbbell/Barbell', difficulty: "beginner" },
    { id: 13, url: "", name: 'Tricep Dip', muscle: 'Triceps', equipment: 'Bodyweight/Bench', difficulty: "intermediate" },
    { id: 14, url: "", name: 'Plank', muscle: 'Core', equipment: 'Bodyweight', difficulty: "beginner" },
    { id: 15, url: "", name: 'Russian Twist', muscle: 'Core', equipment: 'Bodyweight/Dumbbell', difficulty: "intermediate" },
    { id: 16, url: "", name: 'Hanging Leg Raise', muscle: 'Core', equipment: 'Bodyweight', difficulty: "advanced" },
    { id: 17, url: "", name: 'Calf Raise', muscle: 'Calves', equipment: 'Machine/Dumbbell', difficulty: "beginner" },
    { id: 18, url: "", name: 'Front Squat', muscle: 'Legs', equipment: 'Barbell', difficulty: "intermediate" },
    { id: 19, url: "", name: 'Incline Bench Press', muscle: 'Chest', equipment: 'Barbell', difficulty: "intermediate" },
    { id: 20, url: "", name: 'Seated Row', muscle: 'Back', equipment: 'Machine', difficulty: "intermediate" },
    { id: 21, url: "", name: 'Hamstring Curl', muscle: 'Hamstrings', equipment: 'Machine', difficulty: "intermediate" },
    { id: 22, url: "", name: 'Lateral Raise', muscle: 'Shoulders', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 23, url: "", name: 'Reverse Fly', muscle: 'Back', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 24, url: "", name: 'Skull Crushers', muscle: 'Triceps', equipment: 'Barbell/Dumbbell', difficulty: "intermediate" },
    { id: 25, url: "", name: 'Leg Extension', muscle: 'Quadriceps', equipment: 'Machine', difficulty: "beginner" },
    { id: 26, url: "", name: 'Arnold Press', muscle: 'Shoulders', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 27, url: "", name: 'Chest Fly', muscle: 'Chest', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 28, url: "", name: 'Good Morning', muscle: 'Lower Back', equipment: 'Barbell', difficulty: "advanced" },
    { id: 29, url: "", name: 'Decline Bench Press', muscle: 'Chest', equipment: 'Barbell', difficulty: "intermediate" },
    { id: 30, url: "", name: 'Pulldown', muscle: 'Back', equipment: 'Machine', difficulty: "intermediate" },
    { id: 31, url: "", name: 'Box Jump', muscle: 'Legs', equipment: 'Box', difficulty: "advanced" },
    { id: 32, url: "", name: 'Standing Calf Raise', muscle: 'Calves', equipment: 'Machine/Dumbbell', difficulty: "intermediate" },
    { id: 33, url: "", name: 'Diamond Push-up', muscle: 'Triceps', equipment: 'Bodyweight', difficulty: "intermediate" },
    { id: 34, url: "", name: 'Barbell Shrug', muscle: 'Traps', equipment: 'Barbell', difficulty: "intermediate" },
    { id: 35, url: "", name: 'Sumo Deadlift', muscle: 'Legs/Back', equipment: 'Barbell', difficulty: "intermediate" },
    { id: 37, url: "", name: 'Pistol Squat', muscle: 'Legs', equipment: 'Bodyweight', difficulty: "advanced" },
    { id: 38, url: "", name: 'Renegade Row', muscle: 'Back/Core', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 39, url: "", name: 'Dumbbell Step-Up', muscle: 'Legs', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 40, url: "", name: 'Dips', muscle: 'Chest/Triceps', equipment: 'Bodyweight', difficulty: "intermediate" },
    { id: 41, url: "", name: 'Mountain Climbers', muscle: 'Core', equipment: 'Bodyweight', difficulty: "intermediate" },
    { id: 42, url: "", name: 'Hammer Curl', muscle: 'Biceps', equipment: 'Dumbbell', difficulty: "intermediate" },
    { id: 43, url: "", name: 'Superman', muscle: 'Lower Back', equipment: 'Bodyweight', difficulty: "beginner" },
    { id: 44, url: "", name: 'Cable Crunch', muscle: 'Core', equipment: 'Cable Machine', difficulty: "intermediate" },
];

export const PRODUCTS = [
    { name: "Drag And Drop", link: "#" },
    { name: "Visual Studio X", link: "#" },
    { name: "Easy Content", link: "#" },
];
export const RESOURCES = [
    { name: "Industries and tools", link: "#" },
    { name: "Use cases", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Online evenet", link: "#" },
    { name: "Nostrud exercitation", link: "#" },
];
export const COMPANY = [
    { name: "Diversity & inclusion", link: "#" },
    { name: "About us", link: "#" },
    { name: "Press", link: "#" },
    { name: "Customer Stories", link: "#" },
    { name: "Online communities", link: "#" },
];
export const SUPPORT = [
    { name: "Documentation", link: "#" },
    { name: "Tutorials & guides", link: "#" },
    { name: "Webinars", link: "#" },
    { name: "Open-source", link: "#" },
];

export const Icons = [
    { name: "logo-facebook", link: <Facebook /> },
    { name: "logo-twitter", link: <Twitter /> },
    { name: "logo-github", link: <GitHub/> },
    { name: "logo-linkedin", link: <Linkedin/> },
    { name: "logo-instagram", link: <Instagram /> },
];


export { logo as Logo }