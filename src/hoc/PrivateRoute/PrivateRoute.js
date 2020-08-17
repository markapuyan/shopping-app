import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component: Component, authed, ...rest}) => {

    console.log(authed)
    return (
        <Route
            {...rest}
            render={(props) => authed === true
             ? <Component {...props} /> : 
                <Redirect to="/"/>}/>
    );
};

export default PrivateRoute;