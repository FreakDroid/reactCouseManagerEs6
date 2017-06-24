import * as types from '../actions/actionsTypes';
import initialStates from './initialStates';

export default function authorReducer(state = initialStates.authors, action){
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
        return action.authors;
    case types.CREATE_COURSES_SUCCESS:
      return [...state, Object.assign({}, action.course)];
    case types.UPDATE_COURSES_SUCCESS:
      return [...state.filter(course => course.id !== action.course.id), 
        Object.assign({}, action.course)];
    default:
      return state;
  }
}