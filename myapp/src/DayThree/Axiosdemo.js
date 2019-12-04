import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export default class Axiosdemo extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      detail: {}
    };
  }

  componentDidMount() {
    /* axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>
        this.setState({
          posts: response.data
        })
      )
      .catch(err => console.log(err)); */
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data =>
        this.setState({
          posts: data
        })
      )
      .catch(err => console.log(err));
  }

  showDetails(e) {
    fetch("https://jsonplaceholder.typicode.com/users/" + e)
      .then(response => response.json())
      .then(data =>
        this.setState({
          detail: data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.posts.length > 0)
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.state.posts.map(user => (
                    <li key={user.id}>
                      <Link to={`/users/${user.id}`}>{user.name} </Link>
                    </li>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    else return <h1>Loading</h1>;
  }
}

export class DisplayUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {}
    };
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            detail: data
          }),
        console.log(this.state.detail)
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>HI: {this.state.detail.name}</h1>
        <Link to="/users">Back</Link>
      </div>
    );
  }
}
