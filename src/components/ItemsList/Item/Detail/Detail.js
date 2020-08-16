import React, {useEffect} from 'react';
import {useHistory} from 'react-router'
import { connect } from 'react-redux'
import Rating from 'components/UI/Rating/Rating'
import Badge from 'components/UI/Badge/Badge'
import Step from 'components/UI/Step/Step'
import Spinner from 'components/UI/Spinner/Spinner'
import AddToCart from 'components/UI/Button/AddToCart/AddToCart'
import * as actions from 'store/actions/index'
import './Detail.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import { parseNewLine } from 'shared/utility'
const Detail = React.memo(props => {

    const history = useHistory();
    useEffect(()=> {
        let code = history.location.hasOwnProperty('id') ? 
            history.location.id : 
            new URLSearchParams(history.location.search).get('code');
        props.onFetchItemDetail(code)
    }, [])

    let info = <Spinner/>;

    if(!props.isLoading && props.itemDetail) {
        info = props.itemDetail.map(item => (
            <Auxilliary>
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
                        <Step quantity={item.quantity}/>
                        <AddToCart/>
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
        isLoading: state.products.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchItemDetail: (code) => dispatch(actions.fetchProductDetail(code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);