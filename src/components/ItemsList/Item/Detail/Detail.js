import React, {useEffect} from 'react';
import Rating from '../../../UI/Rating/Rating'
import Badge from '../../../UI/Badge/Badge'
import Step from '../../../UI/Step/Step'
import './Detail.css'
const Detail = () => {

    return (
        <div className="item-detail__main">
            <div className="item-detail__image">
                <img/>
            </div>
            <div className="item-detail__info">
                <h1>Deku Funko Pop</h1>
                <Rating size="big" value={4}/>
                <Badge value={5}/>
                <h2>P650</h2>
                <div className="item-detail__footer">
                    <Step/>
                </div>
            </div>
            
        </div>
    );
};

export default Detail;