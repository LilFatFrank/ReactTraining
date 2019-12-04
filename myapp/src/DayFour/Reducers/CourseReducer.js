const initialState = [];

export default function CourseReducer(state = initialState, action) {
  let { type, course } = action;
  switch (type) {
    case "ADD_COURSE":
      return [...state, Object.assign({}, course)];

    default:
      return state;
  }
}
