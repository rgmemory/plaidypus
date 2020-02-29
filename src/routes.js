import React from "react";
import { Switch, Route } from "react-router-dom";

import Result from "./components/Result/Result";
import Search from "./components/Search/Search";

export default (
  <Switch>
    <Route exact path="/" component={Search} />
    <Route exact path="/result/:id" component={Result} />
  </Switch>
);
