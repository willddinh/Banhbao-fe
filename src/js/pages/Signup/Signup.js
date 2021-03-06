
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../../partials/NavBar';
import Menu from '../../partials/Menu';
import Section from '../../partials/Section';
import SignupHeader from './SignupHeader';
import SignupMain from './SignupMain';

import $ from 'jquery';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { loginUser, fetchPaymentList, fetchQuote, fetchSecretQuote } from '../../actions'
import Login from '../../login'
import Quotes from '../../quotes'

class Signup extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }

  componentWillMount(){
    
  }

  componentDidMount(){
    this.props.dispatch(fetchPaymentList());

  }
  render() {
    const { dispatch, quote,  isAuthenticated, errorMessage, isSecretQuote } = this.props

    let container = {
      width: '80%',
      margin: '0 auto'
    }
    return (
      <App centered={false}>
        <Menu  noNavBar={true}/>
              <SignupHeader />
              <div className="container" style={container}>
                <SignupMain />
              </div>
      </App>
    );
  }
}

function mapStateToProps(state, ownProps) {

  const { paymentLists, quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
  const { payment } = paymentLists

  const { isAuthenticated, errorMessage } = auth

  return {
    quote,
    payment,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(Signup)