import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => authed
             ? <Component {...props} /> : 
                <Redirect to="/"/>}/>
    );
};

export default PrivateRoute;