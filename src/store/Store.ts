// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../store/Features/articleSlice';

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
