import { combineReducers } from 'redux';
import callsReducer from './callsReducer';

const rootReducer = combineReducers({
  calls: callsReducer,
});

export default rootReducer;
