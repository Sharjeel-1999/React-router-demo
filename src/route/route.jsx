import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  
} from "react-router-dom";
import Users from "../comp/users";
import Home from "../comp/home";
import About from "../comp/about";

export default function RouterCom() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
    </Router>
  );
}