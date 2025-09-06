import React from "react";
import "../App.css"; // make sure to add styles here

const WhatWeDo = () => {
  return (
    <div className="what-we-do-section text-center">
      <div className="container">
        <h2 className="fw-bold mb-5">What We Do</h2>

        {/* Line with dots */}
        <div className="row">
          <div className="d-flex justify-content-between align-items-center mb-4 w-100">
            <div className="dot"></div>
            <div className="dot-line"></div>
            <div className="dot"></div>
            <div className="dot-line"></div>
            <div className="dot"></div>
            <div className="dot-line"></div>
            <div className="dot"></div>
          </div>
        </div>

        {/* Labels under dots */}
        <div className="row">
          <div className="d-flex justify-content-between align-items-center mb-5 w-100">
            <p>Live Waste <br /> Truck Tracking</p>
            <p>Efficient <br /> Waste Collection Scheduling</p>
            <p>Community <br /> Awareness Programs</p>
            <p>Data & Analytics <br /> for Better Planning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
