// Import the combineReducers function from Redux
import { combineReducers } from "redux";
// Import the callsReducer which handles the state for calls
import callsReducer from "./callsReducer";

// Combine all the individual reducers into a single root reducer
const rootReducer = combineReducers({
  calls: callsReducer, // The callsReducer will manage the state slice related to calls
});

export default rootReducer;
