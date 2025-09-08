import { useState } from "react";
import { toast } from "react-toastify";
import axiosAuth from "../utils/axiosAuth"; // your axios instance

const useSecurity = (navigate) => {
  const [loading, setLoading] = useState(false);

  // 🔹 Change password
  const updatePassword = async ({ current_password, new_password }) => {
    setLoading(true);
    try {
      await axiosAuth.put("/auth/update_password", {
        old_password: current_password,
        new_password,
      });
      toast.success("Password updated successfully!");
      return true;
    } catch (error) {
      console.error("Update password error:", error);
      toast.error(error.response?.data?.detail || "Failed to update password");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Logout only this device
  const logoutDevice = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    toast.success("Logged out from this device");
    navigate("/signin");
  };

  // 🔹 Logout all devices
  const logoutAllDevices = async () => {
    setLoading(true);
    try {
      await axiosAuth.post("/auth/logout_all_devices");
      localStorage.clear();
      toast.success("Logged out from all devices");
      navigate("/signin");
    } catch (error) {
      console.error("Logout all devices error:", error);
      toast.error(error.response?.data?.detail || "Failed to logout all devices");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    updatePassword,
    logoutDevice,
    logoutAllDevices,
  };
};

export default useSecurity;
