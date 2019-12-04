import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.stuDetails = props.stuDetails;

    this.state = {
      marks: 20
    };
  }

  revaluation = () => {
    if (this.state.marks < 100) {
      this.setState((prevState, props) => ({
        marks: prevState.marks + props.markStep
      }));
    } else {
      alert("no");
    }
  };

  decrease = () => {
    if (this.state.marks > 0) {
        this.setState((prevState, props) => ({
            marks: prevState.marks - props.markStep
        }));
    } else {
        alert("no");
    }
  }

  render() {
    return (
      <div>
        <p>Student Name: {this.stuDetails.name}</p>
        <p>Student ID: {this.stuDetails.id}</p>
        <button type="button" onClick={() => this.revaluation()}>
          Increase
        </button>
        <p>{this.state.marks}</p>
        <button type="button" onClick={() => this.decrease()}>
          Decrease
        </button>
      </div>
    );
  }
}
