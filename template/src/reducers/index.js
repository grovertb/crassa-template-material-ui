import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import theme from './theme'
import products from './products'

export default history => combineReducers({
  router          : connectRouter(history),
  [theme.store]   : theme.reducer,
  [products.store]: products.reducer
})
