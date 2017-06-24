import * as types from '../actions/actionsTypes';
import initialStates from './initialStates';

export default function courseReducer(state = initialStates.courses, action){
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
        return action.courses;
    default:
      return state;
  }
}