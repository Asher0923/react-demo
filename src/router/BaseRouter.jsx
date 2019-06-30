import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Page1 from "../views/page1/index";
import Page2 from "../views/page2/index";

class BaseRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dabaBase" component={Page1} />
        <Route exact path="/dataTable/Hive" component={Page2} />
        <Route exact path="/dataTable/Kafka" component={Page1} />
        <Route exact path="/dataTable/Rdb" component={Page2} />
        <Redirect to="/dabaBase" />
      </Switch>
    );
  }
}

export default BaseRouter;
