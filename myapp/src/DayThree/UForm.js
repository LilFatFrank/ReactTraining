import React, { Component } from "react";

export default class UForm extends Component {
  constructor() {
    super();
    this.uname = React.createRef();
    this.job = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`hello, ${this.uname.current.value} JOB: ${this.job.current.value}`);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label>
              Name: <input type="text" name="uname" ref={this.uname}></input>
            </label>
            <br />
            <label>
              Job: <input type="text" name="job" ref={this.job}></input>
            </label>
            <br />
            <input type="submit" value="submit"></input>
          </form>
        </div>
      </div>
    );
  }
}
