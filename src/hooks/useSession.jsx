
import { useState } from "react";
import { toast } from "react-toastify";
import axiosAuth from "../utils/axiosAuth";

const useSession = () => {
  const [loading, setLoading] = useState(false);

  const createSession = async (sessionName = "New Chat") => {
    setLoading(true);
    try {
      const { data } = await axiosAuth.post("/auth/create_chat_session", {
        session_name: sessionName
      });
      toast.success("New chat session created");
      return data; // Should return session data including session_id
    } catch (error) {
      console.error("Error creating session:", error);
      toast.error(error.response?.data?.detail || "Failed to create chat session");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    createSession,
  };
};

export default useSession;