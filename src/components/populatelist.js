import React, { Component } from "react";

class Populatelist extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: "ricky",
        address: "pasig",
      },
      {
        id: 2,
        name: "juan",
        address: "quezon",
      },
      {
        id: 3,
        name: "maria",
        address: "taguig",
      },
    ],
  };

  render() {
    return (
      <div>
        <span>populatelist</span>
        <ul>
          {this.getEmployees().map((x) => (
            <li key={x.id}>{x.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  getEmployees() {
    return this.state.employees;
  }
}

export default Populatelist;
