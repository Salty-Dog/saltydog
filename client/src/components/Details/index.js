import React, { Component } from 'react'
import './index.css'




class Details extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="page-one">
        <section className="creative-process">
          <h2 className="creative-header">Creative Process</h2>
          <p className="creative-body">
            Do you have a vision, or would you like our skilled professionals to help guide you through the process to
            create your dream event? How creative can we be with the catering for your event excluding venue fees.
          </p>

          <form className="radiobox">

          <label for="help" className="help">
            <input type="radio" name="help" className="help" value="little" id="help" />
            <span>I need help!</span>
          </label>

          <label for="little-help" className="help">
            <input type="radio" name="help" className="help" value="little" id="little-help" />
            <span>I need a little help!</span>
          </label>

          <label for="want-help" className="help">
            <input type="radio" name="help" className="help" value="false" id="want-help" />
            <span>I know what I want!</span>
          </label>

          </form>
        </section>
      </div>
      <div className="page-two">
        <section className="occasion-section">
          <div className="coordination-process">


              <h2>Day of Coordination</h2>

              <p>
                Sometimes coordinating an event is hard, thats why were here to help. Our trained staff can assist with
                whatever comes your way on the day, just let us know.
              </p>

              <label for="hands" className="hands-button">
                <input type="checkbox" className="dayof-coordination" value="" id="all-hands" n/>
                <span>All hands on deck</span>
              </label>

              <label for="hands" className="hands-button">
                <input type="checkbox" className="dayof-coordination" value="" id="no-hands" n/>
                <span>We got this</span>
              </label>
          </div>
        </section>
      </div>

            <h2>What additional details or inspirations would you like to share?</h2>
            <textarea className="textarea" rows="10" cols="50" />


              <form className="occasiona-form">

                <h2 className="occasion-header">What is your occasion?</h2>

                <label>Social</label>
                <input type="checkbox" className="social" value="Social" id=""/>

                <label>Corporate</label>
                <input type="checkbox" className="corporate" value="Corporate" />

                <textarea className="textarea" rows="10" cols="50">
                  Please explain your event type further (optional)
                </textarea>

              </form>

      </div>
    )
  }
}

export default Details
