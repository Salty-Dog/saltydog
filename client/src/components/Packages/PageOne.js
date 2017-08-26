import React, { Component } from 'react'
import './index.css'

class PageOne extends Component {
  render() {
    let pageOneStyle = {
      fontFamily: Freight-Sans-Medium;
    }
    let formStyle = {
    }
    let inputStyle = {}
    let labelStyle = {}
    let textAreaStyle = {}
    return (
      <div className="page-one" style={pageOneStyle}>
        <form style={formStyle}>
          <label style={labelStyle}>Occasion</label>
          <input style={inputStyle} type="checkbox" className="social" value="Social">
            Social
          </input>
          <input style={inputStyle} type="checkbox" className="corporate" value="Corporate">
            Corporate
          </input>
          <textarea style={textAreaStyle} className="textarea" rows="10" cols="50">
            Please explain your event type further (optional)
          </textarea>

          <label style={labelStyle}>Guest Count</label>
          <input style={inputStyle} type="number" className="quantity" value="Guestcount" min="1" max="150" />

          <label style={labelStyle}>Do you have a venue?</label>
          <input style={inputStyle} type="checkbox" className="yes-venue" value="yes">
            Yes
          </input>
          <input style={inputStyle} type="checkbox" className="no-venue" value="no">
            No
          </input>

          <label style={labelStyle}>Event Date</label>
          <input style={inputStyle} type="date" className="date" value="Calendar" />

          <label style={labelStyle}>Event Time</label>
          <input style={inputStyle} type="checkbox" className="time-morning" value="Morning">
            Morning
          </input>
          <input style={inputStyle} type="checkbox" className="time-afternoon" value="Afternoon">
            Afternoon
          </input>
          <input style={inputStyle} type="checkbox" className="time-evening" value="Evening">
            Evening
          </input>
        </form>
      </div>
    )
  }
}

export default PageOne
