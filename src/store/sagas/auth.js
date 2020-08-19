import { put, delay } from "redux-saga/effects"
import axios from 'axios'
import * as actions from 'store/actions'

export function* authenticateSaga(action) {
    yield put(actions.authenticateStart())
    try {
        const params = {...action.data, returnSecureToken: true}
        const response = yield axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSu7C5Nz5LpVK9KP7ORAKMX9A30DT-2O0', params)
        const expiry = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken)
        localStorage.setItem('expirationDate', expiry)
        localStorage.setItem('userId', response.data.localId)
        localStorage.setItem('email', action.data.email)
        yield put(actions.authenticateSuccess(response.data.idToken, response.data.localId, action.data.email))
        yield put(actions.fetchCartDetail())
        yield put(actions.checkAuthTimeout(response.data.expiresIn))


    } catch(error) {
        yield put(actions.authenticateFail(error))
    }
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationDate * 1000);
    yield put(actions.logout())
}

export function* logoutSaga(action) {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    localStorage.removeItem('email')
    yield put (actions.logoutSuccess())
}

export function* checkAuthenticateSaga(action) {
    yield put(actions.authenticateStart());
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    if(!token || !email) {
        yield put(actions.logout())
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
        if(expirationDate < new Date()) {
            yield put(actions.logout())
        } else {
            const userId = yield localStorage.getItem('userId')
            yield put(actions.authenticateSuccess(token, userId, email))
            yield put (actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
        }
    }
}
