import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import './Toolbar.scss'
import { connect } from 'react-redux'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import * as actions from 'store/actions'
import { formatCartData } from 'shared/utility';
const Toolbar = props => {

    useEffect(() => {
        props.onFetchCartDetail()
    }, [])

    let count = 0;

    if(!props.isLoading) {
        if (Array.isArray(props.cartDetail) && props.cartDetail.length) {
           count = formatCartData(props.cartDetail).length
        }
    }
    let navigation = (
        <li><Link to="/auth">Login</Link></li>
    )
    if(props.auth) {
        navigation = (
            <Auxilliary>
                <li><Link to="/cart">Cart <span className="base__badge">{count > 0 && count}</span></Link></li>
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

const mapStateToProps = state => {
    return {
        cartDetail: state.products.cartDetail,
        isLoading: state.products.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCartDetail: () => dispatch(actions.fetchCartDetail())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);