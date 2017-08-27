import React, { Component } from 'react'
import './index.css'

class Plan extends Component {
  changePage = () => {
    this.props.history.push('/services')
  }
  render() {
    return (
      <div className="wrapper" id="plan">
        <form className="venue-timeWrapper">
          <div className="venueWrapper">
            <div className="venue">
              <h3>Do you have a venue?</h3>

              <label for="venue-yes" className="venue-button">
                <input type="radio" id="venue-yes" value="true" name="venue-selection" className="venue-button" />
                <span>Yes</span>
              </label>

              <label for="venue-no" className="venue-button">
                <input type="radio" id="venue-no" value="false" name="venue-selection" className="venue-button" />
                <span>No</span>
              </label>

            </div>

            <div className="time">
              <h3>Event Date</h3>
              <input type="date" className="date" value="Calendar" id="calendar"/>
              <h3>Event Time</h3>

              <label className="time-button">
                <input type="checkbox" className="time-morning time-button" value="Morning" id="time-morning" />
                <span>Morning</span>
              </label>

              <label className="time-button">
                <input type="checkbox" className="time-afternoon time-button" value="Afternoon" id="time-afternoon" />
                <span>Afternoon</span>
              </label>

              <label className="time-button">
              <input type="checkbox" className="time-evening time-button" value="Evening" id="time-evening" />
              <span>Evening</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Plan
