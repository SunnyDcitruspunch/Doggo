import React from "react";
import { Switch, Route } from "react-router-dom";
import CreatePost from './components/admin/CreatePost'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/create" component={CreatePost} />
    </Switch>
  );
};

export default Router;
