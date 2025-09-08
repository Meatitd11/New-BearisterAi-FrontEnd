import React from 'react'
import { Users, MessageCircle, Home, FileText, BarChart3, TrendingUp, LogOut, User } from "lucide-react";

const Header = () => {
  return (
    
    <header className="h-12 px-4 border-b border-gray-200 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-3 text-xs text-gray-600">
        <div className="flex items-center space-x-1">
          <Users className="w-3 h-3" />
          <span>71 users</span>
        </div>
        <div className="flex items-center space-x-1">
          <MessageCircle className="w-3 h-3" />
          <span>232 chats</span>
        </div>
      </div>
    </header>
  )
}

export default Header