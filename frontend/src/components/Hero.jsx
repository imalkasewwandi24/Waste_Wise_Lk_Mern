import React from "react";
import Button from "./Button";
import "../App.css";
import HeroImage from "../assets/Hero.png";
import "../index.css";

function Hero() {
  return (
    <section className="hero-section text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          
          
          <div className="col-md-6">
           <h1 className="fw-bold mt-5 mb-3 lh-base">Real-Time Waste<br />Collection Tracking for a <br />Cleaner Sri Lanka</h1>
            <p className="mt-4 mb-5 ">
              Track trucks, view schedules, and stay informed — all in one place
            </p>

            
            <div className="d-flex gap-3 flex-wrap mt-4">
              <Button text="Track Trucks Live" />
              <Button text="Learn More" />
            </div>
          </div>

          
          <div className="col-md-6 text-center mt-5">
            <img
              src={HeroImage} 
              alt="Waste Truck"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
