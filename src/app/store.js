import { configureStore } from '@reduxjs/toolkit';
import reviewListSlice from './reviewListSlice';

export const store = configureStore({
  reducer: {
    reviewList: reviewListSlice
  },
});
