import { useNavigate } from "react-router-dom";
import { FaPlane, FaHotel, FaCar, FaMapMarkedAlt, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function Services() {
  const navigate = useNavigate();

  // 💰 PRICES
  const prices = {
    flight: 150,
    hotel: 100,
    car: 80,
  };

  const total = prices.flight + prices.hotel + prices.car;

  // ✈️ SINGLE BOOKINGS
  const handleBookFlight = () => {
    navigate("/booking/Flight", {
      state: { name: "Flight Booking", price: prices.flight },
    });
  };

  const handleBookHotel = () => {
    navigate("/booking/Hotel", {
      state: { name: "Hotel Booking", price: prices.hotel },
    });
  };

  const handleBookCar = () => {
    navigate("/booking/Car", {
      state: { name: "Car Rental", price: prices.car },
    });
  };

  // 🌍 FULL PACKAGE BOOKING (FIX FIX FIX)
  const handleBookNow = () => {
    navigate("/booking/Full Package", {
      state: {
        name: "Full Travel Package",
        flight: prices.flight,
        hotel: prices.hotel,
        car: prices.car,
        price: total,
      },
    });
  };

  const handleExplore = () => {
    document
      .getElementById("services-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="services-ultra">

      {/* HERO */}
      <div className="ultra-hero d-flex align-items-center justify-content-center text-center">
        <div className="hero-content">
          <h1 className="fw-bold">Premium Travel Services</h1>
          <p>Designed for travelers who expect more than just a trip</p>

          <button
            className="btn btn-light mt-3 px-4 py-2"
            onClick={handleExplore}
          >
            Explore Now
          </button>
        </div>
      </div>

      <div className="container py-5" id="services-section">

        <h2 className="text-center fw-bold mb-4">
          Choose Your Service
        </h2>

        {/* SERVICES GRID */}
        <div className="row g-4">

          {/* FLIGHT */}
          <div className="col-md-4">
            <div className="card ultra-card text-center p-4">
              <FaPlane className="ultra-icon mb-3" />
              <h5>Flight Booking</h5>
              <p>${prices.flight}</p>

              <button className="btn btn-dark mt-2" onClick={handleBookFlight}>
                Book Flight
              </button>
            </div>
          </div>

          {/* HOTEL */}
          <div className="col-md-4">
            <div className="card ultra-card text-center p-4">
              <FaHotel className="ultra-icon mb-3" />
              <h5>Hotel Booking</h5>
              <p>${prices.hotel}</p>

              <button className="btn btn-dark mt-2" onClick={handleBookHotel}>
                Book Hotel
              </button>
            </div>
          </div>

          {/* CAR */}
          <div className="col-md-4">
            <div className="card ultra-card text-center p-4">
              <FaCar className="ultra-icon mb-3" />
              <h5>Car Rental</h5>
              <p>${prices.car}</p>

              <button className="btn btn-dark mt-2" onClick={handleBookCar}>
                Book Car
              </button>
            </div>
          </div>

        </div>

        {/* TOTAL PACKAGE */}
        <div className="text-center mt-5 p-4 bg-white shadow-sm rounded">
          <h3 className="fw-bold">Full Travel Package</h3>

          <p className="text-muted">
            Flight + Hotel + Car Rental
          </p>

          <h2 className="text-danger fw-bold">${total}</h2>

          <button
            className="btn ultra-cta text-white px-4 py-2 mt-3"
            onClick={handleBookNow}
          >
            Book Now (All Services)
          </button>
        </div>

        {/* WHY CHOOSE US */}
        <div className="text-center mt-5">
          <h2 className="fw-bold mb-4">Why Choose Us?</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <FaShieldAlt className="ultra-icon mb-2" />
              <h6>Safe & Secure</h6>
            </div>

            <div className="col-md-4">
              <FaHeadset className="ultra-icon mb-2" />
              <h6>24/7 Support</h6>
            </div>

            <div className="col-md-4">
              <FaMapMarkedAlt className="ultra-icon mb-2" />
              <h6>Global Destinations</h6>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}