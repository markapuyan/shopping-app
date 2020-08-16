
import { all, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import {
    fetchProductsSaga,
    fetchProductDetailSaga
} from './products'


export function* watchProducts (action) {
    yield all([
        takeEvery(actionTypes.INIT_FETCH_PRODUCTS, fetchProductsSaga),
        takeEvery(actionTypes.INIT_FETCH_PRODUCT_DETAIL, fetchProductDetailSaga)
    ])
}