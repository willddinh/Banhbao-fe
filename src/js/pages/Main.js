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

export default class Main extends Component {
  render() {
    let menuButtonConf = [
      {
        id: 1,
        name: 'Button 1',
        url: '/#',
        active: true
      },
      {
        id: 2,
        name: 'Button 2',
        url: '/#'
      },
      {
        id: 3,
        name: 'Button 3',
        url: '/#'
      }
    ];

    let container = {
      width: '80%',
      margin: '0 auto'
    }

    return (
      <App centered={false}>
        <Menu conf={menuButtonConf}/>
        <NavBar/>
        <div className="container" style={container}>
          <Section />
          <Section />
          <Section />

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
