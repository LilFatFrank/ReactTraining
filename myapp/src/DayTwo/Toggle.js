import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  toggleHandler = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleHandler}>
          {this.state.toggle ? "Login" : "Logout"}
        </button>
        <div>
          <label>
            {this.state.toggle
              ? "You have successfully logged out"
              : "You have successfully logged in"}
          </label>
        </div>
      </div>
    );
  }
}
