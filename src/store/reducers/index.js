import productReducer from './products'
import authReducer from './auth'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    products: productReducer,
    auth: authReducer
  })

export default rootReducer;