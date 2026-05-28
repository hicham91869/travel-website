import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookingSuccess() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const allBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // get latest booking
    setBooking(allBookings[allBookings.length - 1]);
  }, []);

  if (!booking) {
    return (
      <div className="text-center py-5">
        Loading booking details...
      </div>
    );
  }

  return (
    <div className="invoice-page">

      <div className="container py-5">

        <div className="invoice-card mx-auto">

          {/* HEADER */}
          <div className="text-center mb-4">
            <h2 className="fw-bold text-success">
              Booking Confirmed ✅
            </h2>
            <p className="text-muted">
              Your reservation has been completed successfully
            </p>
          </div>

          {/* DESTINATION */}
          <div className="mb-4">
            <h4 className="fw-bold">{booking.name}</h4>
            <p className="text-muted">{booking.country}</p>
          </div>

          {/* DETAILS */}
          <div className="row mb-4">

            <div className="col-6">
              <p className="text-muted mb-1">Check-in</p>
              <p className="fw-bold">{booking.checkIn}</p>
            </div>

            <div className="col-6">
              <p className="text-muted mb-1">Check-out</p>
              <p className="fw-bold">{booking.checkOut}</p>
            </div>

            <div className="col-6 mt-3">
              <p className="text-muted mb-1">Guests</p>
              <p className="fw-bold">{booking.guests}</p>
            </div>

            <div className="col-6 mt-3">
              <p className="text-muted mb-1">Price / night</p>
              <p className="fw-bold">${booking.price}</p>
            </div>

          </div>

          {/* PRICE BOX */}
          <div className="invoice-box mb-4">

            <div className="d-flex justify-content-between mb-2">
              <span>Nights</span>
              <span>{booking.nights}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Service Fee</span>
              <span>$20</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total Paid</span>
              <span>${booking.total}</span>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="d-flex justify-content-between">

            <Link to="/" className="btn btn-outline-dark">
              Back Home
            </Link>

            <button
              className="btn btn-dark"
              onClick={() => window.print()}
            >
              Print Invoice
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}