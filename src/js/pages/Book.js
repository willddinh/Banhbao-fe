import '../../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../partials/NavBar';
import Menu from '../partials/Menu';
import Section from '../partials/Section';
import $ from 'jquery';
import { Link } from 'react-router'

export default class Book extends Component {
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
      margin: '0 auto'
    }
    return (
      <App centered={false}>
        <Menu/>
        <NavBar/>


        <div className="container" style={container}>
          <Section name="Thư viện sách" />
          <Section name="Second Section"  />
          <Section name="Third Section" />

        </div>
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
          </p>
        </Footer>
      </App>
    );
  }
}
