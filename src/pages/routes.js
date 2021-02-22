import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  </BrowserRouter>
);

export default Routes;