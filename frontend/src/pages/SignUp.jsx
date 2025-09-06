import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import SmallButton from "../components/SmallButton";
import Image from "../assets/SignUpImage.png";

function SignUp() {
    return (
        <div className="signup-page">
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
                <div className="card shadow" style={{ borderRadius: "20px", width: "800px", height: "600px", overflow: "hidden",border: "none" }}>
                    <div className="row g-0 h-100">
                        {/* Left Section */}
                        <div className="col-6 position-relative">
                            <img
                                src={Image}
                                alt="Waste Management"
                                className="img-fluid h-100 w-100"
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        {/* Right Section */}
                        <div className="col-6 d-flex align-items-center justify-content-center right-section">
                            <div className="p-4 w-100">
                                <h3 className="mb-3 text-center text-white">Welcome User!</h3>
                                <div className="center-line mb-4 mx-auto" ></div>

                                <form className="d-flex flex-column gap-4 align-items-center">
                                    <input type="text" placeholder="Full Name" className="form-control" />
                                    <input type="email" placeholder="Email" className="form-control" />
                                    <input type="tel" placeholder="Contact Number" className="form-control" />
                                    <input type="text" placeholder="Address" className="form-control" />
                                    <input type="password" placeholder="Password" className="form-control" />
                                    <input type="password" placeholder="Confirm Password" className="form-control" />

                                    <div className="text-center mt-3">
                                        <SmallButton text="Sign Up" />
                                    </div>
                                </form>

                                <p className="mt-4 text-center text-white ">
                                    Already have an account? <Link to="/signin">Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;