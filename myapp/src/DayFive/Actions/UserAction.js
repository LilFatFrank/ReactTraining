export default function UserAction() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => dispatch({ type: "FETCH_USERS", json }));
  };
}
