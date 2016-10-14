import '../../scss/index.scss';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../partials/NavBar';
import Menu from '../partials/Menu';
import CategoryList from '../components/CategoryList';
import PublisherList from '../components/PublisherList';
import ProductList from '../pages/ProductList';
import Button from 'grommet/components/Button';

import $ from 'jquery';
import { connect } from 'react-redux'
import { loginUser, fetchBook, fetchQuote,  fetchSecretQuote } from '../actions'
import Login from '../login'
import Quotes from '../quotes'

class Cart extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }

  onClick(){
  }
  componentWillMount(){
      this.state.cart = {
          cartId: 1,
          books: [
            { 
                name: "Tên sản phẩm 1",
                rentPrice: 20000,
                price: 40000,
                qty: 1,
                discount: 0, 
                total: 60000
            },
                        { 
                name: "Tên sản phẩm 2",
                rentPrice: 40000,
                price: 40000,
                qty: 1,
                discount: 0, 
                total: 80000
            }

          ]
      }
  }
  componentDidMount(){
    //   this.props.dispatch(fetchCart(this.props.params.id));
    //   window.console.log(this.props.book)
  }
  render() {

        const { dispatch, quote, cart, isAuthenticated, errorMessage, isSecretQuote } = this.props
    let container = {
      width: '80%',
      margin: '0 auto',
      marginTop: '50px'
    }

    let leftSection = {
        float: 'left',
        width: '25%'
    }

    let rightSection = {
        float: 'right',
        width: '75%',
        color: 'black'
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
        <Menu           
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <NavBar />


        <div className="productListSection" style={container}>
            <Table >
            <thead>
                <tr>
                <th>
                    Sản phẩm trong giỏ hàng
                </th>
                <th>
                    Giá thuê
                </th>
                <th>
                    Giá mua
                </th>
                <th>
                    Số lượng
                </th>
                <th>
                    Giá giảm
                </th>
                <th>
                    Thành tiền
                </th>
                </tr>
            </thead>
            <tbody>
            {this.state.cart && 
                this.state.cart.books.map( (book,index) => {
                    return ( <TableRow key={index}><td>{book.name}</td><td>{book.rentPrice} đ</td><td>{book.price} đ</td><td>{book.qty}</td><td>{book.discount} đ</td><td>{book.total} đ</td></TableRow>)
                })
            }
            </tbody>
            </Table>

        </div>
        <br/>
        <Button label="Thanh toán" primary={true} onClick={this.onClick.bind(this)} />

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

  const { cart, isAuthenticated, errorMessage } = auth

  return {
    cart,
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(Cart)
