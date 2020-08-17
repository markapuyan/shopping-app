import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'
import Layout from './hoc/AppLayout/AppLayout'
import Spinner from './components/UI/Spinner/Spinner'
import Auth from './containers/Auth/Auth'
import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import './App.css';
import PrivateRoute from 'hoc/PrivateRoute/PrivateRoute';

import Cart from 'containers/Cart/Cart'
import Detail from 'components/ItemsList/Item/Detail/Detail'
import Profile from 'containers/Profile/Profile'
import Result from 'containers/Result/Result'
import Main from 'containers/Main/Main'

const App = props => {
  const { onCheckAuth } = props;
  useEffect(() => {
    onCheckAuth()
  }, [onCheckAuth])


  let routes = (
      <Switch>
        <PrivateRoute authed={props.isAuthenticated} path="/cart" component={Cart}/>
        <PrivateRoute authed={props.isAuthenticated} path="/profile" component={Profile}/>
        <Route path="/item-detail" component={Detail} />
        <Route path="/result" component={Result} />
        {props.isAuthenticated && <Route path="/auth" component={Auth}/>}
        <Route exact path="/" component={Main} />
        <Redirect to="/"/>
      </Switch>)
  return (
    <div className="App">
        <Suspense fallback={<Spinner/>}>
          <Layout>
            {routes}
           </Layout>
        </Suspense>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    expirationDate: state.auth.expirationDate,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: () => dispatch(actions.checkAuthenticate())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
