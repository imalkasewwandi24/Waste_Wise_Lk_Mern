import React from "react";
import "../App.css";
import "../index.css";
import Button from "./Button";
import LiveMapImage from "../assets/LiveMap.png";

function LiveMap() {
  return (
    <section className="how-it-works text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          
          
          <div className="col-lg-5 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="fw-bold mb-5">Live Map Preview</h1>   
            <h3 className="mb-5">
              Monitor the real-time location of collection trucks with our live
              tracking system
            </h3>
            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start mt-4">
              <Button text="Track Trucks Live" />
            </div>
          </div>

          
          <div className="col-lg-7 col-md-12 text-center">
            <img
              src={LiveMapImage}
              alt="Live Map"
              className="img-fluid w-100 h-auto rounded shadow"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default LiveMap;
