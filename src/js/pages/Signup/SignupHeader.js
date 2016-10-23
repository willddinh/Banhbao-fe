import React, { Component } from 'react';
import $ from 'jquery';
import { fetchUserBalance } from '../../actions.js'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class SignupHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conf:[]
        }
    }

    componentDidMount(){
    }
    render() {
        const { userBalance, isAuthenticated } = this.props;
        return (
            <div>
            <div className="checkOutHeader">
                {isAuthenticated &&
                    <div className="checkOutHeaderContent">Bạn đã đăng ký thành công!</div>
                }
                {!isAuthenticated &&
                    <div className="checkOutHeaderContent">Đã có tài khoản? <Link to="/sign-in"><span href="/sign-in" style={{color:"red"}}>Đăng nhập tại đây!</span></Link></div>
                }
            </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const { auth } = state.banhBaoApp

  const { userBalance,isAuthenticated } = auth

  return {
    userBalance,
    isAuthenticated
  }
}

export default connect(mapStateToProps)(SignupHeader)