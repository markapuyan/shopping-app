import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false,
    token: null,
    error: null,
    isLoading: false,
    id: null
}


const setLoading = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const authenticateSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        id: action.id,
        isAuthenticated: true,
    }
}

const authenticateFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}


const logout = (state, action) => {
    return {
        ...state,
        isAuthenticated: false,
        token: null,
        id: null
    }
}
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTHENTICATE_START: return setLoading(state, action)
        case actionTypes.AUTHENTICATE_SUCCESS: return authenticateSuccess(state, action)
        case actionTypes.AUTHENTICATE_FAIL: return authenticateFail(state, action)
        case actionTypes.AUTH_LOGOUT_SUCCESS: return logout(state, action)
        default: return state
    }

}

export default reducer;