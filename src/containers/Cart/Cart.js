import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import './Cart.scss'
const Cart = props => {

    useEffect(() => {
        props.onFetchCartDetail()
    }, [])

    let cartDetail = null;

    if(props.cartDetail) {
        cartDetail = props.cartDetail.map((items, index) => (
            <div key={index} className="cart__main--table cart__main--table--cols cart__main--table--collapse">
                <div style={{order: '0'}}className="cart__main--cell cart__main--cell--head">
                    <input type="checkbox"/>
                    <label>{items.name}</label>
                </div>
                <div style={{order: '1'}} className="cart__main--cell">{items.price}</div>
                <div style={{order: '2'}} className="cart__main--cell">{items.count}</div>
                <div style={{order: '3'}} className="cart__main--cell">{items.subprice}</div>
           </div>
        ))
    }
    return (
        <div className="cart__main">
           {!props.isLoading && cartDetail}
        </div>
    );
};

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