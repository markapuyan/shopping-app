import React from 'react';

const CartItem = props => {

    const { itemData} = props;

    return (
        <div  className="cart__main--table cart__main--table--cols cart__main--table--collapse">
            <div className="cart__main--cell cart__main--cell--head">
                <input type="checkbox"/>
                <img className="cart__image" src={itemData.image}/>
                <label>{itemData.name}</label>
            </div>
            <div className="cart__main--cell cart__main--cell--item">
                <h6>Quantity</h6>{itemData.count}</div>
            <div className="cart__main--cell cart__main--cell--item">
                <h6>Price</h6>{itemData.price}</div>
            <div className="cart__main--cell cart__main--cell--item">
                <h6>Sub Total</h6>{itemData.count * itemData.price}</div>
        </div>
    );
};

export default CartItem;