import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CustomerCatalogue extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data
        })
      );
  }

  render() {
    if (this.state.users.length > 0) {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name} </td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/customerCatalogue/${user.id}`}>Click Me!</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export class CustomerDetails extends Component {
  constructor() {
    super();
    this.state = {
      detail: {}
    };
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          detail: data
        })
      );
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.detail.name}</p>
        <p>Email: {this.state.detail.email}</p>
        <p>Phone: {this.state.detail.phone}</p>
        <p>
          Address:{" "}
          {
            (this.state.detail.address
              ? this.state.detail.address.street +
                "," +
                this.state.detail.address.suite +
                "," +
                this.state.detail.address.city +
                "-" +
                this.state.detail.address.zipcode
              : "")
          }
        </p>
        <p>
          <label>
            <Link to="/customerCatalogue">Back</Link>
          </label>
        </p>
      </div>
    );
  }
}
