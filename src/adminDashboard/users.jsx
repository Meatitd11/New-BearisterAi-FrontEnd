import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  User,
  Shield,
  Sparkles,
  Bell,
  Database,
  ArrowLeft,
  Search,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Logo from '../assets/images/logo.png';
import useUsers from '../hooks/useUsers';
import useAuth from '../hooks/useAuth';
import Sidebar from '../adminDashboard/sidebar'
import Header from '../adminDashboard/header'

const Users = () => {
  const navigate = useNavigate();
  const {
    users,
    loading,
    error,
    totalUsers,
    currentPage,
    usersPerPage,
    handleSearch,
    handlePageChange,
    refreshUsers
  } = useUsers();

  const { userRole, loading: authLoading } = useAuth();
  const [searchInput, setSearchInput] = useState("");

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, handleSearch]);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Invalid date';
    }
  };

  const getVerificationBadge = (isVerified) => {
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
        isVerified
          ? 'bg-green-100 text-green-800 border border-green-200'
          : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
      }`}>
        {isVerified ? (
          <>
            <CheckCircle className="w-3 h-3 mr-1" />
            Verified
          </>
        ) : (
          <>
            <XCircle className="w-3 h-3 mr-1" />
            Unverified
          </>
        )}
      </span>
    );
  };

  const getSubscriptionBadge = (subscription) => {
    if (!subscription) {
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
          Free
        </span>
      );
    }

    const planType = subscription.plan_type?.toLowerCase() || 'free';
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
        planType === 'premium' || planType === 'pro'
          ? 'bg-orange-100 text-orange-800 border border-orange-200'
          : planType === 'enterprise'
          ? 'bg-purple-100 text-purple-800 border border-purple-200'
          : 'bg-blue-100 text-blue-800 border border-blue-200'
      }`}>
        {subscription.plan_type || 'Free'}
      </span>
    );
  };

  const handleRetry = () => {
    refreshUsers();
  };

  // Calculate pagination info
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const startItem = ((currentPage - 1) * usersPerPage) + 1;
  const endItem = Math.min(currentPage * usersPerPage, totalUsers);

  const settingsMenuItems = [
    { name: 'Dashboard', path: '/admin', icon: <User size={25} strokeWidth={1.5} />, active: false },
    { name: 'User Management', path: '/admin/users', icon: <User size={25} strokeWidth={1.5} />, active: true },
    { name: 'Admin Controls', path: '/admin/controls', icon: <Sparkles size={25} strokeWidth={1.5}/>, active: false },
    { name: 'Notifications', path: '/admin/notifications', icon: <Bell size={25} strokeWidth={1.5} />, active: false },
    { name: 'Data Management', path: '/admin/data-management', icon: <Database size={25} strokeWidth={1.5} />, active: false }
  ];

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (userRole !== "superadmin") {
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
              <span className="text-sm font-medium">Back to Dashboard</span>
            </button>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 p-4">
              <h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
            </div>
            <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="text-red-500 mb-4">
                  <AlertCircle className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Access Denied</h3>
                <p className="text-gray-600 mb-4">You don't have permission to access user management.</p>
                <button
                  onClick={() => navigate('/admin')}
                  className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                >
                  Go to Dashboard
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        <Sidebar/>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
        <Header/>

          <main className="flex-1 flex flex-col overflow-hidden p-5">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Header Row */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Users</h2>
                  <p className="text-sm text-gray-500">
                    {loading ? 'Loading...' : `${totalUsers} users found`}
                    {searchInput && ` • Filtered by: "${searchInput}"`}
                  </p>
                </div>
                <div className="w-80">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name, email, phone, or ID..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Error State */}
              {error && (
                <div className="p-6 text-center bg-red-50 border-b border-red-200">
                  <div className="flex items-center justify-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-600">{error}</span>
                  </div>
                  <button
                    onClick={handleRetry}
                    className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Loading State */}
              {loading && !error && (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
                  <p className="text-sm text-gray-500 mt-2">Loading users...</p>
                </div>
              )}

              {/* Users Table */}
              {!loading && !error && (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 text-gray-600">
                          <th className="text-left font-medium px-6 py-3 border-b border-gray-200">ID</th>
                          <th className="text-left font-medium px-6 py-3 border-b border-gray-200">Name</th>
                          <th className="text-left font-medium px-6 py-3 border-b border-gray-200">Email</th>
                          <th className="text-left font-medium px-6 py-3 border-b border-gray-200">Phone</th>
                          <th className="text-left font-medium px-6 py-3 border-b border-gray-200">Status</th>
                          <th className="text-left font-medium px-6 py-3 border-b border-gray-200">Plan</th>
                          <th className="text-left font-medium px-6 py-3 border-b border-gray-200">Usage</th>
                          <th className="text-left font-medium px-6 py-3 border-b border-gray-200">Join Date</th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-100">
                        {users.length === 0 ? (
                          <tr>
                            <td colSpan="8" className="px-6 py-8 text-center text-gray-500">
                              {searchInput ? `No users found matching "${searchInput}"` : 'No users found'}
                            </td>
                          </tr>
                        ) : (
                          users.map((user) => (
                            <tr key={user.id} className="hover:bg-orange-50/40 transition-colors">
                              <td className="px-6 py-4 text-gray-900 font-mono text-xs">
                                {user.id}
                              </td>
                              <td className="px-6 py-4 text-gray-900 font-medium">
                                {user.full_name || 'N/A'}
                              </td>
                              <td className="px-6 py-4 text-gray-700">
                                {user.email}
                              </td>
                              <td className="px-6 py-4 text-gray-700">
                                {user.phone || 'N/A'}
                              </td>
                              <td className="px-6 py-4">
                                {getVerificationBadge(user.is_verified)}
                              </td>
                              <td className="px-6 py-4">
                                {getSubscriptionBadge(user.subscription)}
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-xs text-gray-600">
                                  <div>Text: {user.usage?.text_prompt_count || 0}</div>
                                  <div>Files: {user.usage?.file_prompt_count || 0}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-xs">
                                {formatDate(user.join_date)}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                      <span className="text-sm text-gray-600">
                        Showing {startItem}–{endItem} of {totalUsers} users
                      </span>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">
                          Page {currentPage} of {totalPages}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handlePageChange('prev')}
                            disabled={currentPage === 1}
                            className="p-2 rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handlePageChange('next')}
                            disabled={currentPage >= totalPages}
                            className="p-2 rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Users;