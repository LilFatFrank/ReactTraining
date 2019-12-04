import React, { Component } from "react";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick() {
    if (this.state.todo && !this.state.todos.includes(this.state.todo)) {
      this.setState({
        todos: [...this.state.todos, this.state.todo],
        todo: ""
      });
    }
  }

  handleRemove(todo) {
    if (todo) {
      this.setState({
        todos: this.state.todos.filter(x => x !== todo)
      });
    }
  }

  render() {
    return (
      <div>
        ToDo:{" "}
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={e => this.handleChange(e)}
        ></input>
        <button className="btn btn-primary" onClick={() => this.handleClick()}>
          Add
        </button>
        <h1>ToDo:</h1>
        <ul>
          {this.state.todos.map((todo,id) => (
            <li key={id}>
              {todo}
              <button
                type="button"
                className="btn"
                onClick={() => this.handleRemove(todo)}
              >
                Mark as complete
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
