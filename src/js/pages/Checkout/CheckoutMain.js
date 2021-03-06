import React, { Component } from 'react';
import $ from 'jquery';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';

import RadioButton  from '../../components/RadioButton';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import { connect } from 'react-redux'
import { loginUser, fetchPaymentRequest, fetchPaymentList, fetchQuote, fetchSecretQuote } from '../../actions'
import Login from '../../login'
import Quotes from '../../quotes'
import Checkout from './Checkout'

class CheckoutMain extends Component {
    constructor() {
        super();
        this.state = {
            payPackage:{},
            backgroundColor: {
                    backgroundColor: "transparent"
                }
        }
    }

    componentDidMount(){
    }
    onSubmit(){
        
    }
    onClick(){
        let body = {
            packageCode: this.state.payPackage.code,
            amount: this.state.payPackage.amount
        }
        this.props.dispatch(fetchPaymentRequest(JSON.stringify(body)));
    }
    onChange(radioBtn, payPackage){
        $(".pay-list").children().css("background-color","transparent").css( "color","#666");
        $(".pay-list").children().children().children().css( "color","#666")

        $("."+radioBtn).css("background-color","red");
        $("."+radioBtn).children().children().css("color","white");
        this.state.payPackage = payPackage;
    }

    render() {
        const {     quote,
                payment,
                payUrl,
                isSecretQuote: authenticated,
                isAuthenticated,
                errorMessage
                } = this.props
        return (
            <div>
            <div className="checkOutMain">
            <Form onSubmit={this.onSubmit.bind(this)} >
            { payment && 

                <FormFields >
                    <div  style={{backgroundColor: "rgb(237,237,237)"}}>
                    <div style={{paddingTop: "20px"}} ></div>
                    <span className="checkOutMainTitle" >
                        Chọn số tiền nạp vào ví
                    </span>

                        <div className="pay-list">
                        {payment.payPackages.map((payPackage,index) => {
                            return (
                                <div className={`checkout-list checkout-list-`+index} key={index}>
                                <RadioButton id={payPackage.code} name="role" label={payPackage.product_name}  onChange={this.onChange.bind(this, `checkout-list-`+index,payPackage)} />
                                <br />
                                </div>
                            )
                        })
                        }
                        </div>
                    
                    </div>
                </FormFields>
            }

            <p style={{textAlign: "center"}}>hoặc</p>


                <FormFields >
                    <div  style={{backgroundColor: "rgb(237,237,237)"}}>
                    <div style={{paddingTop: "20px"}} ></div>
                    <span className="checkOutMainTitle" >
                        Nhập chính xác số tiền cần nạp
                    </span>
                        <input className="checkoutTextArea" id="addCashVnd" name="login" type="text" value=""/>
                        đồng
                    </div>
                </FormFields>

                                    <p style={{textAlign: "center"}}>Bạn sẽ được chuyển đến OnePay để tiếp tục giao dịch</p>

                                <form className="sectionBtn"><span onClick={this.onClick.bind(this)}>Tiếp tục</span></form>

            </Form>
            </div>

            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {

  const { paymentLists, quotes, auth, paymentRequest } = state.banhBaoApp
  const { quote , } = quotes
  const { payment,authenticated } = paymentLists
  const { payUrl, isAuthenticated,  errorMessage } = auth

  return {
    quote,
    payment,
    payUrl,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(CheckoutMain)