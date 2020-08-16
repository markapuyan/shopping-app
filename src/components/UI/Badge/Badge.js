import React from 'react';
import './Badge.scss'

const Badge = props => {
    return (
        <span className="badge">{props.value}</span>
    );
};

export default Badge;