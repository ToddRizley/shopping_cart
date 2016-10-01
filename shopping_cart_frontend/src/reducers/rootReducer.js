import { combineReducers } from 'redux'
import productReducer from './productReducer'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  form: formReducer,
  productReducer: productReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
