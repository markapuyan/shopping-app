import React from 'react';
import { useHistory } from 'react-router-dom'
import Rating from 'components/UI/Rating/Rating'
import './Item.scss'
const Item = React.memo(props => {
    const { productData } = props;
    const history = useHistory();

    const redirectItemHandler = () => {
        history.push( {
            pathname: '/item-detail',
            search: '?code='+productData.id,
            id: productData.id})
    }

    return (
        <div className="item__main" onClick={redirectItemHandler}>
            <div className="item__image">
                <img src={productData.image} />
            </div>
            <div className="item__body">
                <div className="item__body--title">
                    <div className="item__body--holder">
                        {productData.name}
                    </div>
                </div>
                <div className="item__body--extra">
                    <div className="item__body--price">
                        {productData.price}
                    </div>
                    <Rating value={productData.rating} />
                </div>
            </div>
        </div>
    );
});

export default Item;