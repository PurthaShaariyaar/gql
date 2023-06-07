// Import required libraries
import { createSlice } from "@reduxjs/toolkit";

// Define an initial state
const initialState = {
  counter: 0,
};

// Create a slice
const homePageSlice = createSlice ({
  name: 'homePage',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1
    }
  },
});

// Extract the action creators
export const { increment } = homePageSlice.actions;

// Extract the reducer
export default homePageSlice.reducer;
