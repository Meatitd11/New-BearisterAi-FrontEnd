import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSubscriptionStatus from '../hooks/useSubscriptionStatus'

const Header = () => {
  const { subscriptionData, fetchSubscription } = useSubscriptionStatus()
  const navigate = useNavigate()

  useEffect(() => {
    fetchSubscription()
  }, [])

  const planName = subscriptionData.product_name || "Unknown"
  const isFreePlan = planName === "Basic Free"

  return (
    <header className="px-6 py-6 h-[15vh]" style={{ backgroundColor: '#121926'}}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
          <button
            className="flex items-center space-x-2.5 px-3.5 py-1.5 md:px-4 md:py-1.5 text-white text-xs md:text-sm font-semibold rounded-full"
            style={{
              background: 'linear-gradient(90deg, #6D28D9 0%, #C026D3 18%, #E11D48 50%, #F97316 100%)',
              color: 'white',
              marginTop: '0.5rem',
              boxShadow: '0 8px 28px rgba(225,29,72,0.36)'
            }}
            onClick={() => {
              if (isFreePlan) {
                navigate('/subscription')
              }
            }}
          >
            <span className="w-4 h-4 text-white">⚡</span>
            <span>{isFreePlan ? "Upgrade Plan" : planName}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
