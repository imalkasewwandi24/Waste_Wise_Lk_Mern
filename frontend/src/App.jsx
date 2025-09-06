import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Service";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";





function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-0"> {/* padding so navbar won't overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
