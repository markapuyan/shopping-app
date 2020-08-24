
import { all, takeEvery, take } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import {
    fetchProductsSaga,
    fetchProductDetailSaga,
    addToCartSaga,
    fetchCartDetailSaga,
    removeItemFromCartSaga,
    removeAllItemFromCartSaga
} from './products'
import {
    authenticateSaga,
    checkAuthenticateSaga,
    checkAuthTimeoutSaga,
    logoutSaga,
} from './auth'

export function* watchProducts(action) {
    yield all([
        takeEvery(actionTypes.INIT_FETCH_PRODUCTS, fetchProductsSaga),
        takeEvery(actionTypes.INIT_FETCH_PRODUCT_DETAIL, fetchProductDetailSaga),
        takeEvery(actionTypes.ADD_TO_CART, addToCartSaga),
        takeEvery(actionTypes.FETCH_CART_DETAIL, fetchCartDetailSaga),
        takeEvery(actionTypes.REMOVE_ITEM_FROM_CART, removeItemFromCartSaga),
        takeEvery(actionTypes.REMOVE_ALL_ITEM_FROM_CART, removeAllItemFromCartSaga)
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