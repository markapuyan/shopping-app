import React, { useEffect } from 'react';
import './Cart.scss'
const Cart = props => {
    useEffect(() => {

    }, [])
    return (
        <div className="cart__main">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th> Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Name</td>
                        <td>P 635</td>
                        <td>2</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;