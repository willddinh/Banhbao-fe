import React, { Component } from 'react';
import $ from 'jquery';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';

import RadioButton  from '../../components/RadioButton';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import { connect } from 'react-redux'
import { fetchSignupUser } from '../../actions'
import Login from '../../login'
import Quotes from '../../quotes'
import Signup from './Signup'

class SignupMain extends Component {
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
    onClick(){
        let creds = {
            email: this.refs.email.value,
            name: this.refs.username.value,
            password: this.refs.password.value
        }
        this.props.dispatch(fetchSignupUser(JSON.stringify(creds)));
    }
    onChange(radioBtn, payPackage){
    }

    render() {
        const {     fetchSignupUser,
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
                        Đăng ký
                    </span>

                        <div className="sign-up-list">
                        <span className="sign-up-label">Tên người dùng</span>
                        <input className="loginTextArea" id="username" name="login" type="text" ref="username" />
                        <span className="sign-up-label">Email</span>
                        <input className="loginTextArea" id="email" name="login" type="text" ref="email" />
                        <span className="sign-up-label">Mật khẩu</span>
                        <input className="loginTextArea" id="password" name="login" type="password" ref="password" />
                        <form className="sectionBtn" style={{margin: "0 auto"}}><span onClick={this.onClick.bind(this)}>Đăng ký</span></form>
                        {errorMessage &&
                            <div>
                            <p style={{textAlign: "center", color: "red"}}>Sai thông tin đăng ký!</p>
                            <p>Chi tiết</p>
                            <p>{JSON.stringify(errorMessage)}</p>
                            </div>
                        }

                        </div>
                    
                    </div>
                </FormFields>


            </Form>
            </div>
            }
            {isAuthenticated &&
                <div>Bạn đã đăng ký thành công!</div>
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
    fetchSignupUser,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(SignupMain)