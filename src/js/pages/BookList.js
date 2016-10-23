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
import { loginUser, fetchQuote, fetchBookList, fetchSecretQuote } from '../actions'
import Login from '../login'
import Quotes from '../quotes'

class BookList extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }
  
  componentDidMount(){
    this.props.dispatch(fetchBookList());
  }
  render() {

        const { dispatch, quote, bookListParam, isAuthenticated, errorMessage, isSecretQuote, curPage, totalPage } = this.props

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
          noNavBar={true}
        />
        <div className="productListSection" style={container}>
            <div style={leftSection}>
                <CategoryList />
                <PublisherList />

            </div>
            <div style={rightSection}>

                <ProductList />
            </div>
        </div>
        <br/>
        <br/>
        <br/>
      </App>
    );
  }
}
BookList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}


function mapStateToProps(state, ownProps) {

  const { quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage, bookListParam, curPage, totalPage} = auth

  return {
    curPage, 
    totalPage,
    bookListParam,
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(BookList)
