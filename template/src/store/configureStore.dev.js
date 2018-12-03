import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from 'reducers'
import rootSaga from 'sagas'
import DevTools from 'containers/DevTools'

export const history = createHistory()

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware, routerMiddleware(history), createLogger() ]

const finalCreateStore = compose(applyMiddleware(...middleware), DevTools.instrument())

const store = createStore(createRootReducer(history), initialState, finalCreateStore)

sagaMiddleware.run(rootSaga)

export default store
