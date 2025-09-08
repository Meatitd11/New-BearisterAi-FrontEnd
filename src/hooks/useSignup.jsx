// hooks/useSignup.js
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../api";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const signup = async (fullName, email, password, agree) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await api.post("/auth/register", {
        full_name: fullName,
        email,
        password,
        agree_terms: agree,
        is_verified: false,
      });

      const successMessage = response.data.message || "✅ Account created! Please check your email to verify.";
      setMessage(successMessage);
      toast.success(successMessage);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.detail || "❌ Signup failed";
      setMessage(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, message };
};

export default useSignup;