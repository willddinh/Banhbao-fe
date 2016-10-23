import React, { Component } from 'react';
import $ from 'jquery';
import { fetchUserBalance } from '../../actions.js'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class SigninHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conf:[]
        }
    }

    componentDidMount(){
    }
    render() {
        const { userBalance, isAuthenticated , errorMessage} = this.props;
        return (
            <div>

            <div className="checkOutHeader">
            {isAuthenticated &&
                <div className="checkOutHeaderContent">Bạn đã đăng nhập thành công!</div>
            }
            {!isAuthenticated && 
                <div className="checkOutHeaderContent">Chưa có tài khoản? <Link to="/sign-up"><span  style={{color:"red"}}>Đăng ký tại đây!</span></Link></div>
            }
            </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const { auth } = state.banhBaoApp

  const { userBalance, isAuthenticated, errorMessage } = auth

  return {
    userBalance, 
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(SigninHeader)