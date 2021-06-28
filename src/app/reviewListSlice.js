import { createSlice } from '@reduxjs/toolkit'

export const reviewListSlice = createSlice({
    name: 'reviewList',
    initialState: {
        reviewList: [],
        filteredReviewList: []
    },
    reducers: {
        setReviewList: (state, action) => {
            state.reviewList = action.payload;
            state.filteredReviewList = action.payload;
        },
        filterByScore: (state, action) => {
            if (action.payload === "all") {
                state.filteredReviewList = state.reviewList;
            }
            else {
                state.filteredReviewList = state.reviewList.filter(review => review.score >= Number(action.payload));
            }
        },
        filterByChannel: (state, action) => {
            if (action.payload === "all") {
                state.filteredReviewList = state.reviewList;
            }
            else {
                state.filteredReviewList = state.reviewList.filter(review => review.channel.toLowerCase() === action.payload.toLowerCase());
            }
        }
    },
})

export const { setReviewList, filterByScore, filterByChannel } = reviewListSlice.actions;

export default reviewListSlice.reducer;