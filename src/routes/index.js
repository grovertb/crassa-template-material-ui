import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import loadable from 'loadable-components'

import Loading from 'components/Common/Loading'

const Dashboard = loadable(() => import(/* webpackChunkName: "Dashboard" */ 'containers/Dashboard'), {
  LoadingComponent: () => <Loading />,
  modules         : [ 'containers/Dashboard' ]
})

const Home = loadable(() => import(/* webpackChunkName: "Home" */ 'containers/Home'), {
  LoadingComponent: () => <Loading />,
  modules         : [ 'containers/Home' ]
})

export default history => (
  <ConnectedRouter history={history} >
    <Dashboard history={history} >
      <Route component={Home} exact path={`${process.env.PUBLIC_URL}/`} />
    </Dashboard>
    {/* <Route component={Dashboard} exact path={`${process.env.PUBLIC_URL}/`} /> */}
  </ConnectedRouter>
)
