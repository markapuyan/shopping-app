import React, { useState } from 'react';
import './Step.scss'

const Step = props => {
    const [count, setCount] = useState(1)

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
                onClick={() => props.click('minus', props.quantity)}>-</button>
            <input className="step__input"
                type="text" 
                value={props.value}
                readOnly/>
            <button className="step__button step__button--plus"
                onClick={() => props.click('add', props.quantity)}>+</button>
            <span className="step__total">{props.quantity} items available</span>
        </div>
    );
};

export default Step;