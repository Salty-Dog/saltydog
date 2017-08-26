import React, { Component } from "react";
import "./index.css";
import Layout from "../Layout/index";
import Services from "../Services/index";
import PageOne from "../Packages/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <PageOne />
          <Services />
        </Layout>
      </div>
    );
  }
}

export default App;
