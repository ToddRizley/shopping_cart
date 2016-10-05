export default function productReducer(state = {inventory: []}, action){
  switch(action.type){
    case 'ADD_PRODUCT_TO_INVENTORY':
      return Object.assign({}, state,  {inventory: action.payload});
    case 'FETCH_INVENTORY':
      return Object.assign({}, state,  {inventory: action.payload});
    default:
        return state
    }
  }
