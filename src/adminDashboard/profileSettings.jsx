import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  User,
  Shield,
  Sparkles,
  Bell,
  Database,
  ArrowLeft
} from "lucide-react";
import Logo from '../assets/images/logo.png';
import useProfile from '../hooks/useProfile';

const AdminProfileSettings = () => {
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(false);
  
  const {
    loading,
    fetchingProfile,
    profileData,
    setProfileData,
    fetchUserProfile,
    updateProfile,
    deleteAccount
  } = useProfile();

  // Fetch profile on component mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

  // Handle profile update
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    await updateProfile(profileData);
  };

  // Handle account deletion with confirmation
  const handleDeleteAccount = async () => {
    if (!confirmDelete) {
      toast.warning('Click the delete button again within 5 seconds to confirm account deletion. This action cannot be undone!', {
        autoClose: 5000,
        onClose: () => setConfirmDelete(false),
      });
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 5000);
      return;
    }

    const success = await deleteAccount();
    if (success) {
      navigate('/');
    }
  };

  const settingsMenuItems = [
    { name: 'Account', path: '/admin/profile-settings', icon: <User size={25} strokeWidth={1.5} />, active: true },
    { name: 'Security & Access', path: '/admin/security-settings', icon: <Shield size={25} strokeWidth={1.5}/>, active: false },
    { name: 'Admin Controls', path: '/admin/controls', icon: <Sparkles size={25} strokeWidth={1.5}/> },
    { name: 'Notifications', path: '/admin/notifications', icon: <Bell size={25} strokeWidth={1.5} /> },
    { name: 'Data Management', path: '/admin/data-management', icon: <Database size={25} strokeWidth={1.5} /> }
  ];

  if (fetchingProfile) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex min-h-screen">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading profile...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            className="flex items-center mt-[1rem] space-x-2 text-gray-700 hover:text-gray-900"
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Account</h1>
              <p className="text-gray-600">Manage your administrator account information</p>
            </div>
              
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">
                    {profileData.full_name ? profileData.full_name.charAt(0).toUpperCase() : 'A'}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{profileData.full_name || 'Admin User'}</h2>
                  <p className="text-gray-600">Administrator Account</p>
                  <p className="text-orange-600 text-sm font-medium">Administrator</p>
                </div>
                <button className="ml-auto px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors">
                  Edit Photo
                </button>
              </div>

              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileData.full_name}
                    onChange={(e) => setProfileData({...profileData, full_name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Admin User"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="admin@bearister.ai"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="+1-555-123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    value="Administrator"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none cursor-not-allowed opacity-75"
                    placeholder="Administrator"
                    disabled
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Role cannot be modified. Contact system administrator for role changes.
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {loading ? 'Saving Changes...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>

            {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Delete Admin Account</h3>
                <button
                  onClick={handleDeleteAccount}
                  disabled={loading}
                  className={`px-4 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    confirmDelete 
                      ? 'bg-red-700 hover:bg-red-800 animate-pulse' 
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {loading ? 'Deleting...' : confirmDelete ? 'Click Again to Confirm' : 'Delete'}
                </button>
              </div>
              <p className="text-gray-600">
                Delete your administrator account and associated data. This action cannot be undone and will permanently remove all administrative privileges.
              </p>
              <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">
                  ⚠️ Warning: Deleting an admin account may affect system operations. Ensure another admin account exists before proceeding.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileSettings;