import React, { Component } from 'react'
import './index.css'

class PageOne extends Component {
  changePage = () => {
    this.props.history.push('/page-three')
  }

  render() {
    let pageOneStyle = {}
    let formStyle = {}
    let inputStyle = {}
    let labelStyle = {}
    let textAreaStyle = {}
    return (
      <div className="page-one" style={pageOneStyle}>
        <form style={formStyle}>
          <h2>Creative Process</h2>
          <p>
            Do you have a vision, or would you like our skilled professionals help guide you through the process to
            create your dream event? How creative can we be with the catering for your event - excluding venue fees.
          </p>
          <label>
            I need help
            <input style={inputStyle} type="checkbox" className="creative-process" value="" />
          </label>
          <label>
            I need a little help
            <input style={inputStyle} type="checkbox" className="creative-process" value="" />
          </label>
          <label>
            I know what I want
            <input style={inputStyle} type="checkbox" className="creative-process" value="" />
          </label>

          <h2>Day of Coordination</h2>
          <p>
            Sometimes coordinating an event is hard, that's why we're here to help. Our trained staff can assist with
            whatever comes your way on the day, just let us know.
          </p>
          <label>
            All hands on deck
            <input style={inputStyle} type="checkbox" className="dayof-coordination" value="" />
          </label>
          <label>
            We've got this
            <input style={inputStyle} type="checkbox" className="dayof-coordination" value="" />
          </label>

          <h2>Rental Services</h2>
          <label>
            Essential
            <input style={inputStyle} type="checkbox" className="rental-service-essential" value="" />
          </label>
          <label>
            Premium
            <input style={inputStyle} type="checkbox" className="rental-service-essential" value="" />
          </label>
          <h2>What additional details or inspirations would you like to share?</h2>
          <textarea style={textAreaStyle} className="textarea" rows="10" cols="50" />
          <button onClick={this.changePage}>Go To Next Page</button>
        </form>
      </div>
    )
  }
}

export default PageOne
