import { SET_ALL_ACTIVITIES, SET_ACTIVITY_DETAIL } from "./actionTypes";

// action creators

export const setAllActivities = update => ({
    type: SET_ALL_ACTIVITIES,
    payload: {
        ...update
    }
});

export const setActivityDetail = update => ({
    type: SET_ACTIVITY_DETAIL,
    payload: {
        ...update
    }
});