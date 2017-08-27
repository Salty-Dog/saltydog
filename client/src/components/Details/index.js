import React, { Component } from 'react'
import './index.css'

const styles = {
  selected: {
    border: '2px solid #e1fbbb'
  }
}

class Details extends Component {
  state = {
    needHelp: ''
  }

  helpRadioClicked(level) {
    this.setState({
      needHelp: level
    })
  }

  changePage = () => {
    this.props.history.push('/proposal')
  }

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
              <label
                onClick={() => this.helpRadioClicked('help')}
                htmlFor="help"
                className="help"
                style={this.state.needHelp === 'help' ? styles.selected : {}}
              >
                <input type="radio" name="help" id="help" checked={this.state.needHelp === 'help'} />
                <span>I need help!</span>
              </label>

              <label
                onClick={() => this.helpRadioClicked('little-help')}
                htmlFor="little-help"
                className="help"
                style={this.state.needHelp === 'little-help' ? styles.selected : {}}
              >
                <input
                  type="radio"
                  name="help"
                  value="little-help"
                  id="little-help"
                  checked={this.state.needHelp === 'little-help'}
                />
                <span>I need a little help!</span>
              </label>

              <label
                onClick={() => this.helpRadioClicked('want-help')}
                htmlFor="want-help"
                className="help"
                style={this.state.needHelp === 'want-help' ? styles.selected : {}}
              >
                <input
                  type="radio"
                  name="help"
                  value="want-help"
                  id="want-help"
                  checked={this.state.needHelp === 'want-help'}
                />
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
                <input type="checkbox" className="dayof-coordination" value="" id="all-hands" n />
                <span>All hands on deck</span>
              </label>

              <label for="hands" className="hands-button">
                <input type="checkbox" className="dayof-coordination" value="" id="no-hands" n />
                <span>We got this</span>
              </label>
            </div>
          </section>
        </div>
        <div className="page-three">
          <div className="additional-section">
            <h2>What additional details or inspirations would you like to share?</h2>
            <textarea className="textarea" rows="10" cols="50" />

            <form className="occasion-form">
              <h2 className="occasion-header">What is your occasion?</h2>
              <label>Social</label>
              <input type="checkbox" className="social" value="Social" id="" />
              <label>Corporate</label>
              <input type="checkbox" className="corporate" value="Corporate" /> <br />
              <textarea className="textarea" rows="10" cols="50">
                Please explain your event type further (optional)
              </textarea>
            </form>
            <button onClick={this.changePage} type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Details
