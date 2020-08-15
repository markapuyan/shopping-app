import React, {useEffect} from 'react'
import Item from './Item/Item'
import Spinner from '../UI/Spinner/Spinner'
import './ItemsList.css'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

const ItemsList =  React.memo(props =>{

    // useEffect(() => {
    //     props.onFetchProducts()
    // }, [])

    let productsList = <Spinner/>;

    if(props.products && !props.isLoading) {
        productsList = props.products.map(product => (
            <Item
                key={product.id}
                productData={product}/>
        ))
    }
    return (
        <div className="search__itemlist_main">
            <h2>Search result {!props.isLoading && `(${props.products.length})`}</h2>
            <div className="search__itemlist_group">
                {productsList}
            </div>
        </div>
    );
});


const mapStateToProps = state => {
    return {
        products: state.products.products,
        isLoading: state.products.isLoading,
        query: state.products.query
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(actions.fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);