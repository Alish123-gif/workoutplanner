import { db, realtimeDb, auth, storage } from './config';
import { Query } from '@tanstack/react-query';
import { collection, getDocs, query, limit, startAfter } from 'firebase/firestore';

export const getWorkouts = async () => {
    try {
        const workoutsCollection = collection(db, 'exercises');
        const snapshot = await getDocs(workoutsCollection);
        const workouts = snapshot.docs.map(doc => doc.data());
        console.log(workouts);
        return workouts;
    } catch (error) {
        console.error(error);
    }
}


export async function getInfiniteWorkouts({ pageParam }) {
    try {
        const workoutsCollection = collection(db, 'exercises');
        const workoutsQuery = query(
            workoutsCollection,
            limit(9),
            ...(pageParam ? [startAfter(pageParam)] : [])
        );

        const snapshot = await getDocs(workoutsQuery);
        const workouts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Return the last visible document as the new pageParam for the next query
        const lastVisible = snapshot.docs[snapshot.docs.length - 1];

        return { documents: workouts, nextPageParam: lastVisible };
    } catch (error) {
        console.error(error);
        return { documents: [], nextPageParam: null };
    }
}

export const createUser = async (email, password) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error(error);
    }
}
export const loginUser = async (email, password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error(error);
    }
}
export const logoutUser = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error(error);
    }
}
