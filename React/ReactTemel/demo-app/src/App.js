import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"
import Contact from "./components/Contact"


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route  path="/about"><About /> </Route>
        <Route path="/users"><Users/> </Route>
        <Route path="/contact"><Contact/></Route>
     
     
      </Switch>
    </div>
  </Router>
  );
 
}

export default App;
