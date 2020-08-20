import React from 'react';

const CartFooter = props => {
    return (
        <div className="cart__main--table cart__main--table--cols cart__main--table--collapse cart__main--footer">
            <div className="cart__main--cell cart__main--cell--head">
                <h3>Total</h3>
            </div>
            <div className="cart__main--cell"></div>
            <div className="cart__main--cell"></div>
            <div className="cart__main--cell"><h3 className="mobile-block">Total</h3><h3>{props.total}</h3></div>
        </div>
    );
};

export default CartFooter;