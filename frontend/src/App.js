import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard"
import AddExpense from "./AddExpense"
import BarYear from "./charts/BarYear";
import PieCategory from "./charts/PieCategory";
import LineYear from "./charts/LineYear";

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
          <Route exact path="/BarYear">
            <BarYear />
          </Route>
          <Route exact path="/PieCategory">
            <PieCategory />
          </Route>
          <Route exact path="/LineYear">
            <LineYear />
          </Route>
          <Route path="/logout">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
