import React from "react";
import "../App.css";
import "../index.css";
import News1 from "../assets/News1.png"
import News2 from "../assets/News2.png"
import News3 from "../assets/News3.png"


function NewsTips() {
  return (
    <section className="how-it-works text-white bg-dark py-5">
        <div className="container">
            <div className="row mb-3">
                <h1 className="fw-bold mt-2 mb-5">News and Tips</h1>
            </div>

            <div className="row">
                <div className="col-md-4 text-center">
                    <img src={News1} alt="" />
                    <h4 className="mt-5">How to Reduce Plastic Waste</h4>
                </div>
                <div className="col-md-4 text-center">
                    <img src={News2} alt="" />
                    <h4 className="mt-5">New Recycling Centers in Colombo</h4>
                </div>
                <div className="col-md-4 text-center">
                    <img src={News3} alt="" />
                    <h4 className="mt-5">Why Timely Waste Disposal Matters</h4>
                </div>

            </div>
            
            
        </div>

    </section>
  );
}

export default NewsTips;
