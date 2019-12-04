import React, { Component } from "react";

export default class CustomerRegistration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      names: ["yashi", "apurwa", "Deepa"]
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  
  handleClick() {
    if (this.state.name !== "" && !this.state.names.includes(this.state.name)) {
      this.setState({
        names: [...this.state.names, this.state.name],
        name: ""
      });
    } else {
      alert("name already exists");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            ></input>
            <button onClick={() => this.handleClick()}>Submit</button>
          </label>
        </form>
        <br />
        <ul>
          {this.state.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
