import React from 'react';

const CartFooter = props => {
    return (
        <div className="cart__main--table cart__main--table--cols cart__main--table--collapse cart__main--footer">
            <div className="cart__main--cell cart__main--cell--head">
                <h5>Total</h5>
            </div>
            <div className="cart__main--cell"></div>
            <div className="cart__main--cell"></div>
            <div className="cart__main--cell"><h6>TOTAL</h6><h5>{props.total}</h5></div>
        </div>
    );
};

export default CartFooter;