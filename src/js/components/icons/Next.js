import React, {Component} from 'react';

class Next extends Component {

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
        <svg version="1.1" style={{border: '1px solid white'}} viewBox="-8 0 40 22" width="24px" height="24px" role="img" className="grommetux-control-icon grommetux-control-icon-next grommetux-control-icon--large">
            <title id="next-title"><span id="next">next</span>
            </title>
            <g><rect x="0" y="0" fill="none" width="24" height="24"></rect><polyline fill="none" style={{strokeWidth : 1 }} stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="8,1.2101 19,12.2101 8,23.2101 	"></polyline></g>
        </svg>
    </span>
  );
  }
}

export default Next;
