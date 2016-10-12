import React, { Component } from 'react';
import $ from 'jquery';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';

import RadioButton  from 'grommet/components/RadioButton';
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
            payPackage:{}
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
    onChange(e, payPackage){
        this.state.payPackage = e;
    }
    render() {
        const { payment, isAuthenticated, payUrl } = this.props

        return (
            <div className="checkOutMain">
            <Form onSubmit={this.onSubmit.bind(this)} >
                <Header>
                    <h1>
                    Chọn số tiền
                    </h1>
                </Header>
                <FormFields>
                    <fieldset>
                    <p>
                        Bạn phải chọn 1 trong 3 mục dưới đây
                    </p>
                    <FormField error={undefined}>
                    { payment && 
                        <div>
                        <blockquote>
                        {payment.payPackages.map((payPackage,index) => {
                            return (
                                <div  key={index}>
                                <RadioButton id={payPackage.code} name="role" label={payPackage.product_name}  onChange={this.onChange.bind(this, payPackage)} />
                                <br />
                                </div>
                            )
                        })
                        }
                        </blockquote>
                        </div>
                    }
                    </FormField>
                    
                    </fieldset>
                </FormFields>
                <Footer pad={{"vertical": "medium"}}>
                    <Button label="Nạp tiền" primary={true} onClick={this.onClick.bind(this)} />
                </Footer>
                {payUrl && 
                    <div>
                        {window.location = payUrl.pay_url}
                    </div>
                }
            </Form>


            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {

  const { paymentLists, quotes, auth, paymentRequest } = state.quotesApp
  const { quote, authenticated } = quotes
  const { payment } = paymentLists
  const { payUrl } = paymentRequest
  const { isAuthenticated, errorMessage } = auth

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