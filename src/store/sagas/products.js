import { put } from 'redux-saga/effects'
import * as actions from '../actions/index'
import axios from '../../shared/request/axios-shop'
import { capitalize, formatResponseData } from '../../shared/utility'

export function* fetchProductsSaga(action) {
    const filter = capitalize(action.query)
    yield put(actions.fetchProductsStart())
    try {
        const queryParams = `?orderBy="name"&startAt="${filter}"&endAt="${filter}\uf8ff"`;
        const response = yield axios.get('products.json'+ queryParams)
        const products = formatResponseData(response.data)
        yield put(actions.fetchProductsSuccess(products))

    } catch(error) {
        yield put(actions.fetchProductsFail(error))
    }
}

export function* fetchProductDetailSaga(action) {
    yield put(actions.fetchProductDetailStart())
    try {
        const queryParams = '?orderBy="$key"&equalTo="'+ action.code +'"';
        const response = yield axios.get('products.json'+ queryParams)
        const detail = formatResponseData(response.data)
        yield put(actions.fetchProductDetailSuccess(detail))
    } catch (error) {
        yield put(actions.fetchProductDetailFail(error))
    }
}
