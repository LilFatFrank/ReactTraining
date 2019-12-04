import React from "react";
/* import logo from './logo.svg'; */
import "./App.css";
import HocDemo from "./DayTwo/HocDemo";
/* import ConditonRender from "./DayTwo/ConditonRender"; */
/* import Child from './Child'; */
/* import Header from './DayOne/Header';
import Main from './DayOne/Main';
import Footer from './DayOne/Footer'; */
/* import Counter from "./DayTwo/Counter";
import Student from "./DayTwo/Student";
import Toggle from "./DayTwo/Toggle"; */
/* import ListDemo from "./DayTwo/ListDemo"; */
// import HocDemo from './DayTwo/HocDemo';
// import Axiosdemo, { DisplayUser } from "./DayThree/Axiosdemo";
// import CForm from "./DayThree/CForm";
// import UForm from "./DayThree/UForm";
/* import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router";
import ToDo from "./DayFour/ToDo";
import MyCoursePage from "./DayFour/CoursePage";
import UserPage from "./DayFive/TestRedux"; */

function App() {
  // let stuDetails = { name: "Karan", id: 1 };

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* react training
        <Child></Child> */}
      {/* <Header message={"this is the header component"}></Header>
        <Main></Main>
        <Footer></Footer> */}
      {/* <Counter></Counter>
        <Student stuDetails={stuDetails} markStep={5}></Student> */}
      {/* <Toggle isToggle={true} label={''}></Toggle> */}
      {/* <ListDemo></ListDemo> */}
      {<HocDemo></HocDemo>}
      {/* <ConditonRender></ConditonRender> */}
      {/* <Axiosdemo></Axiosdemo> */}
      {/* <CForm></CForm> */}
      {/* <UForm></UForm> */}
      {/* <div className="display-5 text-center">Routing</div>
      <BrowserRouter>
        <Route path="/" component={NavBar}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/contact/:city" component={City}></Route>
        <Route path="/users" component={Axiosdemo} exact></Route>
        <Route path="/users/:id" component={DisplayUser}></Route>
        <Route path="/todo" component={ToDo}></Route>
        <Route path='/todoRedux' component={MyCoursePage}></Route>
        <Route path='/testRedux' component={UserPage}></Route>
      </BrowserRouter> */}
      {/* </header> */}
    </div>
  );
}

/* let NavBar = () => (
  <nav className="navbar navbar-expand navbar-light bg-light">
    <ul className="nav navbar-nav">
      <li>
        <Link to="/home" className="nav-item nav-link active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-item nav-link active">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-item nav-link active">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/users" className="nav-tem nav-link active">
          Users
        </Link>
      </li>
      <li>
        <Link to="/todo" className="nav-tem nav-link active">
          ToDo
        </Link>
      </li>
      <li>
        <Link to="/todoRedux" className="nav-tem nav-link active">
          ToDo Redux
        </Link>
      </li>
      <li>
        <Link to='/testRedux' className='nav-tem nav-link active'>
          Test Redux
        </Link>
      </li>
    </ul>
  </nav>
);
let Home = () => <h1>Home Component Works!</h1>;
let About = () => <h1>About Component Works!</h1>;
let Contact = () => (
  <h1>
    Contact Component Works!
    <Link to="/contact/pune">Pune</Link>
    <Link to="/contact/mumbai">Mumbai</Link>
    <Link to="/contact/delhi">Delhi</Link>
  </h1>
);
let City = props => <h1>You have selected {props.match.params.city}</h1>; */

export default App;
