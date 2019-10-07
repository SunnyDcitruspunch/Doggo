import React, { useState } from "react";
import { Link } from "react-router-dom";

//TODO:collapse navbar

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-info bg-light">
        <Link to="/">
          <a className="navbar-brand" href="#">
            Guava's Doggo Playground
          </a>
        </Link>
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

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-link">
              <Link to="/adoption">
                {/* <a className="nav-link" style={{ color: "white", textDecoration:"none" }}> */}
                <span>Adoption</span>
                {/* </a> */}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donation">
                <a className="nav-link" href="#">
                  Donation
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create">
                <a className="nav-link" href="#">
                  Create New Post
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link" href="#">
                  About
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
