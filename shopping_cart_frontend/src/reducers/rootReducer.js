import { combineReducers } from 'redux'
import productReducer from './productReducer'
import shoppingCartReducer from './shoppingCartReducer'

const reducers = {
  inventory: productReducer,
  shoppingCart: shoppingCartReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
