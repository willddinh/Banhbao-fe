import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';
import BrickDetailed from '../components/BrickDetailed';
import Bricks from '../components/Bricks';

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        $.get("http://104.199.175.76/api/book/list")
        .done((res)=>{
            this.setState({
                products: JSON.parse(res).items
            })
        })
    }

    render() {
        let productList = this.state.products.map((product, index) => {
            return (
                <BrickDetailed  key={index} title={product.title} texture={product.path} colorIndex={"neutral-" + (index+1)} type={product.type} href={"http://google.com"}
                    rentPrice={Number(product.rent_price)} price={Number(product.price)} author={product.author} 
                />
            )
        })
        return (
            <div >
                <Bricks>
                    {productList}
                </Bricks>
            </div>
        );
    }
}