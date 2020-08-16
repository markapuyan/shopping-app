import React, { useState } from 'react';
import './Step.scss'

const Step = props => {
    const [count, setCount] = useState(1)
    console.log(props.quantity)

    const quantityHandler = (type) => {
        if(type == 'add' && count < props.quantity) {
            setCount(count + 1)
        }
        if(type == 'minus' && count != 1) {
           setCount(count - 1)
        }
    }

    return (
        <div className="step__main">
            <button className="step__button step__button--minus"
                onClick={() => quantityHandler('minus')}>-</button>
            <input className="step__input"
                type="text" 
                value={count}
                readOnly/>
            <button className="step__button step__button--plus"
                onClick={() => quantityHandler('add')}>+</button>
            <span className="step__total">{props.quantity} items available</span>
        </div>
    );
};

export default Step;