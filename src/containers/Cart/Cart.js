import React, { useEffect } from 'react';
import './Cart.scss'
const Cart = props => {
    return (
        <div className="cart__main">
           <div className="cart__main--table cart__main--table--5cols cart__main--table--collapse">
                <div style={{order: '0'}}className="cart__main--cell cart__main--cell--head">
                    <h3>Sample</h3>
                </div>
                <div style={{order: '1'}} className="cart__main--cell">2</div>
                <div style={{order: '2'}} className="cart__main--cell">3</div>
                <div style={{order: '3'}} className="cart__main--cell">4</div>
                <div style={{order: '4'}} className="cart__main--cell">5</div>
           </div>
        </div>
    );
};

export default Cart;