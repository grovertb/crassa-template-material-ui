import React from 'react'

import store, { history } from './store/configureStore'
import createRoutes from './routes'
import RootClient from './containers/Root/Client'

const routes = createRoutes(history)

export default () => <RootClient store={store}>{routes}</RootClient>
