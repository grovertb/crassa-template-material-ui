import productsDucks from 'reducers/products'

export default function(req, res, next) {
  // Get store from locals
  const { store } = res.locals
  // Dispatch a action to change initial state
  store.dispatch(productsDucks.creators.getProducts())
  // Resave new store
  res.locals.store = store
  // Pass middlerware
  next()
}
