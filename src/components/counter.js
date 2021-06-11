import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    let count = this.state.count + 1;
    this.setState({ count });
  };

  getBadgeClasses = () => {
    let classes = "badge badge-";
    classes += this.state.count > 0 ? "primary" : "warning";
    return classes;
  };

  render() {
    return (
      <div>
        <span>Counter</span>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button onClick={() => this.handleIncrement()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
