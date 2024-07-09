import axios from 'axios';
import {
  FETCH_CALLS_REQUEST,
  FETCH_CALLS_SUCCESS,
  FETCH_CALLS_FAILURE,
  UPDATE_CALL_SUCCESS,
  RESET_CALLS_SUCCESS,
} from './actionTypes';

// Base URL for the API
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

// Action creator to fetch all calls
export const fetchCalls = () => async (dispatch) => {
  // Dispatching request action to indicate the start of the fetch process
  dispatch({ type: FETCH_CALLS_REQUEST });
  try {
    // Making a GET request to fetch activities
    const response = await axios.get(`${REACT_APP_API_URL}/activities`);
    dispatch({ type: FETCH_CALLS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_CALLS_FAILURE, payload: error.message });
  }
};

// Action creator to update a call's archive status
export const updateCall = ({ id, is_archived }) => async (dispatch) => {
  try {
    // Making a PATCH request to update the archive status of a specific call
    const response = await axios.patch(`${REACT_APP_API_URL}/activities/${id}`, { is_archived });
    // Fetching the updated list of activities after the updat
    const updatedCalls = await axios.get(`${REACT_APP_API_URL}/activities`);
    dispatch({ type: UPDATE_CALL_SUCCESS, payload: updatedCalls.data });
  } catch (error) {
    console.error('Error updating call:', error);
  }
};

// Action creator to fetch the details of a specific call
export const fetchCallDetail = (id) => async (dispatch) => {
  try {
    // Making a GET request to fetch details of a specific call
    const response = await axios.get(`${REACT_APP_API_URL}/activities/${id}`);
    dispatch({ type: FETCH_CALL_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Action creator to reset all calls
export const resetCalls = () => async (dispatch) => {
  try {
    // Making a PATCH request to reset all calls
    const response = await axios.patch(`${REACT_APP_API_URL}/reset`);
    // Fetching the updated list of activities after the reset
    const updatedCalls = await axios.get(`${REACT_APP_API_URL}/activities`);
    dispatch({ type: RESET_CALLS_SUCCESS, payload: updatedCalls.data });
  } catch (error) {
    console.error(error);
  }
};

