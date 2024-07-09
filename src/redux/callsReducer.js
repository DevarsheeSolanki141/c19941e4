import {
  FETCH_CALLS_REQUEST,
  FETCH_CALLS_SUCCESS,
  FETCH_CALLS_FAILURE,
  UPDATE_CALL_SUCCESS,
  RESET_CALLS_SUCCESS,
} from "./actionTypes";

// Initial state of the calls reducer
const initialState = {
  calls: [], // Array to store the list of calls
  status: "idle", // Status of the fetch process (idle, loading, succeeded, failed)
  error: null, // Error message in case of failure
};

// Reducer function to handle different action types
const callsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CALLS_REQUEST:
      // Handle fetch request action
      return {
        ...state,
        status: "loading",
      };
    case FETCH_CALLS_SUCCESS:
      // Handle fetch success action
      return {
        ...state,
        status: "succeeded",
        calls: action.payload,
      };
    case FETCH_CALLS_FAILURE:
      // Handle fetch failure action
      return {
        ...state,
        status: "failed",
        error: action.payload,
      };
    case UPDATE_CALL_SUCCESS:
      // Handle update call success action
      return {
        ...state,
        calls: action.payload,
      };
    case RESET_CALLS_SUCCESS:
      // Handle reset calls action
      return {
        ...state,
        calls: [],
        status: "idle",
        error: null,
      };
    default:
      // Return the current state if action type is not recognized
      return state;
  }
};

export default callsReducer;
