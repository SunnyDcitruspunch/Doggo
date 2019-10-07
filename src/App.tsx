import * as React from "react";
import "./App.css";
import  Nav from "./components/Home/Nav";
import Router from "./Router";
import Footer from './components/Home/Footer'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
