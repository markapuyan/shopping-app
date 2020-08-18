import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'assets/scss/main.scss'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducer from './store/reducers'
import { Provider } from 'react-redux';
import { watchProducts, watchAuthenticate } from './store/sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watchProducts)
sagaMiddleware.run(watchAuthenticate)
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
