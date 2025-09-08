import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.png'
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { 
  FileText, Users, Scale, BookOpen, Shield, Plus, Search, 
  ChevronDown, LogOut, User, Menu 
} from 'lucide-react';

const Sidebar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout, isAuthenticated } = useAuth(); // Get user and auth status from useAuth hook
  const navigate = useNavigate();

  const menuItems = [
    { icon: FileText, label: "New Case File" },
    { icon: Users, label: "Consumer Rights Violation" },
    { icon: Scale, label: "Rent Dispute" },
    { icon: BookOpen, label: "Breach of Contract" },
    { icon: Shield, label: "Defamation Claim" },
  ];

  const recentChats = [
    "Summarize and Title Request",
    "Legal Consultation Sum...",
    "Breach of Contract Summary R...",
    "Defamation Claim Overview Re...",
    "Rent Dispute Overview Request",
    "Consumer Rights Summary Re...",
    "Privacy Policy Overview",
    "Product Return Guidelines",
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
    <aside className="w-[280px] flex flex-col min-h-screen" style={{ 
      backgroundColor: '#1a2232', 
      color: '#e3e8ef', 
      borderRight: '1px solid #2d3748'
    }}>
      {/* Logo & Menu Icon */}
      <div className="h-14 px-4 border-b flex items-center justify-between" style={{ borderBottom: '1px solid #2d3748'}}>
        <div className="flex items-center space-x-2">
        <img src={Logo} alt="BearisterAI Logo" className="w-6 h-6 rounded-md object-cover" />
          <span className="text-base font-semibold text-white">BearisterAI</span>
        </div>
        <button className="p-1 rounded transition-colors" style={{ color: '#9ca3af', background: 'transparent' }}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto sidebar-scroll">
        {/* New Chat Button */}
        <div className="px-3 pt-4">
          <button className="w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm font-medium" style={{ 
            background: 'transparent', 
            color: '#db610a' 
          }}>
            <Plus className="w-3.5 h-3.5" style={{ color: '#db610a'}} />
            <span>New Chat</span>
          </button>
        </div>

        {/* Search */}
        <div className="px-3 pb-3 mt-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5" style={{ color: '#9ca3af'}} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-3 py-2 rounded-lg text-sm placeholder:tracking-normal"
              style={{ 
                backgroundColor: '#121926', 
                border: '1px solid #2d3748', 
                color: '#e3e8ef', 
                paddingLeft: '2.5rem' 
              }}
            />
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-3 space-y-1 mt-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-left text-sm hover:bg-[rgba(255,255,255,0.04)]"
                style={{ color: '#9ca3af', background: 'transparent' }}
              >
                <IconComponent className="w-4 h-4" style={{ color: '#9ca3af'}} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* See More */}
          <button className="w-full text-left px-3 py-2 text-sm" style={{ color: '#db610a'}}>
            See More...
          </button>
        </div>

        {/* Recent Chats */}
        <div className="px-2 mt-3 pt-3" style={{ borderTop: '1px solid #2d3748'}}>
          <h3 className="text-[11px] font-medium mb-2 uppercase tracking-wide" style={{ color: '#9ca3af'}}>Recent Chats</h3>
          <div className="mb-3">
            <h4 className="text-[11px] mb-1 uppercase tracking-wide" style={{ color: '#9ca3af'}}>TODAY</h4>
            <div className="space-y-1">
              {recentChats.slice(0, 2).map((chat, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors font-medium tracking-tight hover:bg-[rgba(255,255,255,0.04)]"
                  style={{ color: '#e3e8ef', background: 'transparent' }}
                >
                  {chat}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-3 ">
            <h4 className="text-[11px] mb-1 uppercase tracking-wide" style={{ color: '#9ca3af'}}>YESTERDAY</h4>
            <div className="space-y-1">
              {recentChats.slice(2, 4).map((chat, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 text-sm text-[#cdd5df] hover:text-white hover:bg-[rgba(255,255,255,0.04)] rounded-lg transition-colors font-medium tracking-tight"
                >
                  {chat}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-2 ">
            <h4 className="text-[11px] mb-1 uppercase tracking-wide" style={{ color: '#9ca3af'}}>THIS WEEK</h4>
            <div className="space-y-1 pb-2">
              {recentChats.slice(4).map((chat, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 text-sm text-[#cdd5df] hover:text-white hover:bg-[rgba(255,255,255,0.04)] rounded-lg transition-colors font-medium tracking-tight"
                >
                  {chat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Profile (anchored bottom) */}
      <div className="p-3" style={{ borderTop: '1px solid #2d3748'}}>
        {isAuthenticated && user ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center space-x-2 p-2 hover:bg-gray-800 rounded-md transition-colors"
            >
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-white">
                  {user.full_name?.charAt(0)?.toUpperCase() || "U"}
                </span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-medium text-white truncate">{user.full_name || "User"}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-10">
                <button
                  className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate('/profile-settings');
                  }}
                >
                  <User className="w-4 h-4" />
                  <span>Profile Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <button
              onClick={handleLogin}
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
              Sign In
            </button>
            <button
              className="block w-full text-center border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;