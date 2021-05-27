import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard"
import AddExpense from "./AddExpense"

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/addexpense">
            <AddExpense />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/logout">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
