import React from 'react';

const CartHeader = () => {
    return (
        <div className="cart__main--table cart__main--table--cols cart__main--table--collapse cart__main--heading">
            <div className="cart__main--cell cart__main--cell--head">
                <label>Product Name</label>
            </div>
            <div className="cart__main--cell"><label>Quantity</label></div>
            <div className="cart__main--cell"><label>Price</label></div>
            <div className="cart__main--cell"><label>Sub Total</label></div>
        </div>
    );
};

export default CartHeader;