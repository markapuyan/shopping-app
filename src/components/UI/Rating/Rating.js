import React from 'react';
import './Rating.css'
const Rating = props => {

    const res = [...Array(5)].map((_, i) => {
        return<b key={i} className={props.value <= i ? 'rating' : 'rating--active'}>★</b> 
    
    });

    return (
        <div>
            { res }
        </div>
    );
};

export default Rating;