import React, { Component } from 'react';
import SearchIcon from './icons/Search';


export default class SearchInputBox extends Component {
    render() {

        let inputStype = {
            float: 'left',
            width: '80%',
            boxSizing: 'border-box',
            backgroundColor: 'white'
        }
        return (
            <div className="searchGroup">
                    <form className="searchForm">
                        <input style={inputStype} type="text" placeholder="Search here..." required />
                        <button type="submit"><SearchIcon /></button>
                    </form>
            </div>
        );
    }
}