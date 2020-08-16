import React, {useState,} from 'react';
import Toolbar from 'components/Toolbar/Toolbar'
import Search from 'components/Search/Search'
import Auxilliary from 'hoc/Auxilliary/Auxilliary';
import './AppLayout.scss'

const AppLayout = props => {

    const searchProductHandler = () => {
        
    }
    return (
        <Auxilliary>
            <Toolbar/>
            <Search click={searchProductHandler}/>
            <div className="applayout">
                {props.children}
            </div>
        </Auxilliary>
    );
};

export default AppLayout;