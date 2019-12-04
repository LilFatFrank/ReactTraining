import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleString(),
      count: 0
    };
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div>
        {this.state.time}
        <div>
          <button onClick={this.updateCount}>Update Count</button>{" "}
          {this.state.count}{" "}
          <button onClick={this.resetCount}>Reset Count</button>
        </div>
      </div>
    );
  }
}
