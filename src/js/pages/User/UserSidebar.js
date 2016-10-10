
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Sidebar from 'grommet/components/Sidebar';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Article from 'grommet/components/Article';
import Split from 'grommet/components/Split';
import Section from 'grommet/components/Section';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import DateTime from 'grommet/components/DateTime';

import RadioButton  from 'grommet/components/RadioButton';
import CheckBox  from 'grommet/components/CheckBox';

import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../../partials/NavBar';
import MainMenu from '../../partials/Menu';


import $ from 'jquery';

export default class UserSideBar extends Component {
  constructor (props) {
    super (props);


    this.state = {
      hideChangePassword : true
      
    };
  }
  onClose(){

  }
  componentDidMount(){
  }
    onSubmit(){
    
    }
    onClick(){

    }
    onChange(){
        
    }
    onClickOnChangePassword(e){
        this.setState({
            hideChangePassword : !this.state.hideChangePassword
        })
    }
  render() {
  

    let container = {
      width: '80%',
      margin: '0 auto'
    }
    return (
        <Sidebar colorIndex="light-2" full={false}>
            <Header pad="medium" justify="between">
                <Title>
                Tài khoản của
                </Title>
            </Header>
            <Menu primary={true}>
                <Anchor primary={true}>
                Thông tin chung
                </Anchor>
                <Anchor>
                Thông tin tài khoản
                </Anchor>
                <Anchor>
                Sổ tài khoản
                </Anchor>
                <Anchor>
                Mời bạn bè
                </Anchor>

            </Menu>
        </Sidebar>
    );
  }
}
