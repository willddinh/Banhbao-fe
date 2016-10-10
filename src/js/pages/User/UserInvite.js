
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
import UserSideBar from './UserSideBar';

import $ from 'jquery';

export default class UserInvite extends Component {
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
      <App centered={false}>
        <MainMenu noNavBar={true} />
        <div className="container" style={container}>
        <br />
        <br />
        <br />
        <br />
        <Split flex="right">
            <UserSideBar />
            <Article>
            <Header pad={{"horizontal": "medium"}}>
            Thông tin tài khoản
            </Header>
            <Section pad="medium">
            <Form onSubmit={this.onSubmit.bind(this)} >
                <FormFields>
                    <fieldset>
                    <FormField label="Giới tính" >
                        <RadioButton id="genderMale" name="item-3" label="Nam"  onChange={this.onChange.bind(this)} />
                        <RadioButton id="genderFeMale" name="item-3" label="Nữ"  onChange={this.onChange.bind(this)} />
                    </FormField>
                    <FormField label="Email" htmlFor="aufemail">
                        <input id="aufemail" name="email" type="text" onChange={this.onChange.bind(this)} />
                    </FormField>
                    <FormField label="Họ tên" htmlFor="aufname">
                        <input id="aufname" name="fullname" type="text" onChange={this.onChange.bind(this)} />
                    </FormField>
                    <FormField label="Năm sinh" htmlFor="aufbirth">
                        <DateTime id="aufbirth" name="birthday" format="M/D/YYYY" onChange={this.onChange.bind(this)}  />
                    </FormField>

                   
                    <FormField>
                        <CheckBox id="ffitem3" name="item-3" label="Thay đổi mật khẩu" onChange={this.onClickOnChangePassword.bind(this)} />
                        <FormField hidden={this.state.hideChangePassword}>
                            <FormField label="Mật khẩu cũ" htmlFor="oldpass">
                                <input id="oldpass" name="oldpass" type="password"  onChange={this.onChange.bind(this)} />
                            </FormField>
                            <FormField label="Mật khẩu mới" htmlFor="newpass">
                                <input id="newpass" name="newpass" type="password" onChange={this.onChange.bind(this)} />
                            </FormField>
                            <FormField label="Nhập lại" htmlFor="retypepass">
                                <input id="retypepass" name="retypepass" type="password" onChange={this.onChange.bind(this)} />
                            </FormField>

                        </FormField>

                    </FormField>

                    
                    </fieldset>
                </FormFields>
                <Footer pad={{"vertical": "medium"}}>
                    <Button label="Cập nhật" primary={true} onClick={this.onClick.bind(this)} />
                </Footer>

            </Form>
            </Section>
        </Article>

        </Split>

        </div>
      </App>
    );
  }
}
