import React from "react";
import "../../fonts/LovelexieHandwritten.ttf";
import "./Greetings.scss";
import Doggo from "../../images/adog.jpg";

const Greetings = () => {
  return (
    <React.Fragment>
      <div id="doggoimg">
        <img src={Doggo} alt="doggo" />
      </div>
      <div
        id="desc"
        style={{ fontFamily: "LoveLexi" }}
      >
        <div className="card">
          <h4>
            <b>Who we are</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
        <div className="card">
          <h4>
            <b>Where we are</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
        <div className="card">
          <h4>
            <b>Where we are</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
        <div className="card">
          <h4>
            <b>Where we are</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Greetings;
