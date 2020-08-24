import { put, all, call } from 'redux-saga/effects'
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

export function* addToCartSaga(action) {
    const email = localStorage.getItem('email');
    const data = {...action.item, email: email}
    yield put(actions.addToCartStart())
    try {
        const response = axios.post('/addtocart.json', data)
        yield put(actions.addToCartSuccess())

    } catch(error) {
        yield put(actions.addToCartFail(error))
    }
}

export function* fetchCartDetailSaga(action) {
    const email = localStorage.getItem('email');
    const query = '?orderBy="email"&equalTo="'+email+'"';
    yield put(actions.fetchCartDetailStart())
    try {
        const response = yield axios.get('/addtocart.json' +query)
        const products = formatResponseData(response.data)
        yield put(actions.fetchCartDetailSuccess(products))
    } catch(error) {
        yield put(actions.fetchCartDetailFail(error))
    }
}

export function* removeItemFromCartSaga(action){
    yield put(actions.removeItemFromCartStart())
    let productIdArr = [].concat(action.itemData.id)
    yield console.log(productIdArr)
    try {
        const response = yield all(productIdArr.map(item => call(removeItemSaga, item)));
        yield put(actions.removeItemFromCartSuccess())
        yield put(actions.fetchCartDetail())
    } catch (error) {
        yield put(actions.removeItemFromCartFail())
    }
}

async function removeItemSaga(item) {
    const response = await axios.delete(`/addtocart/${item}.json`)
}