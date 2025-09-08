import React from 'react'
import Sidebar from '../userDashboard/sidebar'
import Header from '../userDashboard/header'
import MainContent from '../userDashboard/mainContent'

const UserDashboard = () => {
  return (

      <div className="" style={{ backgroundColor: '#121926', color: '#e3e8ef'}}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <MainContent />
          </div>
        </div>
      </div>
 
  )
}

export default UserDashboard