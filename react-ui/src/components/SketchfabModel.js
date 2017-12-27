// eslint-disable-next-line
import React, { Component } from "react";

//Redux
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

class SketchfabModel extends Component {
  render() {
    const src = `https://sketchfab.com/models/${this.props.src}/embed?autospin=.1&amp;autostart=1`;
    return (
      <div className="sketchfab-embed-wrapper">
        <iframe
          title={this.props.name}
          width="100%"
          height="600"
          src={src}
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SketchfabModel);
