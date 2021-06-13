import React, { Component } from "react";
import { connect } from "react-redux";
import ChildComponent from "./childComponent";
import { bugAdded, unResolvedBugsSelector } from "../simplestore/bugs";

class Teststoreclass extends Component {
  state = {
    number: 5,
  };

  componentDidMount() {
    this.props.addBug();
    console.log(this.state.number);
  }

  componentDidUpdate() {
    if (this.props.bugs.filter((x) => x.id === 3).length > 0) {
    }
  }

  Return1(param) {
    console.log(`execute Return 1 function ${param}`);
  }

  render() {
    return (
      <div>
        Test Store Class;
        <br></br>
        <p>ownprops: {this.props.propsko}</p>
        <ul>
          {this.props.bugs.map((bug) => (
            <li key={bug.id}>
              {`Id: ${bug.id} Description: ${bug.description}`}
            </li>
          ))}
        </ul>
        <ChildComponent callBackFunctionKo={this.Return1}>
          Child comp
        </ChildComponent>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          increment {this.state.number}
        </button>
        <br></br>
        <button onClick={() => this.props.addBug()}>Add Bug</button>
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
  return {
    addBug: () => dispatch(bugAdded("Bug1")),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teststoreclass);
