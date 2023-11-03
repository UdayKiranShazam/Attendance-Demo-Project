import { combineReducers } from 'redux';
import attendance from './reducers/attendance';

const rootReducer = combineReducers({
  attendance
});

export default rootReducer;
