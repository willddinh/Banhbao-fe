import '../../scss/index.scss';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

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
import { loginUser, fetchBook, fetchQuote, fetchAddToCart, fetchSecretQuote } from '../actions'
import Login from '../login'
import Quotes from '../quotes'

class BookDetail extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }

  onClick(id){
  }
  addToCart(id){
      this.props.dispatch(fetchAddToCart(id));
  }
  addToWishList(){

  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  componentDidMount(){
      this.props.dispatch(fetchBook(this.props.params.id));
      window.console.log(this.props.book)
  }
  render() {

        const { dispatch, quote, book, isAuthenticated, errorMessage, isSecretQuote } = this.props
    let container = {
      width: '80%',
      margin: '0 auto',
      marginTop: '50px'
    }

    let leftSection = {
        float: 'left',
        width: '30%'
    }

    let rightSection = {
        float: 'right',
        width: '70%',
        color: 'black',
        paddingLeft: '20px'
    }

    let bookDesc = {
      height: '615px'
    }

    let bookSection = {
      marginTop: "20px"
    }
    let bookContent = {
      height: '100px',
      fontFamily: 'sfuEuro',
      fontSize: '16px',
      color: 'grey',
      overflow: 'auto'
    }
    let addToBtn = {
      height: '50px',
      marginTop: '20px'
    }
    let imageDesc = {
      width: '100%',
      height: '480px',
      // backgroundColor: 'blueviolet'
    }
    return (
      <App centered={false}>
        <Menu 
          noNavBar={true}
        />


        <div className="productListSection" style={container}>
          {book &&
            <div >
            <div className="bookDesc" style={bookDesc}>
              <div style={leftSection}>
                <div style={imageDesc}><img style={{widht: '100%'}}src={book.book.path} /></div> 
              </div>
              <div style={rightSection}>
                <div className="productDetailTitle">
                  {book.book.entity.title}
                  <span className="productDetailTitleSmall">Đứng thứ 15 trong 100 sách bán chạy nhất tháng này</span><br/>
                  <span className="productDetailTitleSmall">Tác giả: {book.book.author_id}</span>
                </div>
              <Header separator="top">
                <div style={bookSection}>
                    <div className="productDetailContentTitle">Giới thiệu sách</div><br/>
                    <div style={bookContent}>{book.book.content}
                    </div>
                    <div className="productDetailRentPrice">{this.numberWithCommas(Number(book.book.entity.rent_price))} đồng/ngày</div>
                    <div className="productDetailPrice">giá bán: {this.numberWithCommas(Number(book.book.entity.price))} đồng</div>
                    <div style={addToBtn}>
                      <span onClick={this.addToCart.bind(this, book.book.id)} className="pageBtnActive">Thêm vào giỏ hàng</span>
                      <span onClick={this.addToWishList.bind(this, book.book.id)} className="pageBtnActive" style={{backgroundColor: "orange", borderColor: "orange"}}>Thêm vào yêu thích</span>
                    </div>

                </div>
              </Header>
              </div>
            </div>
            </div> 
          }

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

  const { isAuthenticated, errorMessage,addToCart } = auth

  return {
    addToCart,
    quote,
    book,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(BookDetail)
