import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" />
    </Switch>
  );
};

export default Router;
