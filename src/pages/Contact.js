import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔍 VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!form.message.trim())
      newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero d-flex align-items-center justify-content-center text-center">
        <div>
          <h1 className="fw-bold text-white">Contact Us</h1>
          <p className="text-light">
            We’re here to help you 24/7
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container py-5">

        <div className="row g-5">

          {/* FORM */}
          <div className="col-lg-7">
            <div className="contact-card p-4 shadow rounded">

              <h4 className="fw-bold mb-4">Send us a message</h4>

              {success && (
                <div className="alert alert-success">
                  Message sent successfully 🎉
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>

                {/* NAME */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name && "is-invalid"
                    }`}
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* EMAIL */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email && "is-invalid"
                    }`}
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className={`form-control ${
                      errors.message && "is-invalid"
                    }`}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <FaPaperPlane />
                </button>

              </form>
            </div>
          </div>

          {/* INFO */}
          <div className="col-lg-5">

            <div className="contact-info p-4 shadow-sm rounded mb-3 d-flex align-items-center gap-3">
              <FaMapMarkerAlt className="fs-4 text-primary" />
              <div>
                <h6 className="fw-bold mb-1">Office</h6>
                <p className="text-muted mb-0">Beirut, Lebanon</p>
              </div>
            </div>

            <div className="contact-info p-4 shadow-sm rounded mb-3 d-flex align-items-center gap-3">
              <FaPhone className="fs-4 text-primary" />
              <div>
                <h6 className="fw-bold mb-1">Phone</h6>
                <p className="text-muted mb-0">+961 70 000 000</p>
              </div>
            </div>

            <div className="contact-info p-4 shadow-sm rounded d-flex align-items-center gap-3">
              <FaEnvelope className="fs-4 text-primary" />
              <div>
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="text-muted mb-0">
                  support@travelpro.com
                </p>
              </div>
            </div>

            {/* CTA BOX */}
            <div className="mt-4 p-4 bg-dark text-white rounded text-center">
              <h5 className="fw-bold">Need urgent help?</h5>
              <p className="small">
                Our support team is available 24/7
              </p>
              <button className="btn btn-light btn-sm">
                Call Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}