import React, { useState } from "react";

const Profile = () => {
  return (
    <div className="card mb-3" style={{ width: "10%", margin: "20px 25px" }}>
      <h3 className="card-header">Card header</h3>
      <div className="card-body">
        {/* doggo's photo */}
      </div>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
};

export default Profile;
