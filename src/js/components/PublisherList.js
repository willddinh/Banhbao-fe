import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';
import { connect } from 'react-redux'
import { fetchBookListByPublisher } from '../actions'

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
        this.props.dispatch(fetchBookListByPublisher(id));
    }

    render() {
        let publisher = this.state.publishers.map((publisher, index) => {
            return (
                <ul key={index}>
                    <li onClick={this.onClick.bind(this, publisher.id)} >
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
  const { bookList, isAuthenticated, errorMessage } = auth

  return {
    quote,
    bookList,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(PublisherList)
