// eslint-disable-next-line
import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { toggleActiveTab } from "./../../../actions/tabActions";

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

class Tab extends Component {
  render() {
    //TAB LAYOUT GOES HERE
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
