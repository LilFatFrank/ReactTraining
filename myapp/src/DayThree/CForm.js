import React, { Component } from "react";

export default class CForm extends Component {
  constructor() {
    super();
    this.state = {
      uname: "Guest",
      job: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome, ${this.state.uname} JOB: ${this.state.job}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="uname"
              value={this.state.uname}
              onChange={e => this.handleChange(e)}
            ></input>
          </label>
          <br />
          <label>
            Job:{" "}
            <input
              type="text"
              name="job"
              value={this.state.job}
              onChange={e => this.handleChange(e)}
            ></input>
          </label>
          <br />
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}
