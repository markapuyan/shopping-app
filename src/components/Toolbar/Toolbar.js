import React from 'react';
import { Link } from 'react-router-dom'
import './Toolbar.scss'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
const Toolbar = props => {

    let navigation = (
        <li><Link to="/auth">Login</Link></li>
    )
    if(props.auth) {
        navigation = (
            <Auxilliary>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={props.logout}>Logout</Link></li>
            </Auxilliary>
        )
    }
    return (
        <nav className="toolbar__nav">
            <div className="toolbar__logo">
                <Link path="/">SHOPP APP</Link>
            </div>
            <ul className="toolbar__ul">
                {navigation}
            </ul>
        </nav>
    );
};

export default Toolbar;