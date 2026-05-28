import { FaShieldAlt, FaHeadset, FaMapMarkedAlt, FaPlane } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero text-center d-flex align-items-center justify-content-center">
        <div>
          <h1 className="fw-bold">About TravelPro</h1>
          <p className="text-light">
            Your premium travel companion for unforgettable journeys
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container py-5">

        <div className="row align-items-center g-5">

          {/* IMAGE */}
          <div className="col-md-6">
            <div className="about-img-wrapper shadow">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="travel world"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="col-md-6">

            <h3 className="fw-bold mb-3">
              We make travel simple, smart & premium
            </h3>

            <p className="text-muted">
              TravelPro is a modern travel booking platform designed to help
              users explore the world effortlessly. From luxury stays to
              affordable trips, we bring everything together in one place.
            </p>

            <p className="text-muted">
              Our mission is to deliver a smooth booking experience with
              trusted destinations, transparent pricing, and a clean UI.
            </p>

            {/* FEATURES */}
            <ul className="about-list mt-4">
              <li>✔ Curated global destinations</li>
              <li>✔ Best price guarantee</li>
              <li>✔ Secure booking system</li>
              <li>✔ 24/7 customer support</li>
            </ul>

          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="text-center mt-5">
          <h2 className="fw-bold mb-4">Why Choose Us</h2>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="about-card p-4 shadow-sm">
                <FaShieldAlt className="mb-3 fs-2 text-primary" />
                <h6>Safe & Secure</h6>
                <p className="text-muted small">
                  Your data and bookings are fully protected
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card p-4 shadow-sm">
                <FaHeadset className="mb-3 fs-2 text-primary" />
                <h6>24/7 Support</h6>
                <p className="text-muted small">
                  We are always here to help you anytime
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card p-4 shadow-sm">
                <FaMapMarkedAlt className="mb-3 fs-2 text-primary" />
                <h6>Global Destinations</h6>
                <p className="text-muted small">
                  Explore hundreds of destinations worldwide
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card p-4 shadow-sm">
                <FaPlane className="mb-3 fs-2 text-primary" />
                <h6>Fast Booking</h6>
                <p className="text-muted small">
                  Book your trip in minutes with ease
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* STATS SECTION */}
        <div className="row text-center mt-5 g-4">

          <div className="col-md-3">
            <div className="about-card p-4 shadow-sm">
              <h2 className="fw-bold text-primary">120+</h2>
              <p>Countries</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="about-card p-4 shadow-sm">
              <h2 className="fw-bold text-primary">5K+</h2>
              <p>Happy Travelers</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="about-card p-4 shadow-sm">
              <h2 className="fw-bold text-primary">10+</h2>
              <p>Years Experience</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="about-card p-4 shadow-sm">
              <h2 className="fw-bold text-primary">24/7</h2>
              <p>Support</p>
            </div>
          </div>

        </div>

        {/* TEAM SECTION */}
        <div className="text-center mt-5">
          <h2 className="fw-bold mb-4">Meet Our Team</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="about-card p-4 shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="rounded-circle mb-3"
                  width="100"
                  alt="team"
                />
                <h6>John Carter</h6>
                <p className="text-muted small">CEO & Founder</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card p-4 shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="rounded-circle mb-3"
                  width="100"
                  alt="team"
                />
                <h6>Sarah Smith</h6>
                <p className="text-muted small">Travel Expert</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card p-4 shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/men/55.jpg"
                  className="rounded-circle mb-3"
                  width="100"
                  alt="team"
                />
                <h6>Michael Lee</h6>
                <p className="text-muted small">Support Manager</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}