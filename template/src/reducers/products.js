import base from './base'

export default base({
  namespace   : 'crassa',
  store       : 'products',
  initialState: {
    items: []
  }
}).extend({
  creators: ({ types: { FETCH } }) => ({
    getProducts: () => ({ type: FETCH })
  })
})
