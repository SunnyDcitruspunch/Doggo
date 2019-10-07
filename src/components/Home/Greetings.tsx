import React from "react";
import "../../fonts/LovelexieHandwritten.ttf";
import "./Greetings.scss";

const Greetings = () => {
  return (
    <React.Fragment>
      <div id="doggoimg" />
      <div id="desc" style={{ fontFamily: "LoveLexi" }}>
        <div className="card">
          <h3>
            <b>Adopt a Dog</b>
          </h3>
        </div>
        <div className="card">
          <h3>Adopt a Cat</h3>
        </div>
        <div className="card">
          <h3>I Love Both :)</h3>
        </div>
      </div>
      <div id="doggoimg" />
    </React.Fragment>
  );
};

export default Greetings;
