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
export const fetchProductDetail = (code) => {
    return {
        type: actionTypes.INIT_FETCH_PRODUCT_DETAIL,
        code: code
    }
}

export const fetchProductDetailStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_DETAIL_START
    }
}

export const fetchProductDetailSuccess = (detail) => {
    return {
        type: actionTypes.FETCH_PRODUCT_DETAIL_SUCCESS,
        detail: detail
    }
}

export const fetchProductDetailFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCT_DETAIL_FAIL,
        error: error
    }
}

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        item: item
    }
}

export const addToCartStart = () => {
    return {
        type: actionTypes.ADD_TO_CART_START
    }
}

export const addToCartSuccess = () => {
    return {
        type: actionTypes.ADD_TO_CART_SUCCESS
    }
}

export const addToCartFail = (error) => {
    return {
        type: actionTypes.ADD_TO_CART_FAIL,
        error: error
    }
}

export const fetchCartDetail = () => {
    return {
        type: actionTypes.FETCH_CART_DETAIL
    }
}

export const fetchCartDetailStart = () => {
    return {
        type: actionTypes.FETCH_CART_DETAIL_START
    }
}

export const fetchCartDetailSuccess = (cartDetail) => {
    return {
        type: actionTypes.FETCH_CART_DETAIL_SUCCESS,
        cartDetail: cartDetail
    }
}

export const fetchCartDetailFail = (error) => {
    return {
        type: actionTypes.FETCH_CART_DETAIL_FAIL,
        error: error
    }
}

export const removeItemFromCart = (itemData) => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        itemData: itemData
    }
}

export const removeItemFromCartStart = () => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART_START,
    }
}

export const removeItemFromCartSuccess = () => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART_SUCCESS,
    }
}

export const removeItemFromCartFail = (error) => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART_FAIL,
        error: error
    }
}