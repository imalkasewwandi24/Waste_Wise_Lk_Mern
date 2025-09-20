import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api";
import "../App.css";
import SmallButton from "../components/SmallButton";
import Image from "../assets/SignUpImage.png";

function SignUp() {
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        address: "",
        password: "",
        confirmPassword: "",
        role: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/auth/register`, formData);
            alert(res.data.message); // success notification
            navigate("/signin");
        } catch (error) {
            alert(error.response?.data?.message || "Registration failed");
        }
    };


    return (
        <div className="signup-page">
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <div className="card shadow" style={{ borderRadius: "20px", width: "800px", height: "650px", overflow: "hidden", border: "none" }}>
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

                                <form className="d-flex flex-column gap-4 align-items-center" onSubmit={handleSubmit}>
                                    <input type="text" name="fullName" placeholder="Full Name" className="form-control" onChange={handleChange} />
                                    <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} />
                                    <input type="tel" name="contactNumber" placeholder="Contact Number" className="form-control" onChange={handleChange} />
                                    <input type="text" name="address" placeholder="Address" className="form-control" onChange={handleChange} />
                                    <input type="password" name="password" placeholder="Password" className="form-control" onChange={handleChange} />
                                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control" onChange={handleChange} />

                                    {/* Role Dropdown */}
                                    <select
                                        name="role"
                                        className="form-control"
                                        value={formData.role}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Role</option>
                                        <option value="user">User</option>
                                        <option value="driver">Driver</option>
                                    </select>

                                    <div className="text-center mt-3">
                                        <SmallButton text="Sign Up" />
                                    </div>
                                </form>


                                <p className="mt-4 text-center text-white">
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
