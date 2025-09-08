import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  User,
  Shield,
  Sparkles,
  Bell,
  Database,
  ArrowLeft,
  Eye,
  EyeOff
} from "lucide-react";
import Logo from '../assets/images/logo.png';
import useSecurity from '../hooks/useSecurity';

const AdminSecuritySettings = () => {
  const navigate = useNavigate();
  const { loading, updatePassword, logoutDevice, logoutAllDevices } = useSecurity();
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [passwordData, setPasswordData] = useState({
    current_password: '',
    new_password: '',
    confirm_password: ''
  });

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (passwordData.new_password !== passwordData.confirm_password) {
      toast.error('New passwords do not match');
      return;
    }

    if (passwordData.new_password.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }

    const success = await updatePassword(passwordData);
    if (success) {
      setPasswordData({
        current_password: '',
        new_password: '',
        confirm_password: ''
      });
    }
  };

  const handleLogOutDevice = () => {
    logoutDevice();
    navigate('/admin-login');
  };

  const handleLogOutAllDevices = async () => {
    const success = await logoutAllDevices();
    if (success) {
      navigate('/admin-login');
    }
  };

  const handleResetAllUserSessions = async () => {
    toast.error('This feature requires backend implementation');
    console.log('Reset all user sessions functionality needs to be implemented in backend');
  };

  const settingsMenuItems = [
    { name: 'Account', path: '/admin/profile-settings', icon: <User size={25} strokeWidth={1.5} />, active: false },
    { name: 'Security & Access', path: '/admin/security-settings', icon: <Shield size={25} strokeWidth={1.5}/>, active: true },
    { name: 'Admin Controls', path: '/admin/controls', icon: <Sparkles size={25} strokeWidth={1.5}/> },
    { name: 'Notifications', path: '/admin/notifications', icon: <Bell size={25} strokeWidth={1.5} /> },
    { name: 'Data Management', path: '/admin/data-management', icon: <Database size={25} strokeWidth={1.5} /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="BearisterAI Logo" className="w-6 h-6 rounded-md object-cover" />
            <span className="text-base font-semibold text-gray-900">BearisterAI</span>
          </div>
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 mt-[1rem]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Admin Dashboard</span>
          </button>
          <nav className="space-y-1 mt-[1rem]">
            {settingsMenuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                  item.active 
                    ? 'bg-orange-50 text-orange-700 border-l-2 border-orange-500' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Security & Access</h1>
              <p className="text-gray-600">Manage your administrator authentication and security settings</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5 text-orange-500" />
                <h2 className="text-lg font-semibold text-gray-900">Change Password</h2>
              </div>
              
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={passwordData.current_password}
                      onChange={(e) => setPasswordData({...passwordData, current_password: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors pr-12"
                      placeholder="Current admin password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-[0.8rem] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={passwordData.new_password}
                      onChange={(e) => setPasswordData({...passwordData, new_password: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors pr-12"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-[0.8rem] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Your new password must be at least 6 characters with letters, numbers & symbols
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={passwordData.confirm_password}
                      onChange={(e) => setPasswordData({...passwordData, confirm_password: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors pr-12"
                      placeholder="Rewrite new password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-[0.8rem] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {loading ? 'Updating Password...' : 'Update Password'}
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Log Out of this Device</h3>
                  <button
                    onClick={handleLogOutDevice}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    Log Out
                  </button>
                </div>
                <p className="text-gray-600">
                  Log out only from this device. You will remain logged in on other devices.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Log Out of All Devices</h3>
                  <button
                    onClick={handleLogOutAllDevices}
                    disabled={loading}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors font-medium"
                  >
                    {loading ? 'Processing...' : 'Log Out All Devices'}
                  </button>
                </div>
                <p className="text-gray-600">
                  Log out from all devices where you are currently logged in.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSecuritySettings;