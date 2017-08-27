import React, { Component } from 'react'
import './index.css'

class Plan extends Component {
  changePage = () => {
    this.props.history.push('/services')
  }
  render() {
    return (
      <div className="wrapper" id="plan">
        <form>
          <div>
            <div className="venue">
              <h3>Do you have a venue?</h3>
              <label>Yes</label>
              <input type="radio" for="venue" value="true" />
              <label>No</label>
              <input type="radio" for="venue" value="false" />
            </div>

            <div className="time">
              <h3>Event Date</h3>
              <input type="date" className="date" value="Calendar" />
              <h3>Event Time</h3>
              <label>Morning</label>
              <input type="checkbox" className="time-morning" value="Morning" />
              <label>Afternoon</label>
              <input type="checkbox" className="time-afternoon" value="Afternoon" />
              <label>Evening</label>
              <input type="checkbox" className="time-evening" value="Evening" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Plan
