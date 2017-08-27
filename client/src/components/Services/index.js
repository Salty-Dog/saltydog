import React, { Component } from 'react'
import './index.css'

class Services extends Component {
  changePage = () => {
    this.props.history.push('/page-three')
  }

  render() {
    return (
      <div className="wrapper" id="DrinkService">
        <div className="serviceWrapper">
          <form className="serviceForm">
            <div className="checkRadio">
              <input type="radio" id="option-0" name="selector" />
              <label>Beer and Wine Service</label>
            </div>
            <div className="checkRadio">
              <input type="radio" id="option-1" name="selector" />
              <label>Full Open Bar</label>
            </div>
            <div className="container-fluid" id="checks">
              <div className="box">
                <div className="col">
                  <input type="checkbox" id="option-0" name="selector" />
                  <label>Passed Hors D'oeuvres</label>
                </div>
                <div className="col">
                  <input type="checkbox" id="option-1" name="selector" />
                  <label>Chef Attended Stations</label>
                </div>
                <div className="col">
                  <input type="checkbox" id="option-1" name="selector" />
                  <label>Plated Dinner</label>
                </div>
              </div>
              <div className="box">
                <div className="col">
                  <input type="checkbox" id="option-0" name="selector" />
                  <label>Family Style</label>
                </div>
                <div className="col">
                  <input type="checkbox" id="option-1" name="selector" />
                  <label>Buffet Dinner</label>
                </div>
                <div className="col">
                  <input type="checkbox" id="option-1" name="selector" />
                  <label>Individual Desserts</label>
                </div>
              </div>
            </div>
          </form>
          <br />
          <button onClick={this.changePage}>Go To Next Page</button>
        </div>
      </div>
    )
  }
}

export default Services
