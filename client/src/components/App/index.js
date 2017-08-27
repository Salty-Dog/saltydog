import React, { Component } from 'react'
import './index.css'
import Layout from '../Layout/index'
import PageOne from '../Packages/PageOne'
import Services from '../Services/index'
import PageThree from '../Packages/PageThree'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={PageOne} />
            <Route path="/page-two" component={Services} />
            <Route path="/page-three" component={PageThree} />
            {/* <Route path="/page-four" component={} /> */}
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
