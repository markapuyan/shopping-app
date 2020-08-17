
import { all, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import {
    fetchProductsSaga,
    fetchProductDetailSaga,
    productPathSaga
} from './products'
import {
    authenticateSaga,
    checkAuthenticateSaga,
    checkAuthTimeoutSaga,
    logoutSaga
} from './auth'

export function* watchProducts(action) {
    yield all([
        takeEvery(actionTypes.INIT_FETCH_PRODUCTS, fetchProductsSaga),
        takeEvery(actionTypes.INIT_FETCH_PRODUCT_DETAIL, fetchProductDetailSaga),
        takeEvery(actionTypes.INIT_SET_PRODUCT_PATH, productPathSaga)
    ])
}

export function* watchAuthenticate(action) {
    yield all([
        takeEvery(actionTypes.INIT_AUTHENTICATE, authenticateSaga),
        takeEvery(actionTypes.CHECK_AUTHENTICATE, checkAuthenticateSaga),
        takeEvery(actionTypes.CHECK_AUTH_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.INIT_AUTH_LOGOUT, logoutSaga)
    ])
}