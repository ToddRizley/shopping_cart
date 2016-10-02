import { combineReducers } from 'redux'
import productReducer from './productReducer'


const reducers = {
  inventory: productReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
