import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    isLoading: false,
    query: '',
    error: null,
    itemDetail: null,
    cartDetail: null
}

const setLoading = (state, action) => {
    return {
        ...state,
        isLoading: true
    }
}

const setStopLoading = (state, action) => {
    return {
        ...state,
        isLoading: false
    }
}

const fetchProductsSuccess = (state, action) => {
    return {
        ...state,
        products: action.products,
        isLoading: false
    }
}

const setError = (state, action) => {
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

const fetchProductDetailSuccess = (state, action) => {
    return {
        ...state,
        itemDetail: action.detail,
        isLoading: false
    }
}

const setCartDetail = (state, action) => {
    return {
        ...state,
        cartDetail: action.cartDetail,
        isLoading: false
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PRODUCTS_START: return setLoading(state, action)
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state, action)
        case actionTypes.FETCH_PRODUCTS_FAIL: return setError(state, action)
        case actionTypes.SET_SEARCH_QUERY: return setQuery(state, action)
        case actionTypes.FETCH_PRODUCT_DETAIL_START: return setLoading(state, action)
        case actionTypes.FETCH_PRODUCT_DETAIL_SUCCESS: return fetchProductDetailSuccess(state, action)
        case actionTypes.FETCH_PRODUCT_DETAIL_FAIL: return setError(state, action)
        case actionTypes.ADD_TO_CART_START: return setLoading(state, action)
        case actionTypes.ADD_TO_CART_SUCCESS: return setStopLoading(state, action)
        case actionTypes.ADD_TO_CART_FAIL: return setError(state, action)
        case actionTypes.FETCH_CART_DETAIL_START: return setLoading(state, action)
        case actionTypes.FETCH_CART_DETAIL_SUCCESS: return setCartDetail(state, action)
        case actionTypes.FETCH_CART_DETAIL_FAIL: return setError(state, action)
        default:
            return state;
    }
}

export default reducer;


