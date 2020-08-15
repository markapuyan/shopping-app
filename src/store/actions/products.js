import * as actionTypes from './actionTypes'


export const fetchProducts = (query) => {
    return {
        type: actionTypes.INIT_FETCH_PRODUCTS,
        query: query
    }
}

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}

export const setSearchQuery = (query) => {
    return {
        type: actionTypes.SET_SEARCH_QUERY,
        query: query
    }
}