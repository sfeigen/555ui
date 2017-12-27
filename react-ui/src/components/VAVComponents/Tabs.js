// eslint-disable-next-line
import React, { Component } from "react";

//Redux
import { connect } from "react-redux";

//Component
import Tab from "./Tab/Tab";

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

class Tabs extends Component {
  mapPropsToComponent() {
    return null;
  }

  render() {
    return this.mapPropsToComponent();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
