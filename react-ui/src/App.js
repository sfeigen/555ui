import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { history } from "./store";

//Router
import { Route } from "react-router";

import Index from "./pages/Index";

//ASSETS
import "./styles/App.css";

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

class App extends Component {
  componentWillMount() {
    //
  }
  render() {
    return (
      <ConnectedRouter history={history}>
        <main className="container">
          <div className="App">
            <Route exact path="/" component={Index} />
          </div>
        </main>
      </ConnectedRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
