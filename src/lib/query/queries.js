import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getInfiniteWorkouts, getWorkouts } from '../firebase/api';
import { QUERY_KEYS } from './querykeys';

export const useGetExecrsises = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_WORKOUTS],
        queryFn: getWorkouts,
    });
};

export const useGetInfiniteExecrsises = () => {
    return useInfiniteQuery({
        queryKey: [QUERY_KEYS.GET_INFINITE_POSTS],
        queryFn: getInfiniteWorkouts,
        getNextPageParam: (lastPage) => {
            if (!lastPage || lastPage.documents.length === 0) {
                return null;
            }

            const lastDocument = lastPage.documents[lastPage.documents.length - 1];
            return lastPage.nextPageParam;
        },
        initialPageParam: null,
    });
};
