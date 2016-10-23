import React, { Component } from 'react';
import $ from 'jquery';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import { FacebookLogin } from 'react-facebook-login-component';

import RadioButton  from '../../components/RadioButton';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import { connect } from 'react-redux'
import { loginUser, fetchPaymentRequest, fetchPaymentList, fetchQuote, fetchSecretQuote } from '../../actions'
import Login from '../../login'
import Quotes from '../../quotes'
import Signin from './Signin'

class SigninMain extends Component {
    constructor() {
        super();
        this.state = {
            payPackage:{},
            backgroundColor: {
                    backgroundColor: "transparent"
                }
        }
    }

    componentDidMount(){
    }
    onSubmit(){
        
    }
    responseFacebook(){

    }
    onClick(){
        let creds = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        this.props.dispatch(loginUser(creds));
    }
    onChange(radioBtn, payPackage){
    }

    render() {
        const {     quote,
                payment,
                payUrl,
                isSecretQuote: authenticated,
                isAuthenticated,
                errorMessage
                } = this.props
        return (
            <div>

            {!isAuthenticated &&

            <div className="checkOutMain">
            <Form onSubmit={this.onSubmit.bind(this)} >

                <FormFields >
                    <div  style={{backgroundColor: "rgb(237,237,237)"}}>
                    <div style={{paddingTop: "20px"}} ></div>
                    <span className="checkOutMainTitle" >
                        Đăng nhập
                    </span>

                        <div className="sign-up-list">

                        <span className="sign-up-label">Email</span>
                        <input className="loginTextArea" id="mail" name="login" type="text" ref="username"/>
                        <span className="sign-up-label">Mật khẩu</span>
                        <input className="loginTextArea" id="pass" name="login" type="password" ref="password" />
                        <form className="sectionBtn" style={{margin: "0 auto"}}><span onClick={this.onClick.bind(this)}>Đăng nhập</span></form>
                        {errorMessage &&
                            <p style={{textAlign: "center", color: "red"}}>Email hoặc mật khẩu của bạn chưa đúng!</p>
                        }

                        </div>
                    
                    </div>
                </FormFields>


            </Form>
            </div>
            }
            {isAuthenticated &&
                <div>Bạn đã đăng nhập thành công!</div>
            }
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {

  const { paymentLists, quotes, auth, paymentRequest } = state.banhBaoApp
  const { quote , } = quotes
  const { payment,authenticated } = paymentLists
  const { payUrl, isAuthenticated,  errorMessage } = auth

  return {
    quote,
    payment,
    payUrl,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(SigninMain)