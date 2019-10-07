import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../fonts/Pecita.otf";
import "./Nav.scss";

//TODO:collapse navbar

const Nav = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg"
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
              color: "#F7882f"
            }}
          >
            Guava's Animal Playground
          </h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-link">
              <Link to="/adoption">
                <span style={{ fontFamily: "Pecita" }}>Adoption</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/donation">
                {" "}
                <span style={{ fontFamily: "Pecita" }}>Donation </span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/create">
                <span style={{ fontFamily: "Pecita" }}>Create New Post </span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about">
                <span style={{ fontFamily: "Pecita" }}>About </span>
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </React.Fragment>
  );
};

export default Nav;
