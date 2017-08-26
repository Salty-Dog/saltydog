import React, { Component } from 'react'
import './index.css'
import logo from '../../assets/salt-block-catering-white.png'

class Layout extends Component {
  render() {
    return (
      <div className="navWrapper">
        <header>
          <img className="logo" src={logo} alt="Salt Block Logo" />
          <nav>
            <a href="#">About</a>
            <a href="#">Hospitality</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        {this.props.children}
        <footer />
      </div>
    )
  }
}

export default Layout
