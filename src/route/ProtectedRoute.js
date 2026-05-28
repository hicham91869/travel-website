import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuth, loading } = useAuth();

  /* ================= LOADING SCREEN ================= */
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3"></div>
          <p className="text-muted">Checking authentication...</p>
        </div>
      </div>
    );
  }

  /* ================= BLOCK ACCESS ================= */
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}