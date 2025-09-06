import React from "react";
import "../App.css";
import missionImg from "../assets/mission.png";
import visionImg from "../assets/vision.png";
import WhatWeDo from "../components/WhatWeDo";

const AboutPage = () => {
  return (
    <div className="about-page py-5">
      {/* About Us Section */}
      <section id="about" className="container text-center mb-5">
        <h1 className="fw-bold mb-4">About Us</h1>
        <p className="lead fw-bold">
          <strong>WasteWise LK</strong> is a smart waste management platform
          dedicated to creating a cleaner, greener Sri Lanka.
        </p>
        <p className="mt-3">
          We combine technology, community engagement, and eco-friendly
          practices to make waste collection efficient, transparent,
          and sustainable.
        </p>
      </section>

      {/* Mission Section */}
      <section className="container mb-4">
        <div className="row align-items-center border p-4 rounded about-card">
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">Our Mission</h2>
            <p>
              To revolutionize waste management through real-time tracking, <br />
              data-driven insights, and public participation — making every 
              citizen a part of the solution.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src={missionImg}
              alt="Mission"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mb-5 ">
        <div className="row align-items-center border p-4 rounded about-card">
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <img
              src={visionImg}
              alt="Vision"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-8 ps-5">
            <h2 className="fw-bold mb-3">Our Vision</h2>
            <p>
              A future where zero waste and 100% recycling become the norm,
              and clean cities are a shared <br /> reality for all.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="container mb-5 text-center">
      
        <WhatWeDo />
      </section>
    </div>
  );
};

export default AboutPage;
