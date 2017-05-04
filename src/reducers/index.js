import { combineReducers } from 'redux';
import courses from './courseReducers';

const rootReducer = combineReducer({
  courses
});

export default rootReducer;