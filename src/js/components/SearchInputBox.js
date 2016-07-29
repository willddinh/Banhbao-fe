import React, { Component } from 'react';


export default class SearchInputBox extends Component {
    render() {
        let searchGroupStyle = {
            position: 'absolute',
            margin: '20%',
            width: '100%',
            zIndex: 1
        }

        let inputStype = {
            width: '60%',
            boxSizing: 'border-box',
            backgroundColor: 'white'
        }
        return (
            <div style={searchGroupStyle} className="searchGroup">
                <div className="button_box2">
                    <form className="form-wrapper-2 cf">
                        <input style={inputStype} type="text" placeholder="Search here..." required />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}