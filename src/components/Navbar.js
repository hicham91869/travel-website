import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        {/* BRAND */}
        <Link className="navbar-brand fw-bold text-danger" to="/">
          TravelPro ✈️
        </Link>

        {/* MENU */}
        <div className="d-flex gap-3 align-items-center">

          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/services">Services</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/favorites">Favorites ❤️</Link>

          <button
            onClick={logout}
            className="btn btn-sm btn-outline-danger"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}