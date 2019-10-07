import React from "react";
import "../../fonts/LovelexieHandwritten.ttf";
import "./Greetings.scss";
import Doggo from '../../images/adog.jpg'

const Greetings = () => {
  return (
    <React.Fragment>
      <div id="carusel">
        <img src={Doggo} alt="doggo" />
      </div>
      <div style={{ fontFamily:"LoveLexi"}}>Hello~</div>
      {/* <div>
        <span id='lcard'></span>
        <span id="rcard"></span>
      </div> */}
    </React.Fragment>
  );
};

export default Greetings;
