import React from 'react';
import './Backdrop.scss'
const Backdrop = props => (
        props.visible ? <div className="backdrop__main" onClick={props.close}></div> : null
    );

export default Backdrop;