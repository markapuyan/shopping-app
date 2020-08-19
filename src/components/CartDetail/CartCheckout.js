import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons'
const CartCheckout = props => {
    return (
        <div className="cart-checkout__main">
            <div>
                <button className="base__button--inverted--danger">Clear Cart</button>
            </div>
            <div>
                <button className="base__button"><ShoppingCartOutlined/> Checkout {props.count > 0 && <span>({props.count})</span>}</button>
            </div>
            
        </div>
    );
};

export default CartCheckout;