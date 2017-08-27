import React, { Component } from 'react'
import './index.css'
import Services from '../Services/'
import Welcome from '../Welcome/'
import Plan from '../Plan/'
import Details from '../Details'
import Proposal from '../Proposal'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Plan history={this.props.history} />
        <Services />
        <Welcome />
        <Proposal />
      </div>
    )
  }
}

export default Home
