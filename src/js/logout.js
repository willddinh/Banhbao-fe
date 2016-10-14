import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props

    return (
      <form className="sectionBtn"><span onClick={() => onLogoutClick()}>Đăng xuất</span></form>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}
