import React, { Component } from 'react';
import $ from 'jquery';
import { fetchUserBalance } from '../../actions.js'
import { connect } from 'react-redux'

class CartHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conf:[]
        }
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    componentDidMount(){
        this.props.dispatch(fetchUserBalance());
    }
    render() {
        const { userBalance, totalRentPrice, totalPrice } = this.props;
        return (
            <div>
            <div className="cartHeader">
                <div className="checkOutHeaderContent">Bạn đang có <span style={{color:"red"}}>{userBalance && this.numberWithCommas(Number(userBalance.result.main_balance))}đ</span> trong tài khoản</div>
                {totalPrice && (Number(totalRentPrice+totalPrice)>Number(userBalance.result.main_balance)) &&
                    <div>, bạn cần nạp thêm <span style={{color:"red"}}>{this.numberWithCommas(Number(totalRentPrice+totalPrice)-Number(userBalance.result.main_balance))}đ</span> để đặt cọc cho sách</div>
                }
            </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const { auth } = state.banhBaoApp

  const { userBalance, totalRentPrice, totalPrice } = auth

  return {
    totalRentPrice,
    totalPrice,
    userBalance
  }
}

export default connect(mapStateToProps)(CartHeader)