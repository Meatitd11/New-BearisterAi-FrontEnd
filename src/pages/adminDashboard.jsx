import React from 'react'
import Sidebar from '../adminDashboard/sidebar'
import Header from '../adminDashboard/header'
import MainContent from '../adminDashboard/mainContent'
const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard