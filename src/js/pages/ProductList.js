import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';
import BrickDetailed from '../components/BrickDetailed';
import Bricks from '../components/Bricks';
import { connect } from 'react-redux'

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
    }

    render() {
        const { dispatch, bookList, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props

        return (
            <div >
                <Bricks>
                {bookList &&
                    bookList.items.map((product, index) => {
                    return (
                            <BrickDetailed  id={product.id} key={index} title={product.title} texture={product.path} colorIndex={"neutral-" + (index+1)} type={product.type} href={"http://google.com"}
                                rentPrice={Number(product.rent_price)} price={Number(product.price)} author={product.author} 
                            />
                        )
                    })
                    }
                </Bricks>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const { quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
  const { bookList, isAuthenticated, errorMessage } = auth

  return {
    quote,
    bookList,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(ProductList)
