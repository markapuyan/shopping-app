import React from 'react';
import EmptyImage from 'assets/img/empty.png'
import './Empty.scss'
const Empty = () => {
    return (
        <div className="empty__main">
            <img src={EmptyImage}/>
            <h1>No Items found</h1>
        </div>
    );
};

export default Empty;