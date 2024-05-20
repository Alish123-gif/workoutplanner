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
        Description: "beginner strength program with five compound lifts, 3x/week, 5 sets of 5 reps each, for muscle and strength gains",
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
    { name: "logo-github", link: <GitHub /> },
    { name: "logo-linkedin", link: <Linkedin /> },
    { name: "logo-instagram", link: <Instagram /> },
];


export { logo as Logo }