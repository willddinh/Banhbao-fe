import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';
import { connect } from 'react-redux'
import { fetchBookListById } from '../actions'

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            categories:[]
        }
    }

    componentDidMount(){
        $.get("http://104.199.175.76/api/book/getCategories")
        .done((res)=>{
            this.setState({
                categories: res.categories
            }) 
        })


    }
    onClick(id){
        this.props.dispatch(fetchBookListById(id));
    }
    render() {
        let category = this.state.categories.map((category, index) => {
            return (
                <tr key={index}>
                    <td onClick={this.onClick.bind(this, category.id)} className="categoryListBody">
                        {category.title}
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <Table className="categoryList" selectable={true} >
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
  const { bookList, isAuthenticated, errorMessage } = auth

  return {
    quote,
    bookList,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(CategoryList)
