import * as React from "react";
import "./App.css";
import Index from "../src/components/Index";
import Router from "./Router";

const App = () => {
  return (
    <div className="App">
      <Index />
      <Router />
    </div>
  );
};

export default App;
