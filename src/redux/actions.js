import axios from 'axios';
import {
  FETCH_CALLS_REQUEST,
  FETCH_CALLS_SUCCESS,
  FETCH_CALLS_FAILURE,
  UPDATE_CALL_SUCCESS,
  RESET_CALLS_SUCCESS,
} from './actionTypes';

const API_BASE_URL = 'https://aircall-backend.onrender.com';

export const fetchCalls = () => async (dispatch) => {
  dispatch({ type: FETCH_CALLS_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/activities`);
    dispatch({ type: FETCH_CALLS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_CALLS_FAILURE, payload: error.message });
  }
};

export const updateCall = ({ id, is_archived }) => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/activities/${id}`, { is_archived });
    const updatedCalls = await axios.get(`${API_BASE_URL}/activities`);
    dispatch({ type: UPDATE_CALL_SUCCESS, payload: updatedCalls.data });
  } catch (error) {
    console.error('Error updating call:', error);
  }
};

export const fetchCallDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/activities/${id}`);
    dispatch({ type: FETCH_CALL_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const resetCalls = () => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/reset`);
    const updatedCalls = await axios.get(`${API_BASE_URL}/activities`);
    dispatch({ type: RESET_CALLS_SUCCESS, payload: updatedCalls.data });
  } catch (error) {
    console.error(error);
  }
};

