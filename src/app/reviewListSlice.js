import { createSlice } from '@reduxjs/toolkit'

export const reviewListSlice = createSlice({
    name: 'reviewList',
    initialState: {
        reviewList: [],
        filteredReviewList: [],
        minScoreFilter: 0,
        channelFilter: ""
    },
    reducers: {
        setReviewList: (state, action) => {
            state.reviewList = action.payload;
            state.filteredReviewList = action.payload;
        },
        setMinScoreFilter: (state, action) => {
            state.minScoreFilter = action.payload;
        },
        setChannelFilter: (state, action) => {
            state.channelFilter = action.payload;
        },
        filterReviewList: (state) => {
            state.filteredReviewList
                = state.reviewList
                    .filter(review => review.score >= Number(state.minScoreFilter))
                    .filter(review => review.channel.toLowerCase().includes(state.channelFilter));
        }
    },
})

export const { setReviewList, setMinScoreFilter, setChannelFilter, filterReviewList } = reviewListSlice.actions;

export default reviewListSlice.reducer;