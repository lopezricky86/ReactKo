import React, { Component } from "react";
import { connect } from "react-redux";

class Teststoreclass extends Component {
  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.bugs.filter((x) => x.id === 3).length > 0) {
      console.log("ssis has been completed");
    }
  }

  render() {
    return (
      <div>
        Test Store Class;
        <br></br>
        <p>ownprops: {this.props.propsko}</p>
        <ul>
          {this.props.bugs.map((bug) => (
            <li
              key={bug.id}
            >{`Id: ${bug.id} Description: ${bug.description}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownprops) {
  return {
    bugs: state.bugs,
    propsko: ownprops.propsko,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Teststoreclass);
