import { collection, addDoc } from "firebase/firestore";
import { db } from './FirebaseConfig';

export const addDataToFirestore = async (data, ref) => {
    try {
        const docRef = await addDoc(collection(db, ref), {
            data
        });
        console.log('Data added successfully');
    } catch (error) {
        console.error('Error adding data: ', error);
    }
};


