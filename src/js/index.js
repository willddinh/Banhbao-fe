import './../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main.js';



let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
