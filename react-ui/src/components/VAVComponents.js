// eslint-disable-next-line
import React, { Component } from "react";

//Redux
import { connect } from "react-redux";

//Component
import VAVComponent from "./VAVComponents/VAVComponent";

function mapStateToProps(state) {
  return {
    VAVComponents: state.VAV.VAVComponents
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

class VAVComponents extends Component {
  mapPropsToComponent() {
    const { VAVComponents } = this.props;
    const componentArray = [];
    for (let c in VAVComponents) {
      let component = VAVComponents[c];
      component.tabNames = Object.keys(component.data);
      component.name = c;
      component.active = false;
      componentArray.push(component);
    }
    const comps = componentArray.map((a, i) => {
      return <VAVComponent key={i} name={a.name} data={a.data} active={a.active} />;
    });
    return comps;
  }

  render() {
    return this.mapPropsToComponent();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VAVComponents);
