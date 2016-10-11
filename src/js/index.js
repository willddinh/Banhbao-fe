import './../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main.js';
import Book from './pages/Book.js';
import BookList from './pages/BookList.js';
import Checkout from './pages/Checkout/Checkout.js';
import UserProfile from './pages/User/UserProfile.js';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { Provider } from 'react-redux';
import quotesApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import api from './api';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

const store = createStoreWithMiddleware(
  combineReducers({
    quotesApp,
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
    return (
      <div>
      a
        {this.props.children}
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
        <Route path="book" component={BookList}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>

), element);

document.body.classList.remove('loading');
