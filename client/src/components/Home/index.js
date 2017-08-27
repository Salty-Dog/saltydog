import React, { Component } from 'react'
import './index.css'
import Services from '../Services/'
import Welcome from '../Welcome/'
import Plan from '../Plan/'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Plan history={this.props.history} />
      </div>
    )
  }
}

export default Home
