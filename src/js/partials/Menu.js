import React, { Component, PropTypes  } from 'react';
import $ from 'jquery';
import { FacebookLogin } from 'react-facebook-login-component';
import Login from '../login'
import Logout from '../logout'
import { loginUser, logoutUser } from '../actions'
import { Link } from 'react-router'
import Header from 'grommet/components/Header';
import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';


export default class Menu extends Component {
    constructor() {
        super();
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
        window.console.log(url)
    }

    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props

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
                <a style={{color: 'white'}} onClick={this.clickOnButton.bind(this, button.id, button.url) } key={index} href={button.url} className={buttonClass} >{button.title}</a>
            )
        })
        return (
            <div>
                <div className="menuBorder"></div>
                    <div className={classRoot}>
                    
                        <div className="menuLeft">
                        <div style={{marginTop: '-30px'}}>
                            {!isAuthenticated &&
                                <form className="sectionBtn"><span onClick={this.openLoginForm.bind(this)}>Đăng nhập</span></form>
                            }

                            <Layer onClose={this.onClose.bind(this)} hidden={this.state.openDialogForm} closer={true} align="top">
                            <Header>
                                <Heading tag="h2">
                                Đăng nhập
                                </Heading>
                            </Header>
                            <Section>
                                <Paragraph>
                                    <Login
                                        errorMessage={errorMessage}
                                        onLoginClick={ creds => dispatch(loginUser(creds))}
                                        onClick={this.onClose.bind(this)} 
                                    />
                                </Paragraph>
                            </Section>
                            </Layer>

                            {isAuthenticated &&

                            <Logout onLogoutClick={() => dispatch(logoutUser())} />
                            }
                        </div>

                        </div>

                        <div className="menuRight">
                            {buttonArr}
                            <a style={{color: 'white'}}  href={"/cart/"+localStorage.getItem('order')} className="menuButton" >Giỏ hàng</a>

                        </div>

                    </div>
                    
            </div>
        );
    }
}

