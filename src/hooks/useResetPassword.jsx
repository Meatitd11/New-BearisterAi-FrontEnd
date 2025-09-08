import { useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import api from "../api"; // Assuming you have an api instance

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Get token from query params
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const resetPassword = async (password, confirmPassword) => {
    setLoading(true);
    setMessage("");

    try {
      if (!token) {
        throw new Error("Invalid or missing reset token.");
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      console.log("Resetting password with token:", token);

      const formData = new FormData();
      formData.append("token", token);
      formData.append("new_password", password);

      const response = await api.post("/auth/reset-password", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const successMessage = response.data.message || "✅ Password reset successfully!";
      setMessage(successMessage);
      toast.success(successMessage);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.detail || err.response?.data?.message || err.message || "❌ Failed to reset password";
      setMessage(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { resetPassword, loading, message, token };
};

export default useResetPassword;