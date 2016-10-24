
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Table from 'grommet/components/Table';
import TableRow from '../../components/TableRow';

import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../../partials/NavBar';
import Menu from '../../partials/Menu';
import CategoryList from '../../components/CategoryList';
import PublisherList from '../../components/PublisherList';
import ProductList from '../../pages/ProductList';
import Button from 'grommet/components/Button';
import CartHeader from './CartHeader';
import $ from 'jquery';
import { connect } from 'react-redux'
import { loginUser, fetchBook, fetchQuote,  fetchCart, fetchSecretQuote, fetchDeleteCart } from '../../actions'
import { Link } from 'react-router'

class Cart extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }
    onDeleteCart(id){
        this.props.dispatch(fetchDeleteCart(id));
    }
  onClick(){
  }
  onCheckout(){

  }
  componentWillMount(){
  }
  componentDidMount(){
      this.props.dispatch(fetchCart());
  }
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

  render() {

        const { dispatch, userBalance, quote, cart, isAuthenticated, errorMessage, isSecretQuote, totalRentPrice, totalPrice } = this.props
    let container = {
      width: '80%',
      margin: '0 auto',
      marginTop: '50px'
    }

    let leftSection = {
        float: 'left',
        width: '65%'
    }

    let rightSection = {
        float: 'right',
        width: '35%'
    }


    let bookDesc = {
      height: '615px'
    }

    let bookSection = {

    }
    let bookContent = {
      height: '170px'
    }

    let imageDesc = {
      width: '320px',
      height: '480px',
      backgroundColor: 'blueviolet'
    }
    return (
      <App centered={false}>
        <Menu noNavBar={true}/>


        <div className="productListSection" style={container}>
            <div style={leftSection}>
                <CartHeader />
                <Table >
                    <thead>
                        <tr>
                        <th style={{width: "18%"}}>
                        </th>
                        <th style={{width: "42%"}}>
                        </th>
                        <th className="cartPriceTitle" style={{width: "20%"}}>
                            Đặt cọc
                        </th>
                        <th className="cartPriceTitle" style={{width: "20%"}}>
                            Giá thuê
                        </th>
                        </tr>
                    </thead>
                    <span style={{marginBottom: "15px"}}></span>
                    <tbody>
                    {cart && 
                        cart.cart.items.map( (book,index) => {
                            return (
                                <TableRow key={index}><td className="cartPhoto"></td><td className="cartProductname">{book.product_name}</td>
                                <td className="cartPrice">{this.numberWithCommas(Number(book.entity.price))}<span className="cartCurrency">đ</span></td>
                                <td className="cartPrice">
                                {this.numberWithCommas(Number(book.entity.rent_price))}<span className="cartCurrency">đ</span><br/>       
                                <div className="cartGuide">Giá mua: {this.numberWithCommas(Number(book.entity.price))}đ<br />
                                Bạn tiết kiệm: {100-Math.round((Number(book.entity.rent_price)/Number(book.entity.price))*100)}%
                                </div>                     
                                </td></TableRow>
                            )})
                    }
                    </tbody>
                </Table>

            </div>
            <div style={rightSection}>
            <div className="cartRightTable">
                <Table className="categoryList"  >
                <thead>
                    <tr>
                    <th className="cartRightTableHeader">
                        <span className="fiftyLeft">Tài khoản có</span><span className="fiftyRight" style={{color:"red"}}>{userBalance && this.numberWithCommas(Number(userBalance.result.main_balance))}<span className="cartCurrency">đ</span></span>
                    </th>
                    </tr>
                </thead>
                <tbody className="cartRightTableBody">
                    <tr className="cartRow">
                        <td className="cartTd">
                            <span className="fiftyLeft">Tổng đặt cọc</span>
                            <span className="fiftyRight" style={{color:"red"}}>{totalPrice && this.numberWithCommas(Number(totalPrice))}<span className="cartCurrency">đ</span></span>
                        </td>
                    </tr>
                    <tr className="cartRow">
                        <td className="cartTd">
                            <span className="fiftyLeft">Tổng giá thuê</span>
                            <span className="fiftyRight" style={{color:"red"}}>{totalRentPrice && this.numberWithCommas(Number(totalRentPrice))}<span className="cartCurrency">đ</span></span>
                        </td>
                    </tr>
                    <tr className="cartRow">
                        <td className="cartTd cartGuide" style={{textAlign: "center", fontSize: "13px"}}>
                            <span>Tiền đặt cọc của bạn sẽ được hoàn lại vào tài khoản sau khi chúng tôi nhận lại sách</span>
                        </td>
                    </tr>
                    {totalPrice && (Number(totalRentPrice+totalPrice)<=Number(userBalance.result.main_balance)) &&
                        <tr className="cartRow">
                            <td className="cartTd" style={{textAlign: "center"}}>
                                <span className="pageBtnActive" onClick={this.onCheckout.bind(this)}>Thanh toán</span>
                            </td>
                        </tr>
                    }
                    {totalPrice && (Number(totalRentPrice+totalPrice)>Number(userBalance.result.main_balance)) &&
                        <tr className="cartRow">
                            <td className="cartTd" style={{textAlign: "center"}}>
                                <Link to="/add-cash"><span className="pageBtnActive">Nạp tiền</span></Link>
                            </td>
                        </tr>
                    }
                    {cart && 
                        <tr className="cartRow">
                            <td className="cartTd" style={{textAlign: "center"}}>
                                <span className="pageBtnActive" onClick={this.onDeleteCart.bind(this, cart.cart.id)}>Xóa giỏ hàng</span>
                            </td>
                        </tr>
                    }
                </tbody>
                </Table>


            </div>

            </div>


        </div>
        <br/>

        <br/>
        <br/>
      </App>
    );
  }
}


function mapStateToProps(state, ownProps) {

  const { books, quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
    const { book } = books

  const { cart, isAuthenticated, errorMessage, userBalance, totalRentPrice, totalPrice } = auth

  return {
    totalRentPrice,
    totalPrice,
    userBalance,
    cart,
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(Cart)
