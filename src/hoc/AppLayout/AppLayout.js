import React, {useState,} from 'react';
import Toolbar from 'components/Toolbar/Toolbar'
import Search from 'components/Search/Search'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import './AppLayout.scss'

const AppLayout = props => {

    return (
        <Auxilliary>
            <Toolbar 
                auth={props.isAuthenticated}
                logout={props.onLogout}/>
            <Search/>
            <div className="applayout">
                {props.children}
            </div>
        </Auxilliary>
    );
};


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);