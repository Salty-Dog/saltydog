import React, { Component } from 'react'
import './progressbar.css'

class ProgressBar extends Component {
  render() {
    return (
      <div className="container">
        <ul className="progressbar">
          <li className="active">Occasion</li>
          <li>Food and Beverage</li>
          <li>Services</li>
          <li>My Proposal</li>
        </ul>
      </div>
    )
  }
}

export default ProgressBar
