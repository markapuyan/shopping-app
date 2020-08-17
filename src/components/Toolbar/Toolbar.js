import React from 'react';
import { Link } from 'react-router-dom'
import './Toolbar.scss'
const Toolbar = props => {
    return (
        <nav className="toolbar__nav">
            <div className="toolbar__logo">
                <Link path="/">SHOPP APP</Link>
            </div>
            <ul className="toolbar__ul">
                <li>Cart</li>
                {props.auth && <li>PROFILE</li>}
                {props.auth ? <li onClick={props.logout}>Logout</li> : <li>Login</li>}
            </ul>
        </nav>
    );
};

export default Toolbar;