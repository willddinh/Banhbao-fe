import './../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main.js';
import Book from './pages/Book.js';
import BookList from './pages/BookList.js';
import BookDetail from './pages/BookDetail.js';
import OnePay from './pages/OnePay.js';
import Cart from './pages/Cart/Cart.js';
import NavBar from './partials/NavBar';
import cookie from 'react-cookie';

import Checkout from './pages/Checkout/Checkout.js';
import Signup from './pages/Signup/Signup.js';
import Signin from './pages/Signin/Signin.js';

import UserProfile from './pages/User/UserProfile.js';
import App from 'grommet/components/App';
import Menu from './partials/Menu';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { Provider } from 'react-redux';
import banhBaoApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import api from './api';
import { fetchUserInfo, sessionRequest } from './actions'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

const store = createStoreWithMiddleware(
  combineReducers({
    banhBaoApp,
    routing: routerReducer
  })
)





const NoMatch = React.createClass({

  render() {
    return (
      <div>
        <h2>NoMatch</h2>
        
      </div>
    )
  }
})
const Index = React.createClass({
  render() {
    let token = cookie.load('id_token');
    if (token !== undefined || token !== null)
      store.dispatch(fetchUserInfo());
    let session = cookie.load('session');
    if (session === undefined)
      store.dispatch(sessionRequest());
    return (
      <div>
        <App centered={false}>
          {this.props.children}
        </App>

      </div>
    )
  }
})

const history = syncHistoryWithStore(browserHistory, store)

let element = document.getElementById('content');
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index}>
        <IndexRoute component={Book}/>
        <Route path="books" component={BookList}/>
        <Route path="book/:id" component={BookDetail}/>
        <Route path="user-profile" component={UserProfile}/>
        <Route path="sign-up" component={Signup}/>
        <Route path="sign-in" component={Signin}/>

        <Route path="add-cash" component={Checkout}/>
        <Route path="payment/onepay/:data" component={OnePay}/>
        <Route path="cart" component={Cart}/>

        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>

), element);

document.body.classList.remove('loading');