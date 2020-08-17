import React from 'react';
import './AddToCart.scss'
const AddToCart = props => {
    return (
        <button className="add-to-cart__button" onClick={() => props.click(!props.visible)}>
            ADD TO CART
        </button>
    );
};

export default AddToCart;