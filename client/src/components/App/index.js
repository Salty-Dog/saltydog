import React, { Component } from "react";
import "./index.css";
import Layout from "../Layout/index";
import Services from "../Services/index";
import Login from "../Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Services />
          <Login />
        </Layout>
      </div>
    );
  }
}

export default App;
