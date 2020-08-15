import React from 'react';
import './RangeSlider.css'
const RangeSlider = props => {
    return (
        <div className="range-slider">
            <label>PRICE RANGE</label>
            <input type="range" min="1" max="100" className="range-slider__input"/>
            <div className="range-slider__info">
                <div className="range-slider__price">
                    <p>P650</p>
                </div>
                <div className="range-slider__apply">
                <button >APPLY</button>
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;