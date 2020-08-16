import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'
import Layout from './hoc/AppLayout/AppLayout'
import Spinner from './components/UI/Spinner/Spinner'
import Auth from './containers/Auth/Auth'
import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import './App.css';

const Detail = React.lazy(() => {
  return import('./components/ItemsList/Item/Detail/Detail')
})

const Result = React.lazy(() => {
  return import('./containers/Result/Result')
})

const Main = React.lazy(() => {
  return import('./containers/Main/Main')
})
const App = props => {
  

  useEffect(() => {
    props.onCheckAuth(props.token, props.expirationDate)
  }, [])

  let routes = (
  <Switch>
    <Route path="/item-detail" render={() => <Detail/>} {...props}/>
    <Route path="/result" render={() => <Result/>} {...props}/>
    <Route exact path="/" render={() => <Main/>} {...props}/>
    <Route path="/auth"  component={Auth}/>
    <Redirect to="/"/>
  </Switch>)

  if(props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/item-detail" render={() => <Detail/>} {...props}/>
        <Route path="/result" render={() => <Result/>} {...props}/>
        <Route exact path="/" render={() => <Main/>} {...props}/>
        <Redirect to="/"/>
      </Switch>)
  }
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<Spinner/>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    token: state.auth.token,
    expirationDate: state.auth.expirationDate,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: (token, expiryDate) => dispatch(actions.checkAuthenticate(token, expiryDate))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
