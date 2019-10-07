import React from "react";
import { Switch, Route } from "react-router-dom";
import CreatePost from './components/Admin/CreatePost'
import Greetings from './components/Home/Greetings'
import Adoption from './components/Adoption/Adoption'
import Donation from './components/Donation/Donation'
import About from './components/About/About'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Greetings} />
      <Route exact path="/create" component={CreatePost} />
      <Route exact path="/adoption" component={Adoption} />
      <Route exact path="/donation" component={Donation} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
};

export default Router;
