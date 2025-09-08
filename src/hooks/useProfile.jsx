import { useState } from "react";
import { toast } from "react-toastify";
import axiosAuth from "../utils/axiosAuth";

const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [fetchingProfile, setFetchingProfile] = useState(true);
  const [profileData, setProfileData] = useState({
    full_name: "",
    email: "",
    phone: "",
    law_firm: "",
  });

  // Fetch profile
  const fetchUserProfile = async () => {
    setFetchingProfile(true);
    try {
      const { data } = await axiosAuth.get("/auth/profile");
      setProfileData({
        full_name: data.full_name || "",
        email: data.email || "",
        phone: data.phone || "",
        law_firm: data.law_firm || "",
      });
      return data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast.error("Failed to fetch profile data");
      throw error;
    } finally {
      setFetchingProfile(false);
    }
  };

  // Update profile
  const updateProfile = async (profileData) => {
    setLoading(true);
    try {
      const { data } = await axiosAuth.put("/auth/update_profile", profileData);
      setProfileData({
        full_name: data.full_name || "",
        email: data.email || "",
        phone: data.phone || "",
        law_firm: data.law_firm || "",
      });
      toast.success("Profile updated successfully!");
      return data;
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.detail || "Failed to update profile");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Delete account
  const deleteAccount = async () => {
    setLoading(true);
    try {
      await axiosAuth.delete("/auth/delete_account");
      localStorage.clear();
      toast.success("Account deleted successfully");
      return true;
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error(error.response?.data?.detail || "Failed to delete account");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchingProfile,
    profileData,
    setProfileData,
    fetchUserProfile,
    updateProfile,
    deleteAccount,
  };
};

export default useProfile;