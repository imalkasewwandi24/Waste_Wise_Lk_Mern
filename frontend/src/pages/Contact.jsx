import React, { useState } from "react";
import "../App.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SmallButton from "../components/SmallButton";
import axios from "axios";
import { API_URL } from "../api";



const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/contact`, formData);
      alert(res.data.message);
      setFormData({ name: "", email: "", message: "" }); // clear form after success
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="contact-page py-5">
      {/* Hero Section */}
      <section id="about" className="container text-center mb-5">
        <h1 className="fw-bold mb-4">Contact Us</h1>
      </section>


      <section className="container mb-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <h2>Send your thoughts</h2>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />

              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />

              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5"></textarea>

              <div className="text-center mt-3">
                <SmallButton text={loading ? "Sending..." : "Send Message"} />
              </div>
            </form>
          </div>

          {/* Right Column */}

          <div className="col-md-6  right-column">
            <h2>Contact Info</h2>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span> info@wastewiselk.lk</span>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <span> +94 123 456 789</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span> 123 Main Street, Colombo</span>
            </div>
            <div className="info-item">
              <FaClock className="icon" />
              <span> Mon-Fri 9am - 5pm</span>
            </div>
          </div>
        </div>
      </section>



      {/* Map Section */}
      <section className="contact-map container mb-5" >

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456!2d79.861243!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25aef!2sColombo!5e0!3m2!1sen!2slk!4v1693930023456!5m2!1sen!2slk"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
