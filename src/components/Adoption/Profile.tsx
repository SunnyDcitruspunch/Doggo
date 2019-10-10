import React, { useState } from "react";
import "./Profile.scss";
import Dog from '../../images/dogcard.jpg'

const Profile = () => {
  return (
    <div
      className="card"
      style={{ width: "30%", height: "60%", margin: "20px 25px" }}
    >
      <div>
        <img src={Dog} alt="dog" />
      </div>
      <div className="intro">
        <h5>Name: Honey</h5>
        <h5>Gender: Male</h5>
        <h5>Age: 10</h5>
        <h5>Location: Taipei</h5>
      </div>
    </div>
  );
};

export default Profile;
