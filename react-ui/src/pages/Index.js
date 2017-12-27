// eslint-disable-next-line
import React, { Component } from "react";

//Redux
import { connect } from "react-redux";

//Actions
import { VAVComponentFetch } from "./../actions/VAVComponentActions";

//Components
import VAVComponents from "./../components/VAVComponents";
// eslint-disable-next-line
import SketchfabModel from "./../components/SketchfabModel";

function mapStateToProps(state) {
  return {
    fetching: state.VAV.fetching,
    fetched: state.VAV.fetched,
    data: state.VAV.data,
    errors: state.VAV.errors,
    VAVComponents: state.VAV.VAVComponents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComponents: () => dispatch(VAVComponentFetch())
  };
}

//OBJECT LITERAL RENDER WHEEL
function renderState(option, data = {}) {
  //RENDER SETATES
  function fetching() {
    return <pre>Fetching from server...</pre>;
  }
  function fetched() {
    // eslint-disable-next-line
    const src = "afcffb8308a34be1b1144ccf7dbd2789";
    // eslint-disable-next-line
    const src2 = "81fcfd339f224b9ea41255a6e8535cbd";
    return (
      <div>
        {/* <SketchfabModel src={src} /> */}
        {data}
      </div>
    );
  }
  function error() {
    return <pre>Error... </pre>;
  }

  //RENDER OBJECT LITERAL
  const render = {
    fetching,
    fetched,
    error
  };
  return render[option]();
}

class Index extends Component {
  componentWillMount() {
    this.props.fetchComponents();
  }

  render() {
    if (this.props.fetching) {
      return renderState("fetching");
    } else if (this.props.fetched) {
      // console.log(<VAVComponents />);
      return renderState("fetched", <VAVComponents />);
    } else {
      return renderState("error");
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
