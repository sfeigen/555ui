// eslint-disable-next-line
import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import { toggleActiveVAVComponent } from "./../../actions/VAVComponentActions";

//Components
import Tabs from "./Tabs";

//Deps
const $ = require("jquery");

function mapStateToProps(state) {
  return {
    VAVComponents: state.VAV.VAVComponents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleComponent: (name, VAVComponents) =>
      dispatch(toggleActiveVAVComponent(name, VAVComponents))
  };
}

class VAVComponent extends Component {
  toggleData() {
    //PROPS
    const { name } = this.props;
    const { VAVComponents } = this.props;
    const self = this.props.VAVComponents[name];

    //DISPATCH
    this.props.toggleComponent(name, VAVComponents);

    if (self.active) {
      (() => $(`.tab.${this.props.name}`).removeClass("hidden"))();
    } else if (!self.active) {
      (() => $(`.tab.${this.props.name}`).addClass("hidden"))();
    }
  }

  mapDataToTabs() {
    const { name } = this.props;
    const self = this.props.VAVComponents[name];
    console.log(self);
  }

  render() {
    const { name } = this.props;
    const VAVClassName = `wrapper ${name}`;
    const tabClassName = `tab hidden ${name}`;

    return (
      <div className={VAVClassName} id={name} onClick={this.toggleData.bind(this)}>
        <pre> {name} </pre>
        <div className={tabClassName}>{JSON.stringify(this.props.data)}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VAVComponent);
