import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    isLoading: false,
    query: '',
    error: null
}

const fetchProductsStart = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const fetchProductsSuccess = (state, action) => {
    return {
        ...state,
        products: action.products,
        isLoading: false
    }
}

const fetchProductsFail = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: action.error
    }
}

const setQuery = (state, action) => {
    return {
        ...state,
        query: action.query
    }
}
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart(state, action)
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state, action)
        case actionTypes.FETCH_PRODUCTS_FAIL: return fetchProductsFail(state, action)
        case actionTypes.SET_SEARCH_QUERY: return setQuery(state, action)
        default:
            return state;
    }
}

export default reducer;


