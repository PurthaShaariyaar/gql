// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from './containers/HomePage/homePageSlice';

const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
