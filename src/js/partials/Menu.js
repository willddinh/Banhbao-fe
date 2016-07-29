import React, { Component } from 'react';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    componentWillMount(){
        this.state.conf = this.props.conf;
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

        let buttonArr = this.state.conf.map((button, index) => {
            let buttonClass;
            if (button.active == true)
                buttonClass = "menuButton activeMenuButton"
            else 
                buttonClass = "menuButton"
            return (
                <span onClick={this.clickOnButton.bind(this, button.id) } key={index} href={button.url} className={buttonClass}>{button.name}</span>
            )
        })
        return (
            <div className="menu">
                <div className="menuLeft">
                    <span className="menuTitle">BANHBAO</span>
                </div>
                <div className="menuRight">
                    {buttonArr}
                </div>
            </div>
        );
    }
}