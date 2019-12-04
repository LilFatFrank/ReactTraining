import React, { Component } from "react";
import CourseAction from "./Actions/CourseAction";
import { connect } from "react-redux";

export class CoursePage extends Component {
  constructor() {
    super();
    this.course = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.course.current.value !== "" &&
      !this.props.courses.some(x => x.title === this.course.current.value)
    ) {
      this.props.addCourse(this.course.current.value);
      this.course.current.value = "";
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="course"
              ref={this.course}
              placeholder="course"
            ></input>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </div>
        </form>
        <ul>
          {this.props.courses ? this.props.courses.map((course, id) => (
            <li key={id}>{course.title}</li>
          )) : null}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
  return {
    addCourse: title => dispatch(CourseAction({ title: title }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
