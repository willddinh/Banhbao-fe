
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../../partials/NavBar';
import Menu from '../../partials/Menu';
import Section from '../../partials/Section';
import CheckoutHeader from './CheckoutHeader';
import CheckoutMain from './CheckoutMain';

import $ from 'jquery';
import { Link } from 'react-router'

export default class Checkout extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }

  componentDidMount(){
  }
  render() {
  

    let container = {
      width: '80%',
      margin: '0 auto'
    }
    return (
      <App centered={false}>
        <Menu noNavBar={true} />
        <CheckoutHeader />
        <div className="container" style={container}>
          <CheckoutMain />
        </div>
      </App>
    );
  }
}
