export default function shoppingCartReducer(state = {shoppingCart: []}, action){
  switch(action.type){
    case 'ADD_TO_SHOPPING_CART':
      return Object.assign({}, state,  {shoppingCart: action.payload});
    case 'FETCH_CART':
      return Object.assign({}, state,  {shoppingCart: action.payload});
    case 'REMOVE_ITEM_FROM_CART':
      return Object.assign({}, state, {shoppingCart: action.payload});
    default:
        return state
    }
  }
