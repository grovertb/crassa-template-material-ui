import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import base from './base'

export default base({
  initialState: {
    items: []
  },
  namespace: 'crassa',
  store    : 'products'
}).extend({
  creators: ({ types: { FETCH, FETCH_FULFILLED } }) => ({
    getProducts: () => ({ [ WAIT_FOR_ACTION ]: FETCH_FULFILLED, type: FETCH })
  })
})
