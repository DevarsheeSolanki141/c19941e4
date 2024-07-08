import {
    FETCH_CALLS_REQUEST,
    FETCH_CALLS_SUCCESS,
    FETCH_CALLS_FAILURE,
    UPDATE_CALL_SUCCESS,
    RESET_CALLS,
  } from './actionTypes';
  
  const initialState = {
    calls: [],
    status: 'idle',
    error: null,
  };
  
  const callsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CALLS_REQUEST:
        return {
          ...state,
          status: 'loading',
        };
      case FETCH_CALLS_SUCCESS:
        return {
          ...state,
          status: 'succeeded',
          calls: action.payload,
        };
      case FETCH_CALLS_FAILURE:
        return {
          ...state,
          status: 'failed',
          error: action.payload,
        };
      case UPDATE_CALL_SUCCESS:
        return {
          ...state,
          calls: action.payload,
        };
      case RESET_CALLS:
        return {
          ...state,
          calls: [],
          status: 'idle',
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default callsReducer;
  