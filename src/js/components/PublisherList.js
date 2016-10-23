import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';
import { connect } from 'react-redux'
import { fetchBookListByPublisher, addBookListParam,fetchBookList } from '../actions'

class PublisherList extends Component {
    constructor() {
        super();
        this.state = {
            publishers:[]
        }
    }

    componentDidMount(){
        $.get("http://104.199.175.76/api/book/getPublishers")
        .done((res)=>{
            this.setState({
                publishers: res.publishers
            }) 
        })

    }
    onClick(id){
        $(".publisher-list").css("font-weight","normal").css("color","#A6ACAF");
        let obj = {publisherId:id};
        let key = Object.keys(obj)[0];
        let param = this.props.bookListParam;
        if (param == '')
            param = JSON.stringify(obj);
        param = JSON.parse(param);
        param[key] = obj[key];
        
        param = JSON.stringify(param);

        this.props.dispatch(addBookListParam(param,obj));
        this.props.dispatch(fetchBookList(param));
        $(".publisher-"+id).css("font-weight","bold").css("color","grey");
    }

    render() {
        let publisher = this.state.publishers.map((publisher, index) => {
            return (
                <ul key={index}>
                    <li className={`productFilterRadioBtn publisher-list publisher-`+publisher.id} style={{cursor: "pointer"}} onClick={this.onClick.bind(this, publisher.id)} >
                        {publisher.name}
                    </li>
                </ul>
            )
        })
        return (
            <div className="publisherList">
                <div className="publisherListHeader">Công ty phát hành</div>
                {publisher}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

  const { quotes, auth } = state.banhBaoApp
  const { quote, authenticated } = quotes
  const { bookList, isAuthenticated, bookListParam, errorMessage } = auth

  return {
    bookListParam,
    quote,
    bookList,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(PublisherList)
