import productsDucks from 'reducers/products'
import themeDucks from 'reducers/theme'

export default async function(req, res, next) {
  // Get store from locals
  const { store } = res.locals
  // Dispatch a action to change initial state
  await store.dispatch(productsDucks.creators.getProducts())

  if(req.cookies['style']) await store.dispatch(themeDucks.creators.updateTheme(req.cookies['style']))

  // Resave new store
  res.locals.store = store

  // Pass middlerware
  next()
}
