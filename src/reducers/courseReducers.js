export default function courseReducer(state = [], action){
  switch (action.type) {
    case 'CREATE_COURSE':
        //state.push(action.course);
        //return state;
        //Or that can be
        return [...state, Object.assing({}, action.course)];
      break;
    default:
      return state;

  }
}