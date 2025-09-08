// hooks/useVerifyEmail.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const useVerifyEmail = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Please wait while we verify your email address...");
  const navigate = useNavigate();

  const verifyEmail = async (token) => {
    try {
      // Handle test token for demonstration
      if (token === 'test-success') {
        setMessage("✅ Email verified successfully! Welcome to BearisterAI!");
        setLoading(false);
        setTimeout(() => navigate("/signin"), 3000);
        return { message: "Test verification successful" };
      }
      
      const response = await api.get(`/auth/verify-email?token=${token}`);
      
      const successMessage = response.data.message || "✅ Email verified successfully!";
      setMessage(successMessage);
      
      
      // Auto redirect to login after 3s
      setTimeout(() => navigate("/signin"), 3000);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || "❌ Verification failed";
      setMessage(errorMessage);
     
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { verifyEmail, loading, message };
};

export default useVerifyEmail;