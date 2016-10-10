import React, { Component } from 'react';
import $ from 'jquery';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';

import RadioButton  from 'grommet/components/RadioButton';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

export default class CheckoutMain extends Component {
    constructor() {
        super();
        this.state = {
            conf:[]
        }
    }

    componentDidMount(){

    }
    onSubmit(){
        
    }
    onClick(){

    }
    onChange(){
        
    }
    render() {
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
                    <RadioButton id="100k" name="role" label="100.000 VND" value="100000"  onChange={this.onChange.bind(this)} />
                    <RadioButton id="200k" name="role" label="200.000 VND" value="200000"  onChange={this.onChange.bind(this)} />
                    <RadioButton id="300k" name="role" label="300.000 VND" value="300000"  onChange={this.onChange.bind(this)} />

                    </FormField>
                    
                    </fieldset>
                </FormFields>
                <Footer pad={{"vertical": "medium"}}>
                    <Button label="Nạp tiền" primary={true} onClick={this.onClick.bind(this)} />
                </Footer>
            </Form>


            </div>
        );
    }
}