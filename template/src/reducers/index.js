import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import theme from './theme'
import products from './products'

export default combineReducers({
  routing      : routerReducer,
  [theme.store]: theme.reducer,
  [products.store]: products.reducer
})
