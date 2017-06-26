import * as types from '../actions/actionsTypes';
import initialStates from './initialStates';

export default function authorReducer(state = initialStates.authors, action){
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
        return action.authors;
    default:
      return state;
  }
}