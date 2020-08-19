import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'
import Layout from './hoc/AppLayout/AppLayout'
import Auth from './containers/Auth/Auth'
import Cart from 'containers/Cart/Cart'
import Detail from 'components/ItemsList/Item/Detail/Detail'
import Profile from 'containers/Profile/Profile'
import Result from 'containers/Result/Result'
import Main from 'containers/Main/Main'
import PrivateRoute from 'hoc/PrivateRoute/PrivateRoute'
import Spinner from 'components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import './App.css';

const App = props => {

  const { onCheckAuth } = props
  useEffect(() => {
    onCheckAuth()
  }, [onCheckAuth])

  const routes = (
      <Switch>
        <PrivateRoute path="/cart" authed={props.isAuthenticated} component={Cart} />
        <PrivateRoute path="/auth" authed={!props.isAuthenticated} component={Auth} />
        <PrivateRoute path="/profile" authed={props.isAuthenticated} component={Profile} />
        <Route path="/item-detail"component={Detail}  />
        <Route path="/result" component={Result} />
        <Route exact path="/" component={Main} />
        <Redirect to="/"/>
      </Switch>
  )
  return (
    <div className="App">
      <Suspense fallback={<Spinner/>}>
        <Layout>
            {props.isLoading && routes}
        </Layout>
      </Suspense>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: (token, expiryDate) => dispatch(actions.checkAuthenticate())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
