import React from 'react';
import './Rating.css'
const Rating = props => {

    const res = [...Array(5)].map((_, i) => {
        const prop = ['item'];
        if (props.value > i) {
           prop.push('item--active')
        }
        if(props.size == 'big') {
            prop.push('item--big')
        }
        return<b key={i} className={prop.join(' ')}>★</b> 
    });

    return (
        <div className="rating">
            {res}
        </div>
    );
};

export default Rating;