import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import CartHeader from 'components/CartDetail/CartHeader'
import CartFooter from 'components/CartDetail/CartFooter'
import CartItem from 'components/CartDetail/CartItem'
import Spinner from 'components/UI/Spinner/Spinner'
import './Cart.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import Empty from 'components/UI/Empty/Empty';
import { formatCartData } from 'shared/utility.js'
const Cart = React.memo(props => {

    let cartDetail = <Spinner/>;
    let total = 0;

    if(!props.isLoading) {
        if (Array.isArray(props.cartDetail) && props.cartDetail.length) {
            cartDetail = formatCartData(props.cartDetail || []).map((item, index) => {
                    total += item.count * item.price;
                    return <CartItem key={index} itemData={item}/>
            })
        } else {
            cartDetail = <div>
                <Empty/>
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

export default connect(mapStateToProps)(Cart);