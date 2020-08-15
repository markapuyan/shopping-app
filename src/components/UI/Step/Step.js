import React from 'react';
import './Step.css'
const Step = () => {
    return (
        <div className="step__main">
            <button className="step__button step__button--minus">-</button>
            <input type="text" className="step__input"/>
            <button className="step__button step__button--plus">+</button>
            <span className="step__total">3 items available</span>
        </div>
    );
};

export default Step;