import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import CartHeader from 'components/CartDetail/CartHeader'
import CartFooter from 'components/CartDetail/CartFooter'
import CartItem from 'components/CartDetail/CartItem'
import CartCheckout from 'components/CartDetail/CartCheckout'
import Spinner from 'components/UI/Spinner/Spinner'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import Empty from 'components/UI/Empty/Empty';
import Toast from 'components/UI/Toast/Toast'
import { formatCartData, checkIfArrayIsNull } from 'shared/utility.js'
import { ShoppingCartOutlined } from '@ant-design/icons'
import * as actions from 'store/actions'
import './Cart.scss'
import { useHistory } from 'react-router';
const Cart = props => {
    const history = useHistory();
    const { isLoading, cartDetailList } = props;
    const [cartTotal, setCartTotal] = useState([])
    const [isToastOpen, setIsToastOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState({})

    let cartDetail = <Spinner/>;
    let total = cartTotal.reduce((a, b) => a + (b.price || 0), 0);
    let itemDetail = null

    useEffect(() => {
        setCartTotalPrice()
    }, [cartDetailList])

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

    const setCartTotalPrice = () => {
        let tempTotal = []
        formatCartData(cartDetailList || []).map((item, index) =>{
            let cTotal = {
                id: item.product_id,
                price: item.count * item.price
            }
            tempTotal.push(cTotal);
        })
        setCartTotal(tempTotal)
    }

    const onRemoveItemHandler = (itemData) => {
        console.log(itemData)
        setCurrentItem(itemData)
        setIsToastOpen(!isToastOpen)
    }

    const onRemoveItemFromCartHandler = () => {
        props.onRemoveItemFromCart(currentItem)
        setIsToastOpen(!isToastOpen)
    }
    if(isToastOpen) {
        itemDetail = (
            <Auxilliary>
                <h4>{currentItem.name} x {currentItem.count}</h4>
                <div className="cart__toast--footer">
                    <button onClick={onRemoveItemFromCartHandler} className="base__button">OK</button>
                    <button className="base__button--danger">CANCEL</button>
                </div>
            </Auxilliary>
        )
    }

    if(!isLoading) {
        if (checkIfArrayIsNull(cartDetailList)) {
            cartDetail = formatCartData(cartDetailList || []).map((item, index) => {
                let checkedValue = cartTotal.filter(cartItem => cartItem.id == item.product_id)
                return <CartItem
                    key={index}
                    itemData={item}
                    change={priceHandler}
                    isIncluded={checkIfArrayIsNull(checkedValue)}
                    click={onRemoveItemHandler}/>
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
            <Toast visible={isToastOpen}
                title="Are you sure you want to remove item from cart?">
                {itemDetail}
            </Toast>
            <h1 className="base__title"><ShoppingCartOutlined/> Cart</h1>
            <CartHeader/>
                {cartDetail}
                {checkIfArrayIsNull(cartDetailList) && <Auxilliary>
                    <CartFooter total={total}/>
                    <CartCheckout count={cartTotal.length}/>
                </Auxilliary>}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.products.isLoading,
        cartDetailList: state.products.cartDetail
    }
}

const mapDispatchToProps = dispatch => {
   return {
       onRemoveItemFromCart: (itemData)=> dispatch(actions.removeItemFromCart(itemData)),
       onFetchCartDetail: ()=> dispatch(actions.fetchCartDetail())
   } 
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);