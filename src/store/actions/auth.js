import * as actionTypes from './actionTypes'

export const authenticate = (data) => {
    return {
        type: actionTypes.INIT_AUTHENTICATE,
        data: data
    }
}

export const authenticateStart = () => {
    return {
        type: actionTypes.AUTHENTICATE_START,
    }
}

export const authenticateSuccess = (token, id) => {
    return {
        type: actionTypes.AUTHENTICATE_SUCCESS,
        token: token,
        id: id
    }
}

export const authenticateFail = (error) => {
    return {
        type: actionTypes.AUTHENTICATE_FAIL,
        error: error
    }
}

export const checkAuthenticate = () => {
    return {
        type: actionTypes.CHECK_AUTHENTICATE,
    }
}

export const checkAuthTimeout = (expirationDate) => {
    return {
        type: actionTypes.CHECK_AUTH_TIMEOUT,
        expirationDate: expirationDate
    }
}

export const logout = () => {
    return {
        type: actionTypes.INIT_AUTH_LOGOUT
    }
}

export const logoutSuccess = () => {
    return {
        type: actionTypes.AUTH_LOGOUT_SUCCESS
    }
}