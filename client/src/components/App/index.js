import React, { Component } from 'react'
import './index.css'
import Layout from '../Layout/index'
import Services from '../Services/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Services />
        </Layout>
      </div>
    )
  }
}

export default App
