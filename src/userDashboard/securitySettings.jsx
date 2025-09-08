import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import {
  User,
  
  Sparkles,
  Bell,
  Database,
  ArrowLeft,
} from "lucide-react";
import Logo from "../assets/images/logo.png";
import useSecurity from "../hooks/useSecurity";

const SecuritySettings = () => {
  const navigate = useNavigate();
  const { loading, updatePassword, logoutDevice, logoutAllDevices } = useSecurity(navigate);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordData, setPasswordData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const settingsMenuItems = [
    {
      name: "Account",
      path: "/profile-settings",
      icon: <User size={25} strokeWidth={1.5} />,
      active: false,
    },
    {
      name: "Security & Access",
      path: "/security-settings",
      icon: <Shield size={25} strokeWidth={1.5} />,
      active: true,
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
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordData.new_password !== passwordData.confirm_password) {
      return toast.error("New passwords do not match");
    }
    if (passwordData.new_password.length < 6) {
      return toast.error("New password must be at least 6 characters");
    }

    const success = await updatePassword(passwordData);
    if (success) {
      setPasswordData({ current_password: "", new_password: "", confirm_password: "" });
    }
  };

  return (
    <div className="flex h-screen bg-[#0B1426]">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E293B] border-r border-[#334155] p-4">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="BearisterAI Logo" className="w-6 h-6 rounded-md object-cover" />
          <span className="text-base font-semibold text-white">BearisterAI</span>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center space-x-2 text-white mt-[1rem]"
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

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-2">Security & Access</h1>
          <p className="text-gray-400 mb-8">Manage your authentication settings here</p>

          {/* Change Password */}
          <div className="bg-[#1E293B] rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-[#F97316]" />
              <h2 className="text-lg font-semibold text-white">Change Password</h2>
            </div>

            <form onSubmit={handlePasswordChange} className="space-y-4">
              {/* Current password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={passwordData.current_password}
                    onChange={(e) => setPasswordData({ ...passwordData, current_password: e.target.value })}
                    className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors pr-12"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-[50%] transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* New password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={passwordData.new_password}
                    onChange={(e) => setPasswordData({ ...passwordData, new_password: e.target.value })}
                    className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors pr-12"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-[50%] transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm new password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordData.confirm_password}
                    onChange={(e) => setPasswordData({ ...passwordData, confirm_password: e.target.value })}
                    className="w-full px-4 py-3 bg-[#334155] border border-[#475569] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F97316] transition-colors pr-12"
                    placeholder="Rewrite new password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-[50%] transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-[#F97316] text-white rounded-lg hover:bg-[#EA580C] disabled:opacity-50 transition-colors font-medium"
                >
                  {loading ? "Updating Password..." : "Update Password"}
                </button>
              </div>
            </form>
          </div>

          {/* Logout options */}
          {/* <div className="space-y-4">
            <div className="bg-[#1E293B] rounded-lg p-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Log Out of this Device</h3>
              <button
                onClick={logoutDevice}
                className="px-4 py-2 bg-[#475569] text-white rounded-lg hover:bg-[#64748B] transition-colors font-medium"
              >
                Log Out
              </button>
            </div>

            <div className="bg-[#1E293B] rounded-lg p-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Log Out of All Devices</h3>
              <button
                onClick={logoutAllDevices}
                disabled={loading}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                {loading ? "Logging Out..." : "Log Out All"}
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
