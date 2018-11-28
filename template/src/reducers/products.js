import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import base from './base'

export default base({
  namespace   : 'crassa',
  store       : 'products',
  initialState: {
    items: []
  }
}).extend({
  creators: ({ types: { FETCH, FETCH_FULFILLED } }) => ({
    getProducts: () => ({ type: FETCH, [ WAIT_FOR_ACTION ]: FETCH_FULFILLED })
  })
})
