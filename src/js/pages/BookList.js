import '../../scss/index.scss';

import React, { Component } from 'react';
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

export default class BookList extends Component {
  constructor (props) {
    super (props);


    this.state = {
      menuButtonConf : []
      
    };
  }

  componentDidMount(){
  }
  render() {
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
        <Menu />
        <NavBar />
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
