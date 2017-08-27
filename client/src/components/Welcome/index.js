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
              <p>White Rim or White Roma China</p>
              <p>Glassware: AP Wine, Water Goblet, Highball Glass</p>
              <p>Stainless Flatware</p>
            </div>
            <div className="premium" id="block">
              <label>Premium</label>
              <input type="radio" className="rental-service-essential" value="Premium" />
              <p>Gold, Silver or Square China</p>
              <p>Glassware: White Wine, Red Wine, Champagne, Water Goblets, Highball Glass and Rocks Glass</p>
              <p>Stainless Flatware</p>
            </div>
          </div>
          <div className="count">
            <h3>Guest Count</h3>
            <input type="number" value="count" min="1" max="150" />
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
