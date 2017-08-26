import React, { Component } from 'react'
import './index.css'
import PageOne from './PageOne.js'
import PageThree from './PageThree.js'

class Packages extends Component {
  render() {
    let pageOneStyle = {}
    let formStyle = {}
    let inputStyle = {}
    let labelStyle = {}
    let textAreaStyle = {}
    return (
      <div className="wrapper">
        <PageOne />
        <PageThree />
      </div>
    )
  }
}

export default Packages
