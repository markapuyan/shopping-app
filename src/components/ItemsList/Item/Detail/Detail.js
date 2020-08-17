import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router'
import { connect } from 'react-redux'
import Rating from 'components/UI/Rating/Rating'
import Badge from 'components/UI/Badge/Badge'
import Step from 'components/UI/Step/Step'
import Spinner from 'components/UI/Spinner/Spinner'
import AddToCart from 'components/UI/Button/AddToCart/AddToCart'
import Toast from 'components/UI/Toast/Toast'
import * as actions from 'store/actions/index'
import './Detail.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import { parseNewLine } from 'shared/utility'
import ToastRedirect from 'components/UI/Toast/ToastRedirect/ToastRedirect';
const Detail = React.memo(props => {

    const [isToastOpen, setIsToastOpen] = useState(false)
    const [count, setCount] = useState(1)
    const history = useHistory();
    useEffect(()=> {
        let code = history.location.hasOwnProperty('id') ? 
            history.location.id : 
            new URLSearchParams(history.location.search).get('code');
        props.onFetchItemDetail(code)
    }, [])


    const quantityHandler = (type, quantity) => {
        if(type == 'add' && count < quantity) {
            setCount(count + 1)
        }
        if(type == 'minus' && count != 1) {
           setCount(count - 1)
        }
    }

    const redirect = () => {
        history.push('/auth')
    }

    const addToCartHandler = (item) => {
        console.log('item', item)
        setIsToastOpen(!isToastOpen)
        // if(props.isAuthenticated) {
        //     props.onAddToCart()
        // }
    }

    let info = <Spinner/>;

    if(!props.isLoading && props.itemDetail) {
        info = props.itemDetail.map(item => (
            <Auxilliary>
                <Toast visible ={isToastOpen}>
                    {props.isAuthenticated ? 
                        <h1>Item Successfully added to cart!</h1> : 
                        <Auxilliary>
                            <ToastRedirect >
                                <h2>Please Login to Purchase</h2>
                                <button onClick={ redirect } 
                                    className="toast__redirect--button">GO NOW</button>
                            </ToastRedirect>
                        </Auxilliary>}
                </Toast>
                <div className="item-detail__image">
                    <img alt={item.name} src={item.image}/>
                </div>
                <div className="item-detail__info">
                    <h1>{item.name}</h1>
                    <Rating size="big" value={item.rating}/>
                    <Badge value={item.rating}/>
                    <h2>P {item.price}</h2>
                    <div>
                        {parseNewLine(item.info)}
                    </div>
                    <div className="item-detail__footer">
                        <Step 
                            quantity={item.quantity}
                            value={count}
                            click={quantityHandler}/>
                        <AddToCart 
                            click={() =>addToCartHandler(item)} 
                            visible={isToastOpen}/>
                    </div>
                </div>
            </Auxilliary>
        ))
    }
    return (
        <div className="item-detail__main">
            {info}
        </div>
    );
})

const mapStateToProps = state => {
    return {
        itemDetail: state.products.itemDetail,
        isLoading: state.products.isLoading,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchItemDetail: (code) => dispatch(actions.fetchProductDetail(code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);