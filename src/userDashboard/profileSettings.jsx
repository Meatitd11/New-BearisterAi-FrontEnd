import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  User,
  Shield,
  Sparkles,
  Bell,
  Database,
  ArrowLeft,
} from "lucide-react";
import Logo from "../assets/images/logo.png";
import axiosAuth from "../utils/axiosAuth"; // 👈 use your interceptor-enabled axios instance

const ProfileSettings = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetchingProfile, setFetchingProfile] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [profileData, setProfileData] = useState({
    full_name: "",
    email: "",
    phone: "",
    law_firm: "",
  });

  // Fetch profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axiosAuth.get("/auth/profile");
        setProfileData({
          full_name: data.full_name || "",
          email: data.email || "",
          phone: data.phone || "",
          law_firm: data.law_firm || "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to fetch profile data");
      } finally {
        setFetchingProfile(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Update profile
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axiosAuth.put("/auth/update_profile", {
        full_name: profileData.full_name,
        email: profileData.email,
        phone: profileData.phone,
        law_firm: profileData.law_firm,
      });

      setProfileData({
        full_name: data.full_name || "",
        email: data.email || "",
        phone: data.phone || "",
        law_firm: data.law_firm || "",
      });

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.detail || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Delete account
  const handleDeleteAccount = async () => {
    toast.warning(
      "Click the delete button again within 5 seconds to confirm account deletion. This action cannot be undone!",
      {
        autoClose: 5000,
        onClose: () => setConfirmDelete(false),
      }
    );

    if (confirmDelete) {
      setLoading(true);
      try {
        await axiosAuth.delete("/auth/delete_account");

        localStorage.clear();
        toast.success("Account deleted successfully");
        navigate("/");
      } catch (error) {
        console.error("Error deleting account:", error);
        toast.error(error.response?.data?.detail || "Failed to delete account");
      } finally {
        setLoading(false);
        setConfirmDelete(false);
      }
    } else {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 5000);
    }
  };

  const settingsMenuItems = [
    {
      name: "Account",
      path: "/profile-settings",
      icon: <User size={25} strokeWidth={1.5} />,
      active: true,
    },
    {
      name: "Security & Access",
      path: "/security-settings",
      icon: <Shield size={25} strokeWidth={1.5} />,
      active: false,
    },
    {
      name: "Subscription & Usage",
      path: "/subscription",
      icon: <Sparkles size={25} strokeWidth={1.5} />,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <Bell size={25} strokeWidth={1.5} />,
    },
    {
      name: "Data Controls",
      path: "/data-controls",
      icon: <Database size={25} strokeWidth={1.5} />,
    },
  ];

  if (fetchingProfile) {
    return (
      <div className="flex h-screen bg-[#0B1426]">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F97316] mx-auto mb-4"></div>
            <p className="text-gray-400">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0B1426]">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E293B] border-r border-[#334155] p-4">
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="BearisterAI Logo"
            className="w-6 h-6 rounded-md object-cover"
          />
          <span className="text-base font-semibold text-white">
            BearisterAI
          </span>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center mt-[1rem] space-x-2 text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Chat</span>
        </button>
        <nav className="space-y-1 mt-[1rem]">
          {settingsMenuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                item.active
                  ? "bg-[#334155] text-white border-l-2 border-[#F97316]"
                  : "text-gray-400 hover:text-white hover:bg-[#334155]"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Account</h1>
            <p className="text-gray-400">
              Manage your personal information here
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-[#1E293B] rounded-lg p-6 mb-6">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {profileData.full_name
                    ? profileData.full_name.charAt(0).toUpperCase()
                    : "A"}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {profileData.full_name || "Adam Smith"}
                </h2>
                <p className="text-gray-400">Account created on July 26, 2025</p>
              </div>
              <button className="ml-auto px-4 py-2 text-[#F97316] border border-[#F97316] rounded-lg hover:bg-[#F97316] hover:text-white transition-colors">
                Edit Photo
              </button>
            </div>

            {/* Profile Form */}
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.full_name}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      full_name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                  placeholder="Adam Smith"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                  placeholder="adam.smith@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                  placeholder="+34-608-234108"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Law Firm (Optional)
                </label>
                <input
                  type="text"
                  value={profileData.law_firm}
                  onChange={(e) =>
                    setProfileData({ ...profileData, law_firm: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors"
                  placeholder="Innovative Tech dev"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#EA580C] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {loading ? "Saving Changes..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>

          {/* Delete Account */}
          {/* <div className="bg-[#1E293B] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Delete Account</h3>
              <button
                onClick={handleDeleteAccount}
                disabled={loading}
                className={`px-4 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  confirmDelete
                    ? "bg-red-800 hover:bg-red-900 animate-pulse"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {loading
                  ? "Deleting..."
                  : confirmDelete
                  ? "Click Again to Confirm"
                  : "Delete"}
              </button>
            </div>
            <p className="text-gray-400">
              Delete your account and associated data. This action cannot be
              undone and all your data will be permanently deleted.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
