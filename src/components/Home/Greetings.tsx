import React from "react";
import { Link } from "react-router-dom";

const Greetings = () => {
  return (
    <div className="jumbotron" style={{ width: "80%", margin: "50px auto" }}>
      <h1 className="display-3">Welcome :)</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classNamees for typography and spacing to space content
        out within the larger container.
      </p>
      <p className="lead">
        <Link to="/adoption">Find my new best friend</Link>
      </p>
    </div>
  );
};

export default Greetings;
