import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './index.css'
import Layout from '../Layout'
// import Details from '../Details'
import Services from '../Services/'
import Welcome from '../Welcome/'
import Login from '../Login/'
import SignUp from '../SignUp/'
import Plan from '../Plan/'
import Home from '../Home/'
import Details from '../Details'
import Proposal from '../Proposal/'

class App extends Component {
  state = {
    step: 1
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/signup" component={SignUp} />
            <Route path="/details" component={Details} />
            <Route path="/proposal" component={Proposal} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
