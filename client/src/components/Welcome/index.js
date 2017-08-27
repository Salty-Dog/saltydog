import React, { Component } from 'react'
import './index.css'

class Welcome extends Component {
  changePage = () => {
    this.props.history.push('/details')
  }

  render() {
    return (
      <div className="wrapper" id="welcome">
        <div className="themeWrapper">
          <div className="pack">
            <div className="essential" id="block">
              <label for="essential" className="welcome-title">
                Essential
              </label>
              <input
                type="radio"
                className="rental-service-essential"
                value="Essential"
                id="essential"
                name="essentialradio"
              />
              <p>White Rim or White Roma China</p>
              <h3>Glassware:</h3>
              <p>AP Wine, Water Goblet, Highball Glass</p>
              <p>Stainless Flatware</p>
            </div>
            <div className="premium" id="block">
              <label for="premium" className="welcome-title">
                Premium
              </label>
              <input
                type="radio"
                id="premium"
                className="rental-service-essential"
                value="Premium"
                name="essentialradio"
              />
              <p>Gold, Silver or Square China</p>
              <h3>Glassware:</h3>
              <p>White Wine, Red Wine, Champagne, Water Goblets, Highball Glass and Rocks Glass</p>
              <p>Stainless Flatware</p>
            </div>
          </div>
          <div className="count">
            <h3>Guest Count</h3>
            <input type="number" min="1" max="150" />
          </div>
          <button className="next-button" onClick={this.changePage}>
            Go To Next Page
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
