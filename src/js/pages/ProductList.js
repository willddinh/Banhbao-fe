import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';
import BrickDetailed from '../components/BrickDetailed';
import Bricks from '../components/Bricks';
import { connect } from 'react-redux'
import { fetchBookList, addBookListParam } from '../actions'

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            toggle: true,
            priceOrder: "",
            priceOrderMessage: "Giá từ thấp đến cao"

        }
    }

    componentDidMount(){
    }
    onPriceOrderClick(type, num){
        let obj = {};
        if (type == "priceOrder"){
            this.state.toggle = !this.state.toggle;
            if (this.state.toggle){
            this.state.priceOrder = "ASC";
            this.setState({priceOrderMessage:
                "Giá từ thấp đến cao"})
            }
            else{
            this.state.priceOrder = "DESC";
                    this.setState({priceOrderMessage:
                "Giá từ cao xuống thấp"})

            }

            obj = {priceOrder:this.state.priceOrder};
        }
        if (type == "banChay")
            obj = {subCategoriesIds:6};
        if (type == "chonLoc")
            obj = {subCategoriesIds:7};
        if (type == "pageNum")
            obj = {page: num}
        let key = Object.keys(obj)[0];
        let param = this.props.bookListParam;
        if (param == '')
            param = JSON.stringify(obj);    
        param = JSON.parse(param);
        param[key] = obj[key];

        param = JSON.stringify(param);
        if (type == "clearFilter"){
            $(".productFilterRadioBtn").css("font-weight","normal").css("color","#A6ACAF");

            param = undefined;
            this.props.dispatch(addBookListParam(""));
            this.props.dispatch(fetchBookList(param));

        } else {
        this.props.dispatch(addBookListParam(param));
        this.props.dispatch(fetchBookList(param));

        }
    }
    clickToPage(pageNum){

     } 


    render() {
        const { dispatch, bookList, quote, isAuthenticated, errorMessage, isSecretQuote, curPage, totalPage } = this.props
        return (
            <div >               
             <div className="productFilter">
                  <button className="productFilterbtn" onClick={this.onPriceOrderClick.bind(this,"banChay")}>Sách chọn lọc</button>
                  <button className="productFilterbtn" onClick={this.onPriceOrderClick.bind(this,"chonLoc")}>Bán chạy nhất</button>
                  <button className="productFilterbtn" onClick={this.onPriceOrderClick.bind(this,"priceOrder")}>{this.state.priceOrderMessage}</button>
                <button className="productFilterbtn" onClick={this.onPriceOrderClick.bind(this,"clearFilter")}>Xóa bộ lọc</button>

            </div>
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
                <div className="pageNumber">
                    {curPage &&
                    totalPage.map((index)=>{
                        let activeClass = "pageBtnActive";
                        let normalClass = "pageBtn";
                        let pageClass = normalClass;
                        if (curPage == index)
                            pageClass = activeClass;
                        else
                            pageClass = normalClass;
                        return <span key={index} className={pageClass} onClick={this.onPriceOrderClick.bind(this,"pageNum",index)}>{index}</span>
                    })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const { quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
  const { bookList, isAuthenticated, errorMessage, bookListParam, curPage, totalPage } = auth

  return {
    curPage, totalPage,
    bookListParam,
    quote,
    bookList,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(ProductList)
