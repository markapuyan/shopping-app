import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import CartHeader from 'components/CartDetail/CartHeader'
import CartFooter from 'components/CartDetail/CartFooter'
import CartItem from 'components/CartDetail/CartItem'
import CartCheckout from 'components/CartDetail/CartCheckout'
import Spinner from 'components/UI/Spinner/Spinner'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import Empty from 'components/UI/Empty/Empty';
import { formatCartData } from 'shared/utility.js'
import { ShoppingCartOutlined } from '@ant-design/icons'
import './Cart.scss'
const Cart = React.memo(props => {

    const { isLoading } = props;
    const [cartTotal, setCartTotal] = useState([])

    let cartDetail = <Spinner/>;
    let total = cartTotal.reduce((a, b) => a + (b.price || 0), 0);

    const priceHandler = (id, price) => {
        let priceArray = [...cartTotal];
        let isPriceIncluded = priceArray.map(item => {
            return item.id
        }).includes(id);

        priceArray = (isPriceIncluded) ? priceArray = priceArray.filter(item => {
                return item.id != id
            }) :   [...priceArray, {id: id, price: price}]

        setCartTotal(priceArray);
    }

    const totalPriceHandler = () => {
        let tempTotal = []
        formatCartData(props.cartDetail || []).map((item, index) =>{
            let cTotal = {
                id: item.id,
                price: item.count * item.price
            }
            tempTotal.push(cTotal);
        })
        setCartTotal(tempTotal)
    }

    useEffect(() => {
        if(!isLoading) {
            totalPriceHandler()
        }
    }, [isLoading])

    if(!isLoading) {
        if (Array.isArray(props.cartDetail) && props.cartDetail.length) {
            cartDetail = formatCartData(props.cartDetail || []).map((item, index) => {
                let checkedValue = cartTotal.filter(cartItem => cartItem.id == item.id)
                return <CartItem 
                    key={index} 
                    itemData={item} 
                    change={priceHandler}
                    isIncluded={Array.isArray(checkedValue) && checkedValue.length}/>
            })

        } else {
            cartDetail = <div className="no-result">
                <Empty/>
                <button className="base__button--inverted">Shop now</button>
            </div>
        }

    }
    return (
        <div className="cart__main">
            <h1 className="base__title"><ShoppingCartOutlined/> Cart</h1>
            <CartHeader/>
                {cartDetail}
                {(Array.isArray(props.cartDetail) && props.cartDetail.length) && <Auxilliary>
                    <CartFooter total={total}/>
                    <CartCheckout />
                </Auxilliary>}
        </div>
    );
});

const mapStateToProps = state => {
    return {
        isLoading: state.products.isLoading,
        cartDetail: state.products.cartDetail
    }
}

export default connect(mapStateToProps)(Cart);