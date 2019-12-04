import React, { Component } from "react";

export default class ConditonRender extends Component {
  constructor() {
    super();
    this.state = {
      green: true
    };
  }

  buttonClick() {
    this.setState(prevState => ({
      green: !prevState.green
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.buttonClick()}>Click Me!</button>
        {this.state.green ? <Green /> : <Red />}
      </div>
    );
  }
}

function Green() {
  return <h1 style={{color: 'green'}}>Color is Green!</h1>;
}

function Red() {
  return <h1 style={{color: 'red'}}>Color is Red!</h1>;
}
