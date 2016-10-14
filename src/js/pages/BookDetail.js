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

  onClick(){
    window.console.log(this.props.book);
    let body = {
      books: []
    }
      this.props.dispatch(fetchAddToCart(body));

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
          {book &&
            <div >
            <div className="bookDesc" style={bookDesc}>
              <div style={leftSection}>
                <div style={imageDesc}></div> 
              </div>
              <div style={rightSection}>
                <Heading>
                  {book.book.entity.title}
                </Heading>
              <Header separator="top">
                <div style={bookSection}>
                    <h3>Giới thiệu sách</h3><br/>
                    <div style={bookContent}>{book.book.content}</div>
                    <h3>{book.book.rent_price}</h3>
                    <h3>Giá bán: {book.book.entity.price}</h3>
                    <span>Số lượng: 1</span><Button label="Thêm vào giỏ hàng" primary={true} onClick={this.onClick.bind(this)} />

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

  const { isAuthenticated, errorMessage } = auth

  return {
    quote,
    book,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(BookDetail)
