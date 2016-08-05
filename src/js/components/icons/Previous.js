import React, {Component} from 'react';

class Previous extends Component {

  constructor() {
    super();
  }

  /**
   * render - react default, render the dom element
   *
   * @returns {Object}  React component
   */
  render() {
    return (
        <span className="grommetux-button__icon">
            <svg version="1.1" style={{border: '1px solid white'}} viewBox="-8 0 40 22" width="24px" height="24px" role="img" className="grommetux-control-icon grommetux-control-icon-previous grommetux-control-icon--large" >
                <title id="previous-title">
                    <span id="previous">previous</span>
                </title>
                <g><rect y="1.2071" fill="none" width="24" height="24"></rect><polyline style={{strokeWidth : 1 }} fill="none" stroke="#000000" strokeMiterlimit="10" points="16.1397,0.7071 5.1397,11.7071 16.1397,22.7071 	"></polyline>
                </g>
            </svg>
        </span>
  );
  }
}

export default Previous;
