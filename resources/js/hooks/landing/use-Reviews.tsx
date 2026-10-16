import type { ReviewT } from '@/types';
import { useEffect } from 'react';
import { create } from 'zustand';

type ReviewsState = {
    reviews: ReviewT[] | null;
    setReviews: (reviews: ReviewT[]) => void;
};

const useReviewsStore = create<ReviewsState>((set) => ({
    reviews: null,
    setReviews: (reviews) => set({ reviews }),
}));

export default function useReviews() {
    const { reviews, setReviews } = useReviewsStore();
    useEffect(() => {
        if (reviews !== null) return;
        fetch(route('web.get-reviews'), { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } })
            .then(async (res) => {
                // console.log(await res.text());
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setReviews(data);
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
                setReviews(null);
            });
    }, [reviews, setReviews]);
    return { reviews };
}
