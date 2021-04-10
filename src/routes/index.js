import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import "../index.scss";

document.title = "react app";

const Routes = () => (
  <Switch>
    <Route path="/" exact strict component={Home} />
  </Switch>
);

export default Routes;
