import React, { Component } from 'react'
import './index.css'

class Services extends Component {
  render() {
    return (
      <div className="wrapper" id="service">
        <div className="serviceWrapper">
          <form className="serviceForm">
            <div className="checkRadio">
              <input type="radio" id="option-0" name="selector" />
              <label>Beer and Wine Service</label>
            </div>
            <div className="checkRadio">
              <input type="radio" id="option-1" name="selector" />
              <label>Full Bar Liquor Open Bar</label>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Services
