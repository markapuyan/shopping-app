import React from 'react';
import './Setting.css'
import RangeSlider from '../../UI/RangeSlider/RangeSlider'
const SearchSetting = () => {
    return (
        <div className="search-setting__main">
            <h4>SEARCH FILTER</h4>
            Filter by Brand
            <input type="checkbox"/>Funko
            <input type="checkbox"/> Sample
            <RangeSlider/>
        </div>
    );
};

export default SearchSetting;