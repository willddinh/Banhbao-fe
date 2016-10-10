import React, { Component } from 'react';
import $ from 'jquery';


export default class CheckoutHeader extends Component {
    constructor() {
        super();
        this.state = {
            conf:[]
        }
    }

    componentDidMount(){
        // $.get("http://104.199.175.76/api/ui/menu/home")
        // .done((res)=>{
        //     this.setState({
        //         conf: res.menuses
        //     }) 
        // })


    }
    render() {
        return (
            <div className="checkOutHeader">
                <div className="checkOutHeaderContent">
                    Bạn hiện đang có <span style={{color:"red"}}>10000</span> đồng trong tài khoản
                </div>
            </div>
        );
    }
}