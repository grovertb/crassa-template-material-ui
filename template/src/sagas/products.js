import { call, put, takeEvery } from 'redux-saga/effects'
import { Get } from 'lib/Request'

import productsDucks from 'reducers/products'

const { types } = productsDucks

function* getProducts() {
  try {
    yield put({ type: types.FETCH_PENDING })
    const payload = yield call(Get, 'products')
    yield put({ payload, type: types.FETCH_FULFILLED })
  } catch (err) {
    console.log('getProducts err: ', err)
  }
}

export default [
  takeEvery(types.FETCH, getProducts)
]
