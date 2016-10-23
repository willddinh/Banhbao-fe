import React, { Component, PropTypes  } from 'react';
import $ from 'jquery';
import { FacebookLogin } from 'react-facebook-login-component';
import Login from '../login'
import { connect } from 'react-redux'

import Logout from '../logout'
import { loginUser, logoutUser, sessionRequest } from '../actions'
import { Link } from 'react-router'
import Header from 'grommet/components/Header';
import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conf: [],
            openDialogForm:true
        }
    }
    onClose(e){
        this.setState({
            openDialogForm: !this.state.openDialogForm
        })
    }
    openLoginForm(){
        this.setState({
            openDialogForm: !this.state.openDialogForm
        })
    }
    componentDidMount(){
        $.get("http://104.199.175.76/api/ui/menu/home")
        .done((res)=>{
            this.setState({
                conf: res.menuses
            }) 
        })


    }

    onLogoutClick(){
        this.props.dispatch(logoutUser());
    }
    responseFacebook (response) {
        window.console.log(response);
        //anything else you want to do(save to localStorage)... 
    }

    clickOnButton(id, url) {
        this.state.conf.map( (button) => {
            if (button.active == true) button.active = false
            if (id == button.id) {
                button.active = true;
            }
        })
        this.forceUpdate();
    }
    render() {
        const { dispatch, isAuthenticated, errorMessage , userInfo } = this.props

        let classRoot = "menu";
        if (!this.props.noNavBar)
            classRoot = "menu";
        else 
            classRoot = "menuNoNavbar";
        
        let buttonArr = this.state.conf.map((button, index) => {
            let buttonClass;
            if (button.active == true)
                buttonClass = "menuButton activeMenuButton"
            else 
                buttonClass = "menuButton"
            return (
                <Link to={button.url}><span style={{color: 'white'}} onClick={this.clickOnButton.bind(this, button.id, button.url) } key={index}  className={buttonClass} >{button.title}</span></Link>
            )
        })
        return (
            <div>
                <div className="menuBorder"></div>
                    <div className={classRoot}>
                    
                        <div className="menuLeft">
                            <Link to="/"><span className="menuTitle"><img src="https://storage.googleapis.com/banhbaovietnam/logo.png" /></span></Link>
                        </div>
                        <div className="menuRight">
                            {buttonArr}
                            <Link to="/cart"><span style={{color: 'white'}} className="menuButton" >Giỏ hàng</span></Link>
                            {isAuthenticated &&
                                <div style={{float: "right", width: "50%"}}>
                                    <Link to="/user-profile"><span style={{color: 'white'}} className="menuButton" >Chào {userInfo.user.name}</span></Link>
                                    <span style={{color: 'white', cursor: "pointer"}}  href="#" onClick={this.onLogoutClick.bind(this)} className="menuButton" >Đăng xuất</span>
                                    <Link to="/add-cash"><span className="smallBtn" >Nạp tiền</span></Link>
                                </div>
                            }
                            {!isAuthenticated &&
                                <div style={{float: "right", width: "50%"}}>
                                    <Link to="/sign-in"><span style={{color: 'white'}} className="menuButton" >Đăng nhập</span></Link>
                                    <Link to="/sign-up"><span style={{color: 'white'}} className="menuButton" >Đăng ký</span></Link>
                                </div>
                            }

                        </div>

                    </div>
                    
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const {  auth } = state.banhBaoApp
  const { isAuthenticated, errorMessage, userInfo } = auth

  return {
    isAuthenticated,
    userInfo,
    errorMessage
  }
}

export default connect(mapStateToProps)(Menu)
