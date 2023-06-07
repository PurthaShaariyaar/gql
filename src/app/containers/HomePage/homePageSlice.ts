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

  },
});

// Extract the action creators
export const {  } = homePageSlice.actions;

// Extract the reducer
export default homePageSlice.reducer;
