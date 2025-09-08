import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle } from "lucide-react"

const ResetSuccess = () => {
  const navigate = useNavigate()

  // ✅ Auto-redirect after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signin")
    }, 5000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121926]">
      <div className="flex flex-col items-center justify-center py-8 px-6 bg-[#202939] rounded-2xl border border-[#364152] shadow-lg w-[420px] max-w-full text-center">
        <div className="bg-[#4CAF50] rounded-full p-3 mb-6 shadow-lg">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Password Changed</h2>
        <p className="text-[#cdd5df] mb-8">
          Your password has been changed successfully.
        </p>
        <button
          onClick={() => navigate("/signin")}
          className="w-full bg-[#db610a] hover:bg-[#f1750f] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md"
        >
          Log in
        </button>
        <p className="text-sm text-[#cdd5df] mt-4">
          Redirecting you in 5 seconds...
        </p>
      </div>
    </div>
  )
}

export default ResetSuccess
