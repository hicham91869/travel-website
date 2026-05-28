import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Booking() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [place, setPlace] = useState(null);

  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [error, setError] = useState("");

  // ✅ SAFE DATA LOADING
  useEffect(() => {
    if (location.state) {
      setPlace(location.state);
    } else {
      const allPlaces = JSON.parse(localStorage.getItem("places")) || [];
      const found = allPlaces.find((p) => p.name === name);
      setPlace(found || null);
    }
  }, [location, name]);

  // Loading state
  if (!place) {
    return (
      <div className="text-center py-5">
        Loading...
      </div>
    );
  }

  // ✅ FIXED SAFE PRICE (YOUR REQUEST)
  const pricePerNight = place?.price || 0;

  // Calculate nights
  const calculateNights = () => {
    if (!form.checkIn || !form.checkOut) return 0;

    const inDate = new Date(form.checkIn);
    const outDate = new Date(form.checkOut);

    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = calculateNights();
  const subtotal = nights * pricePerNight;
  const serviceFee = 20;
  const total = subtotal + serviceFee;

  // Booking handler
  const handleBooking = (e) => {
    e.preventDefault();
    setError("");

    if (!form.checkIn || !form.checkOut) {
      setError("Please select check-in and check-out dates");
      return;
    }

    if (nights <= 0) {
      setError("Check-out must be after check-in");
      return;
    }

    const bookingData = {
      ...place,
      ...form,
      nights,
      total,
    };

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, bookingData])
    );

    // SUCCESS NAVIGATION
    navigate("/booking-success");
  };

  return (
    <div className="booking-page">

      {/* HEADER */}
      <div className="text-center py-5">
        <h1 className="fw-bold">Book {place.name}</h1>
        <p className="text-muted">{place.country}</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">

          {/* FORM */}
          <div className="col-md-7">
            <div className="booking-card p-4">

              <h4 className="fw-bold mb-3">Your Trip Details</h4>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={handleBooking}>

                <label>Check-in</label>
                <input
                  type="date"
                  className="form-control mb-3"
                  value={form.checkIn}
                  onChange={(e) =>
                    setForm({ ...form, checkIn: e.target.value })
                  }
                />

                <label>Check-out</label>
                <input
                  type="date"
                  className="form-control mb-3"
                  value={form.checkOut}
                  onChange={(e) =>
                    setForm({ ...form, checkOut: e.target.value })
                  }
                />

                <label>Guests</label>
                <input
                  type="number"
                  min="1"
                  className="form-control mb-3"
                  value={form.guests}
                  onChange={(e) =>
                    setForm({ ...form, guests: e.target.value })
                  }
                />

                <button className="btn btn-danger w-100 mt-2">
                  Confirm Booking
                </button>

              </form>

            </div>
          </div>

          {/* SUMMARY */}
          <div className="col-md-5">
            <div className="booking-summary p-4">

              <h5 className="fw-bold mb-3">Price Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>${pricePerNight} × {nights} nights</span>
                <span>${subtotal}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Service fee</span>
                <span>${serviceFee}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}