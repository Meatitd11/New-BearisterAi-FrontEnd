import React, { useState } from 'react';
import { 
  Home, Users, FileText, MessageCircle, LogOut, User, Menu, ChevronDown 
} from 'lucide-react';
import Logo from '../assets/images/logo.png';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: FileText, label: "AI Training", href: "/admin/ai-training" },
    { icon: MessageCircle, label: "User Feedback", href: "/admin/feedback" },
    { icon: MessageCircle, label: "Obi Chat", href: "/admin/obi-chat" },
  ];

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <aside className="w-[240px] flex flex-col min-h-screen bg-gray-50 border-r border-gray-200">
      {/* Logo & Brand */}
      <div className="h-12 px-3 border-b border-gray-200 flex items-center justify-between bg-white">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="BearisterAI Logo" className="w-5 h-5 rounded-md object-cover" />
          <div>
            <span className="text-sm font-semibold text-gray-900">BearisterAI</span>
            <div className="text-xs text-gray-500">Admin Panel</div>
          </div>
        </div>
        <button className="p-1 rounded transition-colors text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto sidebar-scroll p-3">
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                  item.href === "/admin" 
                    ? "bg-orange-500 text-white shadow-sm" 
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Admin User Profile */}
      <div className="p-3 border-t border-gray-200 bg-white">
        {isAuthenticated && user ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-white">
                    {user.full_name?.charAt(0)?.toUpperCase() || "A"}
                  </span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm font-medium text-gray-900 truncate">{user.full_name || "Admin User"}</p>
                  <p className="text-xs text-gray-500">{user.email || "support@bearister.ai"}</p>
                </div>
              </div>
              
              {/* Dropdown indicator with animation */}
              <div className={`transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`}>
                <ChevronDown 
                  className="w-4 h-4 text-gray-400 group-hover:text-gray-600" 
                />
              </div>
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 overflow-hidden">
                <button
                  className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    navigate('/admin/profile-settings');
                    setShowUserMenu(false);
                  }}
                >
                  <User className="w-4 h-4" />
                  <span>Profile Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            {/* Development mode: Show admin access without login */}
            <div className="text-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-medium text-white">A</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">support@bearister.ai</p>
              <p className="text-xs text-orange-600 mt-1">Development Mode</p>
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
              <span>Login</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;