import React from 'react';
import './Backdrop.scss'
const Backdrop = props => (
        props.visible ? <div className="backdrop__main"></div> : null
    );


export default Backdrop;