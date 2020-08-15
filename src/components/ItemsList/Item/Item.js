import React from 'react';
import { useHistory } from 'react-router-dom'
import Rating from '../../UI/Rating/Rating'
import './Item.css'
const Item = React.memo(props => {
    const { productData } = props;
    const history = useHistory();

    const redirectItemHandler = () => {
        history.push('/item-detail/'+productData.id)
    }

    return (
        <div className="item__main" onClick={redirectItemHandler}>
            <div className="item__image">
                <img src="https://via.placeholder.com/150" />
            </div>
            <div className="item__body">
                <div className="item__body--title">
                    <div className="item_body--title-holder">
                        {productData.name}
                    </div>
                </div>
                <div className="item__body--extra">
                    <div className="item_body--price">
                        {productData.price}
                    </div>
                    <Rating value={productData.rating} />
                </div>
            </div>
        </div>
    );
});

export default Item;