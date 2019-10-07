import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../fonts/Pecita.otf";
import "./Nav.scss";

//TODO:collapse navbar

const Nav = () => {
  return (
    <React.Fragment>
      <nav
        id="nav"
        style={{ display: "block", textAlign: "center", verticalAlign: "top" }}
      >
        <div
          style={{
            fontFamily: "LoveLexi",
            verticalAlign: "middle"
          }}
        >
          <h3
            style={{
              textDecoration: "none",
              textAlign: "center",
              fontSize: "40px",
              color: "#F7882f",
              paddingTop: "1vw"
            }}
          >
            Guava's Animal Playground
          </h3>
        </div>
        <div id="menu">
          <Link to="/adoption" style={{ textDecoration: 'none', color:"#f7882f" }}>
            <h4>Find my new best friend</h4>
          </Link>
          <Link to="/donation" style={{ textDecoration: 'none', color:"#f7882f" }}>
            <h4>Donation</h4>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color:"#f7882f" }}>
            <h4>About Us</h4>
          </Link>
          <h4>Contact</h4>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
