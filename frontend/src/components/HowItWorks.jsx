import React from "react";
import "../App.css";
import "../index.css";
import Schedule from "../assets/Schedule.png";
import Track from "../assets/Track.png";
import Dispose from "../assets/Dispose.png";

function HowItWorks() {
  return (
    <section className="how-it-works text-white bg-dark py-0">
        <div className="container">
            
            <div className="row mb-5">
                <h1 className="fw-bold">How It Works</h1>
            </div>

            
             <div className="row g-4">
          
          <div className="col-md-4">
            <div className="howitworks-card card  text-center h-100 p-4 border-0">
              <img src={Schedule} alt="Schedule" className="mx-auto mb-0" style={{ width: "150px" }} />
              <h2 className="h3 fw-bold text-light">Check Schedule</h2>
              <p className="mb-0 text-light">View waste collection times in your area.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="howitworks-card card text-center h-100 p-4 border-0">
              <img src={Track} alt="Track" className="mx-auto mb-0" style={{ width: "150px" }} />
              <h2 className="h3 fw-bold text-light">Track Trucks</h2>
              <p className="mb-0 text-light">See real-time location of trucks on the map.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="howitworks-card card  text-center h-100 p-4 border-0">
              <img src={Dispose} alt="Dispose" className="mx-auto mb-0" style={{ width: "150px" }} />
              <h2 className="h3 fw-bold text-light">Dispose Smart</h2>
              <p className="mb-0 text-light">Prepare waste before truck arrival.</p>
            </div>
          </div>

        </div>
        </div>

    </section>
  );
}

export default HowItWorks;
