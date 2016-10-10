import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import $ from 'jquery';

export default class PublisherList extends Component {
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

    render() {
        let publisher = this.state.publishers.map((publisher, index) => {
            return (
                <ul key={index}>
                    <li >
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