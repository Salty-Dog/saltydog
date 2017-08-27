import React, { Component } from 'react'
import './index.css'
import Layout from '../Layout/index'
import PageOne from '../Packages/PageOne.js'
import Services from '../Services/index'
import Welcome from '../Welcome/index.js'
import Login from '../Login'
import SignUp from '../SignUp'
import Plan from '../Plan'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Welcome />
          <Services />
          <Plan />
          {/* <Switch>
            <Route exact path="/" component={PageOne} />
            <Route path="/services" component={Services} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch> */}
        </Layout>
      </div>
    )
  }
}

export default App
