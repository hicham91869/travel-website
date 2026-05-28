import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= RESTORE SESSION ================= */
  useEffect(() => {
    const savedAuth = localStorage.getItem("auth");
    const savedUser = localStorage.getItem("user");

    if (savedAuth === "true" && savedUser) {
      setIsAuth(true);
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  /* ================= LOGIN ================= */
  const login = (email, password) => {
    if (!email || !password) return false;

    const userData = {
      email,
      name: email.split("@")[0],
    };

    localStorage.setItem("auth", "true");
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
    setIsAuth(true);

    return true;
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");

    setUser(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);