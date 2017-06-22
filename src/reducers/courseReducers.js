import * as types from '../actions/actionsTypes';

export default function courseReducer(state = [], action){
  switch (action.type) {
    case types.CREATE_COURSE:
        //state.push(action.course);
        //return state;
        //Or that can be
        return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}