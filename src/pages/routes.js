import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Receipt from "./Receipt";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/receipt" component={Receipt} />
    </Switch>
  </BrowserRouter>
);

export default Routes;