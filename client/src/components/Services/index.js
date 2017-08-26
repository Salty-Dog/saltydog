import React, { Component } from 'react'
import './index.css'

class Services extends Component {
  render() {
    return (
      <div className="wrapper" id="service">
        <div className="serviceWrapper">
          <div className="food">
            <form className="serviceForm">
              <button>Beer and Wine Service</button>
              <button>Full Liquor Open Bar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Services
