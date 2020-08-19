import React from 'react';
import {DeleteOutlined} from '@ant-design/icons'
const CartItem = props => {
    const { itemData} = props;
    return (
        <div  className="cart__main--table cart__main--table--cols cart__main--table--collapse cart--item-detail">
            <div className="cart__main--cell cart__main--cell--head">
                <input 
                    type="checkbox"
                    onChange={ () =>props.change(itemData.product_id, itemData.count * itemData.price)}
                    checked={props.isIncluded}
                    />
                <img className="cart__image" src={itemData.image}/>
                <div className="cart__product-name">
                    <label>{itemData.name}</label>
                    <br/>
                    <button className="base__button--inverted--danger btn--sm"
                        onClick={() => props.click(itemData)}><DeleteOutlined /> REMOVE</button>
                </div>
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