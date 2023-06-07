// Import required libraries
import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./types";

// Define an initial state
const initialState: IHomePageState = {
  animePage: null,
};

// Create a slice
const homePageSlice = createSlice ({
  name: 'homePage',
  initialState,
  reducers: {
    setAnimePage(state, action) {
      state.animePage = action.payload;
    }
  },
});

// Extract the action creators
export const { setAnimePage } = homePageSlice.actions;

// Extract the reducer
export default homePageSlice.reducer;
