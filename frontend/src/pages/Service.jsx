import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import Service1 from "../assets/Service1.png";
import Service2 from "../assets/Service2.png";
import Service3 from "../assets/Service3.png";
import Service4 from "../assets/Service4.png";

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
            <h1 className="text-light mb-3">Services</h1>
            <h4 className="text-light">
              WasteWise LK offers a range of services to streamline waste management for <br />
              municipalities and communities, ensuring efficient and sustainable waste <br />
              collection.
            </h4>
          </div>
        </div>
      </section>

      <section id="truck-tracking" className="container section-gap">
        <div className="row justify-content-center align-items-center text-light">
          <div className="col-md-6 mb-4">
            <div className="card-service text-light p-3 d-flex">
              <div className="d-flex flex-column justify-content-center w-100 h-100">
                <div className="d-flex align-items-center h-100">
                  <img
                    src={Service1}
                    alt="Truck Tracking"
                    className="img-fluid"
                    style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="ms-4">
                    <h2>Real-Time Truck <br /> Tracking</h2>
                    <p className="mt-4">
                     Track the real time location of waste <br />collection trucks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 d-flex align-items-center">
            <p style={{ lineHeight: "2" , textAlign: "center"}}>
             Our Real-Time Truck Tracking service uses GPS technology <br />to let you see exactly where waste collection trucks are at any given moment. This ensures you stay updated on collection times, reduces uncertainty, and helps make waste management more reliable and efficient for your community.
            </p>
          </div>
        </div>
      </section>

    
      <section id="schedules" className="container section-gap">
        <div className="row justify-content-center align-items-center text-light">
            <div className="col-md-6 mb-4 d-flex align-items-center">
            <p style={{ lineHeight: "2" , textAlign: "center"}}>
             Our Collection Scheduling service makes it easy to know when waste <br /> will be collected in your area. You can quickly view upcoming schedules, receive timely updates, and plan ahead without worry. <br />This helps keep your surroundings clean and ensures that waste disposal is convenient and hassle-free for everyone in the community.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card-service text-light p-3 d-flex">
              <div className="d-flex flex-column justify-content-center w-100 h-100">
                <div className="d-flex align-items-center h-100">
                  <img
                    src={Service2}
                    alt="Truck Tracking"
                    className="img-fluid"
                    style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="ms-4">
                    <h2>Collection <br /> Scheduling</h2>
                    <p className="mt-4">
                     View and manage waste collection <br />schedules for different areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="recycling" className="container section-gap">
        <div className="row justify-content-center align-items-center text-light">
          <div className="col-md-6 mb-4">
            <div className="card-service text-light p-3 d-flex">
              <div className="d-flex flex-column justify-content-center w-100 h-100">
                <div className="d-flex align-items-center h-100">
                  <img
                    src={Service3}
                    alt="Truck Tracking"
                    className="img-fluid"
                    style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="ms-4">
                    <h2>Recycling Programs</h2>
                    <p className="mt-4">
                    Learn about and participate in <br /> our recycling initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 d-flex align-items-center">
            <p style={{ lineHeight: "2" , textAlign: "center"}}>
            Our Recycling Programs give you the chance to actively take part in building a greener future. Through simple guidance and community-driven initiatives, you can learn how to separate recyclables, reduce waste at home, and contribute to a cleaner environment. Together, we can turn everyday actions into lasting change for sustainability.
            </p>
          </div>
        </div>
      </section>

      <section id="community" className="container section-gap">
        <div className="row justify-content-center align-items-center text-light">
            <div className="col-md-6 mb-4 d-flex align-items-center">
            <p style={{ lineHeight: "2" , textAlign: "center"}}>
             Our Community Awareness programs provide easy access to resources, tips, and campaigns that inspire people to reduce waste and adopt eco-friendly habits. By spreading knowledge and encouraging participation, we empower communities to work together in creating cleaner, healthier, and more sustainable environments.
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card-service text-light p-3 d-flex">
              <div className="d-flex flex-column justify-content-center w-100 h-100">
                <div className="d-flex align-items-center h-100">
                  <img
                    src={Service4}
                    alt="Truck Tracking"
                    className="img-fluid"
                    style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                  />
                  <div className="ms-4">
                    <h2>Community <br /> Awareness</h2>
                    <p className="mt-4">
                     Access resources and <br />campaingns to promote waste reduction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Service;
