import { combineReducers } from 'redux'
import productReducer from './productReducer'
import shoppingCartReducer from './shoppingCartReducer'
import userReducer from './userReducer'

//all my reducers are combined here 
const reducers = {
  inventory: productReducer,
  shoppingCart: shoppingCartReducer,
  currentUser: userReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
