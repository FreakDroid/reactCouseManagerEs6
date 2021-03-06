import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case types.CREATE_AUTHOR_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.author)
      ];
    case types.UPDATE_AUTHOR_SUCCESS:
      return [
          ...state.filter(author => author.id !== action.author.id),
          JSON.parse(JSON.stringify(action.author))
        ];
    case types.DELETE_AUTHOR_SUCCESS:
      var existingAuthorIndex = state.findIndex(a => a.id == action.author.id);
      return [
        ...state.filter(author => author.id !== action.author.id)
      ];
    default:
      return state;
  }
}
