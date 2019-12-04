import React, { Component } from "react";

const hocComponent = BaseComponent =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        change: true
      };
    }

    changeNumber = () => {
      this.setState(prevState => ({
        change: !prevState.change
      }));
    };

    render() {
      return (
        <div>
          <button onClick={this.changeNumber}>Click Me!</button>
          {this.state.change ? <BaseComponent number={this.state.change}/> :  <BaseComponent number={this.state.change}/>}
        </div>
      );
    }
  };

let Label = props => <h1>This is the Base Component {props.number.toString()}</h1>;
let LabelComponent = hocComponent(Label);

export default function HocDemo() {
  return (
    <div>
      <LabelComponent />
    </div>
  );
}
