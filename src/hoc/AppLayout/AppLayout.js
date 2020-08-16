import React, {useState,} from 'react';
import Toolbar from 'components/Toolbar/Toolbar'
import Search from 'components/Search/Search'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import { connect } from 'react-redux'
import './AppLayout.scss'

const AppLayout = props => {

    return (
        <Auxilliary>
            <Toolbar auth={props.isAuthenticated}/>
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
export default connect(mapStateToProps, null)(AppLayout);