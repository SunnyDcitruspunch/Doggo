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
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#f7882f" }}
          >
            About Us
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "#f7882f" }}>
            Contact
          </Link>
          <Link id="brand" to="/">
            Guava's Animal Shelter
          </Link>
          <Link
            to="/adoption"
            style={{ textDecoration: "none", color: "#f7882f" }}
          >
            Find my new best friend
          </Link>
          <Link
            to="/donation"
            style={{ textDecoration: "none", color: "#f7882f" }}
          >
            Donation
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
