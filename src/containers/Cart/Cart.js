import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import CartHeader from 'components/CartDetail/CartHeader'
import CartFooter from 'components/CartDetail/CartFooter'
import CartItem from 'components/CartDetail/CartItem'
import Spinner from 'components/UI/Spinner/Spinner'
import './Cart.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
const Cart = React.memo(props => {

    useEffect(() => {
        props.onFetchCartDetail()
    }, [])
    let cartDetail = <Spinner/>;
    let total = 0;
    if(!props.isLoading) {
        if (Array.isArray(props.cartDetail) && props.cartDetail.length) {
            cartDetail = Object.values(props.cartDetail.reduce((obj, item) => {
                obj[item.id] ? 
                    obj[item.id].count = (obj[item.id].count + item.count <=item.availableQuantity) 
                    ? obj[item.id].count + item.count : item.availableQuantity
                    : obj[item.id] = {...item};
                return obj
            }, {})).map((item, index) => {
                    total += item.count * item.price;
                    return <CartItem key={index} itemData={item}/>
            })
        } else {
            cartDetail = <div>
                <h1>No Data found</h1>
                <button className="base__button--inverted">Shop now</button>
                </div>
        }
    }

    return (
        <div className="cart__main">
            <CartHeader/>
           {!props.isLoading && 
                <Auxilliary>
                    {cartDetail}
                    {total > 0 && <CartFooter total={total}/>}
                </Auxilliary> }
           
        </div>
    );
});

const mapStateToProps = state => {
    return {
        isLoading: state.products.isLoading,
        cartDetail: state.products.cartDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCartDetail: () => dispatch(actions.fetchCartDetail())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);