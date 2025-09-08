import { useState } from "react";
import { toast } from "react-toastify";
import api from "../api"; // Assuming you have an api instance

const useForgotPasswordFetch = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendResetLink = async (email) => {
    setLoading(true);
    setMessage("");

    try {
      console.log("Sending password reset email:", email);

      const formData = new FormData();
      formData.append("email", email);

      const response = await api.post("/auth/forgot-password", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const successMessage = response.data.message || "✅ Password reset link sent to your email!";
      setMessage(successMessage);
      toast.success(successMessage);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.detail || err.response?.data?.message || "❌ Failed to send reset link";
      setMessage(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendResetLink, loading, message };
};

export default useForgotPasswordFetch;