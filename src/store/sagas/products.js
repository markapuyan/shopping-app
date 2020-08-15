import { put } from 'redux-saga/effects'
import * as actions from '../actions/index'
import axios from '../../shared/request/axios-shop'
import { capitalize } from '../../shared/utility'

export function* fetchProductsSaga(action) {
    const filter = capitalize(action.query)
    yield put(actions.fetchProductsStart())
    try {
        const queryParams = `?orderBy="name"&startAt="${filter}"&endAt="${filter}\uf8ff"`;
        console.log('queryPArams', queryParams)
        const response = yield axios.get('products.json'+ queryParams)
        const products = []
        for(let key in response.data) {
            products.push({
                id: key,
                ...response.data[key]
            })
        }
        yield put(actions.fetchProductsSuccess(products))

    } catch(error) {
        yield put(actions.fetchProductsFail(error))
    }
}