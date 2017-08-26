import React, { Component } from 'react'
import './index.css'

class Packages extends Component {
  render() {
    let pageOneStyle = {}
    let formStyle = {}
    let inputStyle = {}
    let labelStyle = {}
    let textAreaStyle = {}
    return (
      <div className="wrapper">
        <div className="page-one" style={pageOneStyle}>
          <form style={formStyle}>
            <h2>What is your occasion?</h2>
            <label>
              Social
              <input style={inputStyle} type="checkbox" className="social" value="Social" />
            </label>
            <label>
              Corporate
              <input style={inputStyle} type="checkbox" className="corporate" value="Corporate" />
            </label>

            <textarea style={textAreaStyle} className="textarea" rows="10" cols="50">
              Please explain your event type further (optional)
            </textarea>

            <h2>Guest Count</h2>
            <input style={inputStyle} type="number" className="quantity" value="Guestcount" min="1" max="150" />

            <h2>Do you have a venue?</h2>
            <label>
              Yes
              <input style={inputStyle} type="checkbox" className="yes-venue" value="yes" />
            </label>
            <label>
              No
              <input style={inputStyle} type="checkbox" className="no-venue" value="no" />
            </label>

            <h3>Event Date</h3>
            <input style={inputStyle} type="date" className="date" value="Calendar" />

            <h3>Event Time</h3>
            <label>
              Morning
              <input style={inputStyle} type="checkbox" className="time-morning" value="Morning" />
            </label>
            <label>
              Afternoon
              <input style={inputStyle} type="checkbox" className="time-afternoon" value="Afternoon" />
            </label>
            <label>
              Evening
              <input style={inputStyle} type="checkbox" className="time-evening" value="Evening" />
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default Packages
