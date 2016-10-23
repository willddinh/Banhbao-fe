import React, { Component } from 'react';
import $ from 'jquery';
import { fetchUserBalance } from '../../actions.js'
import { connect } from 'react-redux'

class CheckoutHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conf:[]
        }
    }

    componentDidMount(){
        this.props.dispatch(fetchUserBalance());
    }
    render() {
        const { userBalance, isAuthenticated } = this.props;
        return (
            <div>
            <div className="checkOutHeader">
                {isAuthenticated &&
                    <div className="checkOutHeaderContent">Tài khoản của bạn hiện có <span style={{color:"red"}}>{userBalance && userBalance.result.main_balance}</span> đồng trong tài khoản</div>
                }
                {!isAuthenticated &&
                    <div className="checkOutHeaderContent">Bạn vui lòng <a href="/sign-up" style={{color:"red"}}>Đăng ký</a> hoặc <a href="/sign-in" style={{color:"red"}}>Đăng nhập</a> trước khi nạp tiền!</div>
                }
            </div>
            
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const { auth } = state.banhBaoApp

  const { userBalance, isAuthenticated } = auth

  return {
    isAuthenticated,
    userBalance
  }
}

export default connect(mapStateToProps)(CheckoutHeader)