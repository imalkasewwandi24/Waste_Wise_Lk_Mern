import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function Service() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <div className="services-page how-it-works py-5">

      <section className="container my-0">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h2 className="text-light mb-3">Services</h2>
            <h6 className="text-light">
              WasteWise LK offers a range of services to streamline waste management for <br />
              municipalities and communities, ensuring efficient and sustainable waste <br />
              collection.
            </h6>
          </div>
        </div>
      </section>

      {/* Section 1: Truck Tracking */}
      <section id="truck-tracking" className="container my-5">
        <h2>Truck Tracking</h2>
        <p>
          Learn how we track waste trucks in real-time to ensure timely collection and efficient route management.
        </p>
      </section>

      {/* Section 2: Schedules */}
      <section id="schedules" className="container my-5">
        <h2>Schedules</h2>
        <p>
          View our collection schedules to stay informed about when and where waste pickups occur in your area.
        </p>
      </section>

      {/* Section 3: Recycling */}
      <section id="recycling" className="container my-5">
        <h2>Recycling</h2>
        <p>
          Discover how we process and recycle waste materials, contributing to a cleaner environment.
        </p>
      </section>

      <section id="community" className="container my-5">
        <h2>Community Awareness</h2>
        <p>
          Discover how we process and recycle waste materials, contributing to a cleaner environment.
        </p>
      </section>

    </div>
  );
}

export default Service;
