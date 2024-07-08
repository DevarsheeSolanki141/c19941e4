import { combineReducers } from "redux";

const setAllActivitiesReducer = (state = reduxState.currentActivity, action) => {
}

const setActivityDetailReducer = (state = reduxState.currentActivity, action) => {
}

const reducer = combineReducers({
    allActivities: setAllActivitiesReducer,
    activityDetail: setActivityDetailReducer
});

export default reducer;