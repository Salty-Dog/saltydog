import React, { Component } from 'react'
import './index.css'

class Welcome extends Component {
  changePage = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="wrapper" id="welcome">
        <div>
          <div className="pack">
            <div className="essential" id="block">
              <label>Essential</label>
              <input type="radio" className="rental-service-essential" value="Essential" />
            </div>
            <div className="premium" id="block">
              <label>Premium</label>
              <input type="radio" className="rental-service-essential" value="Premium" />
            </div>
          </div>
          <div className="count">
            <h3>Guest Count</h3>
            <input type="number" value="count" min="1" max="150" />
          </div>
          <button onClick={this.changePage}>Go To Next Page</button>
        </div>
      </div>
    )
  }
}

export default Welcome
