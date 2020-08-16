import React, { Suspense } from 'react';
import { Switch, Route} from 'react-router-dom'
import Layout from './hoc/AppLayout/AppLayout'
import Spinner from './components/UI/Spinner/Spinner'
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
  
  const routes = (
    <Switch>
      <Route path="/item-detail" render={() => <Detail/>} {...props}/>
      <Route path="/result" render={() => <Result/>} {...props}/>
      <Route exact path="/" ender={() => <Main/>} {...props}/>
    </Switch>
  )

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

export default App;
