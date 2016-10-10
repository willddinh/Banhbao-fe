import './../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main.js';
import Book from './pages/Book.js';
import BookList from './pages/BookList.js';
import Checkout from './pages/Checkout/Checkout.js';
import UserProfile from './pages/User/UserProfile.js';

import { Router, Route, Link, browserHistory } from 'react-router'

const NoMatch = React.createClass({

  render() {
    return (
      <div>
        <h2>NoMatch</h2>
        
      </div>
    )
  }
})


let element = document.getElementById('content');
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={UserProfile}>
      <Route path="book" component={BookList}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>

), element);

document.body.classList.remove('loading');
