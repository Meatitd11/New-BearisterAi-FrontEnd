import React from 'react'
import { Users, MessageCircle, Home, FileText, BarChart3, TrendingUp, LogOut, User } from "lucide-react";
const metricCards = [
    {
      title: "Total Users",
      value: "71",
      icon: Users,
      color: "bg-blue-500",
      change: "+12%",
      changeType: "positive"
    },
    {
      title: "Documents Processed",
      value: "214",
      icon: FileText,
      color: "bg-green-500",
      change: "+8%",
      changeType: "positive"
    },
    {
      title: "Total Chats",
      value: "232",
      icon: BarChart3,
      color: "bg-purple-500",
      change: "+15%",
      changeType: "positive"
    },
    {
      title: "Monthly Revenue",
      value: "$1,120",
      icon: TrendingUp,
      color: "bg-orange-500",
      change: "+23%",
      changeType: "positive"
    }
  ];

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
    {/* Metric Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metricCards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600 mb-1">{card.title}</p>
              <p className="text-xl font-bold text-gray-900">{card.value}</p>
            </div>
            <div className={`p-2 rounded-lg ${card.color}`}>
              <card.icon className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <span className={`text-xs font-medium ${
              card.changeType === "positive" ? "text-green-600" : "text-red-600"
            }`}>
              {card.change}
            </span>
            <span className="text-xs text-gray-500 ml-1">from last month</span>
          </div>
        </div>
      ))}
    </div>

    {/* Recent Users Section */}
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-4 py-3">
        <h2 className="text-base font-semibold text-gray-900">Recent Users</h2>
      </div>
    </div>
  </main>
  )
}

export default MainContent