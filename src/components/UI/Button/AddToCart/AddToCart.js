import React from 'react';
const AddToCart = props => {
    return (
        <button className="base__button" onClick={() => props.click(!props.visible)}>
            ADD TO CART
        </button>
    );
};

export default AddToCart;