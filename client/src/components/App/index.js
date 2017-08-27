import React, { Component } from "react";
import "./index.css";
import Layout from "../Layout/index";
import Services from "../Services/index";
import PageOne from "../Packages/index";
import Login from "../Login";
import SignUp from "../SignUp";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={PageOne} />
            <Route path="/services" component={Services} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
