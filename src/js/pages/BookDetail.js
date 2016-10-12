import '../../scss/index.scss';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../partials/NavBar';
import Menu from '../partials/Menu';
import CategoryList from '../components/CategoryList';
import PublisherList from '../components/PublisherList';
import ProductList from '../pages/ProductList';

import $ from 'jquery';
import { connect } from 'react-redux'
import { loginUser, fetchBook, fetchQuote, fetchSecretQuote } from '../actions'
import Login from '../login'
import Quotes from '../quotes'

class BookDetail extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }

  componentDidMount(){
      window.console.log(this.props.params);
  }
  render() {

        const { dispatch, quote, book, isAuthenticated, errorMessage, isSecretQuote } = this.props
        dispatch(fetchBook(this.props.params.id));
    let container = {
      width: '80%',
      margin: '0 auto',
      marginTop: '50px'
    }

    let leftSection = {
        float: 'left',
        width: '20%'
    }

    let rightSection = {
        float: 'right',
        width: '80%'

    }
    return (
      <App centered={false}>
        <Menu           
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <NavBar />

                  <Quotes
            onQuoteClick={() => dispatch(fetchQuote())}
            onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
            isAuthenticated={isAuthenticated}
            quote={quote}
            isSecretQuote={isSecretQuote}
          />
          {book}

        <div className="productListSection" style={container}>
        </div>
        <br/>
        <br/>
        <br/>
      </App>
    );
  }
}


function mapStateToProps(state, ownProps) {

  const { books, quotes, auth } = state.quotesApp
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
