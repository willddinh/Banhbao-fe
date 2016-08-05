import React, {Component} from 'react';

class Search extends Component {

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
    <span class="grommetux-button__icon">
        <svg version="1.1" viewBox="0 0 24 24" width="24px" height="20px" role="img" class="grommetux-control-icon grommetux-control-icon-search" ariaLabelledby="search-title"><title id="search-title">
        <span id="search">search</span></title><g>
        <rect x="0" fill="none" width="24" height="24"></rect><path fill="none"  stroke="white" strokeWidth="2" strokeMiterlimit="10" d="M18,9.5c0,4.6944-3.8056,8.5-8.5,8.5 S1,14.1944,1,9.5S4.8056,1,9.5,1S18,4.8056,18,9.5z M16,16l7,7"></path></g></svg>
    </span>
  );
  }
}

export default Search;
