import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    const role = localStorage.getItem("role");
    const userData = localStorage.getItem("user");

    const hasTokens = !!accessToken && !!refreshToken;
    const determinedRole = role === "superadmin" ? "superadmin" : null;

    setIsAuthenticated(hasTokens);
    setUserRole(determinedRole);
    setUser(userData ? JSON.parse(userData) : null);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole(null);
    setUser(null);
  };

  return {
    isAuthenticated,
    userRole,
    user,
    loading,
    checkAuth,
    logout,
  };
};

export default useAuth;
