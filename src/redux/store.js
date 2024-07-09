// Import the necessary functions from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the root reducer which combines all the individual reducers
import rootReducer from "./rootReducer";

// Configure and create the Redux store
const store = configureStore({
  reducer: rootReducer, // Set the root reducer for the store
});

export default store;
