import React, { Component } from "react";
import { connect } from "react-redux";
import UserAction from './Actions/UserAction';

export class TestRedux extends Component {
  componentDidMount() {
    if (this.props.user.users.length === 0) this.props.UserAction();
  }

  render() {
    return <div>User Works!</div>;
  }
}

function mapStateToProps(state) {
  return {user: state.user};
}

function mapDispatchToProps(dispatch) {
  return {
    UserAction: () => dispatch(UserAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);
