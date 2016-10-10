import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';

export default class CategoryList extends Component {
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

    render() {
        let category = this.state.categories.map((category, index) => {
            return (
                <tr key={index}>
                    <td className="categoryListBody">
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