import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyB6pbLybpuWHNZq5VxfMofNRTzAxegV65M",

    authDomain: "workoutplanner-464ff.firebaseapp.com",

    projectId: "workoutplanner-464ff",

    storageBucket: "workoutplanner-464ff.appspot.com",

    messagingSenderId: "394947005413",

    appId: "1:394947005413:web:73e1375bbe16d6d771fd0c"

};


const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);