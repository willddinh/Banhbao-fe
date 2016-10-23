import '../../scss/index.scss';

import React, { Component, PropTypes  } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../partials/NavBar';
import Menu from '../partials/Menu';
import Section from '../partials/Section';
import $ from 'jquery';
import { Link } from 'react-router'


import { connect } from 'react-redux'
import { loginUser, fetchQuote, fetchSecretQuote } from '../actions'
import Login from '../login'
import Quotes from '../quotes'

class Book extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }

  componentDidMount(){

  }
  render() {
  
    const { dispatch, userInfo, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props

    let container = {
      width: '80%',
      margin: '0 auto'
    }
    return (
      <div>
        <Menu />
        <NavBar />

        <div className="container" style={container}>
          <Section name="Thư viện sách" />

        </div>
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
          </p>
        </Footer>
        </div>
    );
  }
}



function mapStateToProps(state, ownProps) {

  const { quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage, userInfo } = auth

  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    userInfo,
    errorMessage
  }
}

export default connect(mapStateToProps)(Book)
