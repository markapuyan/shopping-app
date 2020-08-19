import React, {useState, useEffect,} from 'react';
import { connect } from 'react-redux'
import { formatCartData, checkIfArrayIsNull } from 'shared/utility';
import Toolbar from 'components/Toolbar/Toolbar'
import Search from 'components/Search/Search'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import * as actions from 'store/actions'
import './AppLayout.scss'

const AppLayout = React.memo(props => {
    const { onFetchCartDetail } = props;
    useEffect(() => {
        onFetchCartDetail()
    }, [onFetchCartDetail])

    let count = 0;

    if(!props.isLoading) {
        if (checkIfArrayIsNull(props.cartDetail)) {
           count = formatCartData(props.cartDetail).length
        }
    }
    return (
        <Auxilliary>
            <Toolbar
                count={count}
                auth={props.isAuthenticated}
                logout={props.onLogout}/>
            <Search/>
            <div className="applayout">
                {props.children}
            </div>
        </Auxilliary>
    );
});

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        cartDetail: state.products.cartDetail,
        isLoading: state.products.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
        onFetchCartDetail: () => dispatch(actions.fetchCartDetail())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);