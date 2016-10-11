import React, { Component, PropTypes  } from 'react';
import $ from 'jquery';
import { FacebookLogin } from 'react-facebook-login-component';
import Login from '../login'
import Logout from '../logout'
import { loginUser, logoutUser } from '../actions'


export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            conf:[]
        }
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

    clickOnButton(id) {
        this.state.conf.map( (button) => {
            if (button.active == true) button.active = false
            if (id == button.id) {
                button.active = true;
            }
        })
        this.forceUpdate();
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
                <span onClick={this.clickOnButton.bind(this, button.id) } key={index} href={button.url} className={buttonClass} >{button.title}</span>
            )
        })
        return (
            <div>
                <div className="menuBorder"></div>
                    <div className={classRoot}>
                    
                        <div className="menuLeft">
                                        {!isAuthenticated &&
              <Login
                errorMessage={errorMessage}
                onLoginClick={ creds => dispatch(loginUser(creds)) }
              />
            }

            {isAuthenticated &&
              <Logout onLogoutClick={() => dispatch(logoutUser())} />
            }


                        </div>

                        <div className="menuRight">
                            {buttonArr}
                                                    <FacebookLogin socialId="156142261154836"
                                language="en_US"
                                scope="public_profile,email"
                                responseHandler={this.responseFacebook}
                                xfbml={true}
                                version="v2.5"
                                class="menuButton"
                                buttonText="Login via fb"/>
                        </div>

                    </div>
                    
            </div>
        );
    }
}

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}