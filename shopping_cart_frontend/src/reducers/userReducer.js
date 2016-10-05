export default function userReducer(state = {currentUser: []}, action){
  switch(action.type){
    case 'FETCH_CURRENT_USER':
      return Object.assign({}, state,  {currentUser: action.payload});
    default:
        return state
    }
  }
