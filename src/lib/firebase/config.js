import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // Import for Firestore
import { getDatabase } from 'firebase/database'; // Import for Realtime Database
import { getStorage } from 'firebase/storage'; // Import for Firebase Storage
import { getAuth } from 'firebase/auth'; // Import for Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6pbLybpuWHNZq5VxfMofNRTzAxegV65M",
    authDomain: "workoutplanner-464ff.firebaseapp.com",
    projectId: "workoutplanner-464ff",
    storageBucket: "workoutplanner-464ff.appspot.com",
    messagingSenderId: "394947005413",
    appId: "1:394947005413:web:73e1375bbe16d6d771fd0c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app); // Firestore
export const realtimeDb = getDatabase(app); // Realtime Database
export const storage = getStorage(app); // Storage
export const auth = getAuth(app); // Authentication