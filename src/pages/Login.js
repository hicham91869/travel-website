import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= LOGIN ================= */
  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      const success = login(form.email, form.password);

      if (success) {
        navigate("/");
      } else {
        setError("Invalid credentials");
      }

      setLoading(false);
    }, 800);
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">

      <div className="login-card shadow p-4 rounded-4 w-100" style={{ maxWidth: "400px" }}>

        <h2 className="text-center fw-bold mb-2">Welcome Back ✈️</h2>
        <p className="text-center text-muted mb-4">
          Login to continue your journey
        </p>

        {error && (
          <div className="alert alert-danger text-center py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />

          {/* PASSWORD */}
          <div className="input-group mb-3">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}