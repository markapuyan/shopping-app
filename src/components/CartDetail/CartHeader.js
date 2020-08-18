import React from 'react';

const CartHeader = () => {
    return (
        <div className="cart__main--table cart__main--table--cols cart__main--table--collapse cart__main--heading">
            <div className="cart__main--cell cart__main--cell--head">
                <h5>Product Name</h5>
            </div>
            <div className="cart__main--cell"><h5>Quantity</h5></div>
            <div className="cart__main--cell"><h5>Price</h5></div>
            <div className="cart__main--cell"><h5>Sub Total</h5></div>
        </div>
    );
};

export default CartHeader;