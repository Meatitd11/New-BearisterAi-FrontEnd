// hooks/useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api";
import useAuth from "./useAuth";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { access_token, refresh_token, user } = response.data;

      // Save tokens & user details
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("user", JSON.stringify(user));
      
      // Check if user has role
      if (response.data.role) {
        localStorage.setItem("role", response.data.role);
      }

      // Update auth state
      checkAuth();

      toast.success("Login successful! Redirecting...");
      
    //   Redirect based on user role
      const role = response.data.role || "user";
      if (role === "superadmin") {
        setTimeout(() => navigate("/admin"), 1000);
      } else {
        setTimeout(() => navigate("/dashboard"), 1000);
      }

      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.detail || "Login failed";
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;