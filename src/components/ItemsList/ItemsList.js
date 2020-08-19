import React  from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item'
import Spinner from 'components/UI/Spinner/Spinner'
import Empty from 'components/UI/Empty/Empty'
import { checkIfArrayIsNull } from 'shared/utility'
import * as actions from 'store/actions/index'
import './ItemsList.scss'

const ItemsList =  React.memo(props =>{
    let productsList = <Spinner/>;
    
    if(!props.isLoading) {
        if (checkIfArrayIsNull(props.products)) {
            productsList = props.products.map(product => (
                <Item
                    key={product.id}
                    productData={product}/>
            ))
        } else {
            productsList = <Empty/>
        }
    }

    return (
        <div className="search-itemlist__main">
            <h2>Search result {!props.isLoading && `(${props.products.length})`}</h2>
            <div className="search-itemlist__group">
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