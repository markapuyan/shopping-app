import React from 'react';
import './Badge.css'

const Badge = props => {
    return (
        <span className="badge">{props.value}</span>
    );
};

export default Badge;