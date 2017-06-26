import * as types from '../actions/actionsTypes';
import initialStates from './initialStates';

export default function courseReducer(state = initialStates.courses, action){
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
        return action.courses;
    case types.CREATE_COURSES_SUCCESS:
        return [...state, Object.assign({}, action.courses)];
    case types.UPDATE_COURSES_SUCCESS:
        return [...state.filter(course => course.id !== action.course.id), 
            Object.assign({}, action.courseS)];
    default:
      return state;
  }
}