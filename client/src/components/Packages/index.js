import React, { Component } from "react";
import "./index.css";
import PageOne from "./PageOne.js";
import PageThree from "./PageThree.js";
import ProgressBar from "./ProgressBar/ProgressBar";

class Packages extends Component {
  render() {
    let pageOneStyle = {};
    let formStyle = {};
    let inputStyle = {};
    let labelStyle = {};
    let textAreaStyle = {};
    return (
      <div className="wrapper">
        <ProgressBar />
        <PageOne />
        <PageThree />
      </div>
    );
  }
}

export default Packages;
