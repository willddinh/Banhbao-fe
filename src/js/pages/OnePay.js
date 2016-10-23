import React, { Component } from 'react';
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
import { loginUser, fetchPaymentConfirmation, fetchPaymentList, fetchQuote, fetchSecretQuote } from '../actions'
import Login from '../login'
import Quotes from '../quotes'

class OnePay extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }

  componentDidMount(){
    this.props.dispatch(fetchPaymentConfirmation(JSON.stringify(this.props.location.query)));

  }
  render() {
    const { dispatch, quote, paymentConfirmation, isAuthenticated, errorMessage, isSecretQuote } = this.props

    let container = {
      width: '80%',
      margin: '0 auto'
    }
    return (
      <App centered={false}>
              <Menu  noNavBar={true}/>

        <div className="container" style={container}>
        {paymentConfirmation &&
            <div>
                <h1>{paymentConfirmation.paymen_info.response_message}</h1>
                Mã giao dịch: {paymentConfirmation.paymen_info.order_id}
                Số tiền đã nạp: {paymentConfirmation.paymen_info.amount}
                Mô tả giao dịch: {paymentConfirmation.paymen_info.order_info}

                Tài khoản của bạn:
                Tài khoản chính: {paymentConfirmation.balance_info.main_balance}
            </div>
            }
        </div>
      </App>
    );
  }
}

function mapStateToProps(state, ownProps) {

  const { paymentLists, quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
  const { payment } = paymentLists

  const { paymentConfirmation, isAuthenticated, errorMessage } = auth

  return {
    paymentConfirmation,
    quote,
    payment,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(OnePay)