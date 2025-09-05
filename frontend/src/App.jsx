import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Footer from "./components/Footer";




function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-0"> {/* padding so navbar won't overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
