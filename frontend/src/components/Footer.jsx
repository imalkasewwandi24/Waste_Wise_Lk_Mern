import React from "react";
import "../App.css";
import "../index.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer text-white py-5">
      <div className="container">
        <div className="row  justify-content-between">
            <div className="col-md-3 text-center">
                <div className="row mb-3">
                    <div className="col-md-3">
                        <a className="footer-brand" href="#">WasteWise<br /><span className="footer-subline">LK</span></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <FaMapMarkerAlt />
                    </div>
                    <div className="col-md-6">
                        <p>Colombo, Sri Lanka</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <FaPhoneAlt />
                    </div>
                    <div className="col-md-6">
                        <p>+94 77 123 4567</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        <FaEnvelope />
                    </div>
                    <div className="col-md-6">
                        <p>info@wastewiselk.lk</p>
                    </div>
                </div>
                
            </div>
            <div className="col-md-3 text-center">
                <h6 className="footer-links mb-3 text-center">Quick Links</h6>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="#">Home</a></li>
                    <li className="mb-2"><a href="#">About Us</a></li>
                    <li className="mb-2"><a href="#">News & Tips</a></li>
                    <li className="mb-2"><a href="#">Services</a></li>
                    <li className="mb-2"><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="col-md-3 text-center">
                <h6 className="footer-links mb-3 text-center">Our Services</h6>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="#">Real-Time Truck Tracking</a></li>
                    <li className="mb-2"><a href="#">Collection Scheduling</a></li>
                    <li className="mb-2"><a href="#">Recycling Programs</a></li>
                </ul>
            </div>
            <div className="col-md-3 text-center">
                <h6 className="footer-links mb-3 text-center">Contact Us</h6>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="#">Contact Form</a></li>
                    <li className="mb-2"><a href="#">FAQs</a></li>
                    <li className="mb-2"><a href="#">Support</a></li>
                </ul>
                <div className="social-icons mt-4 d-flex gap-4 justify-content-center">
                    {/* Add social media links here */}
                    <a href="#" className="text-white fs-5"><FaFacebook /></a>
                    <a href="#" className="text-white fs-5"><FaTwitter /></a>
                    <a href="#" className="text-white fs-5"><FaInstagram /></a>
                    <a href="#" className="text-white fs-5"><FaLinkedin /></a>
                </div>
            </div>

        </div>
        
        
      </div>
    </footer>
  );
}

export default Footer;