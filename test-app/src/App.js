import React from "react";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router";
import CustomerCatalogue, { CustomerDetails } from "./CustomerCatalogue";
import CustomerRegistration from "./CustomerRegistration";

function App() {
  return (
    <div>
      <div>This is the Title Bar</div>
      <BrowserRouter>
        <Route path="/" component={Navbar}></Route>
        <Route
          path="/customerCatalogue"
          component={CustomerCatalogue}
          exact
        ></Route>
        <Route
          path="/customerCatalogue/:id"
          component={CustomerDetails}
        ></Route>
        <Route
          path="/customerRegistration"
          component={CustomerRegistration}
        ></Route>
      </BrowserRouter>
    </div>
  );
}

let Navbar = () => (
  <nav className="navbar navbar-expand navbar-light bg-light">
    <ul className="nav navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link" to="/customerCatalogue">
          customerCatalogue
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/customerRegistration">
          customerRegistration
        </Link>
      </li>
    </ul>
  </nav>
);

export default App;
