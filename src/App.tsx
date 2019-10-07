import * as React from "react";
import "./App.css";
import  Nav from "./components/Home/Nav";
import Router from "./Router";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
};

export default App;
