import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './index.css'
import Layout from '../Layout/index'
<<<<<<< HEAD
import Services from '../Services/index'
import Welcome from '../Welcome/index.js'
import Login from '../Login'
import SignUp from '../SignUp'
import Plan from '../Plan'
import Details from '../Details'
import { Switch, Route } from 'react-router-dom'
=======
import Services from '../Services/'
import Welcome from '../Welcome/'
import Login from '../Login/'
import SignUp from '../SignUp/'
import Plan from '../Plan/'
import Home from '../Home/'
// import Details from '../Details'
>>>>>>> fe06e75b4ad030f4db7d61b0eea8cc65b457eb33

class App extends Component {
  state = {
    step: 1
  }
  render() {
    return (
      <div className="App">
        <Layout>
<<<<<<< HEAD
          <Plan />
          <Services />
          <Welcome />
          <Details />

          {/* <Switch>
            <Route exact path="/" component={PageOne} />
=======
          {/* <Details /> */}
          <Switch>
            <Route exact path="/" component={Home} />
>>>>>>> fe06e75b4ad030f4db7d61b0eea8cc65b457eb33
            <Route path="/services" component={Services} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            {/* <Route path="/details" component={Details} /> */}
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
