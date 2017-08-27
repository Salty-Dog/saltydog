import React, { Component } from 'react'
import './index.css'
import Layout from '../Layout/index'
import Services from '../Services/index'
import Welcome from '../Welcome/index.js'
import Login from '../Login'
import SignUp from '../SignUp'
import Plan from '../Plan'
import Proposal from '../Proposal/index.js'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Plan />
          <Services />
          <Welcome />
          {/* <Switch>
            <Route exact path="/" component={PageOne} />
            <Route path="/services" component={Services} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/confirmation" component={Proposal} />
          </Switch> */}
          <SignUp />
          <Proposal />
        </Layout>
      </div>
    )
  }
}

export default App
