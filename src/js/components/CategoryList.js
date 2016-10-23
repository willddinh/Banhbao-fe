import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';
import { connect } from 'react-redux'
import { fetchBookList, addBookListParam } from '../actions'

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            categories:[]
        }
    }

    componentDidMount(){
        $.get("http://banhbao.io/api/book/getCategories")
        .done((res)=>{
            this.setState({
                categories: res.categories
            }) 
        })


    }
    onClick(id){
        $(".categoryListBody").css("font-weight","normal").css("color","#A6ACAF");

        let obj = {categoryId:id};
        let key = Object.keys(obj)[0];
        let param = this.props.bookListParam;
        if (param == '')
            param = JSON.stringify(obj);
        param = JSON.parse(param);
        param[key] = obj[key];
        
        param = JSON.stringify(param);

        this.props.dispatch(addBookListParam(param,obj));
        this.props.dispatch(fetchBookList(param));
        $(".categoryListBody-"+id).css("font-weight","bold").css("color","grey");

    }
    render() {
        let category = this.state.categories.map((category, index) => {
            return (
                <tr key={index}>
                    <td onClick={this.onClick.bind(this, category.id)} className={`productFilterRadioBtn categoryListBody categoryListBody-`+category.id}>
                        {category.title}
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <Table className="categoryList"  >
                <thead>
                    <tr>
                    <th className="categoryListHeader" >
                        Danh mục sách
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {category}
                </tbody>
                </Table>


            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const { quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
  const { bookListParam, bookList, isAuthenticated, errorMessage } = auth

  return {
    bookListParam,
    quote,
    bookList,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(CategoryList)
