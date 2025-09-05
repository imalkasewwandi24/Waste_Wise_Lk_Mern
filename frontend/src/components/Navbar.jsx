import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
      <div className="container d-flex justify-content-between align-items-center">

        <Link className="navbar-brand" to="/">
          WasteWise<br /><span className="logo-subline">LK</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/services#truck-tracking">Truck Tracking</Link></li>
                <li><Link className="dropdown-item" to="/services#schedules"> Collection Schedules</Link></li>
                <li><Link className="dropdown-item" to="/services#recycling">Recycling Programs</Link></li>
                <li><Link className="dropdown-item" to="/services#community">Community Awareness</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <Link className="btn btn-success px-3 d-none d-lg-block" to="/signin">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
