import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Logo from "../assets/images/logo.png"
import useResetPassword from '../hooks/useResetPassword'

const ResetPassword = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { resetPassword, loading, error, success } = useResetPassword()
  const [searchParams] = useSearchParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await resetPassword(password, confirmPassword)
      navigate("/reset-success")   // ✅ redirect after success
    } catch (err) {
      console.error("Failed to reset password:", err)
    }
  }
  

  // Check if token is present
  const token = searchParams.get("token")
  const isValidLink = !!token

  if (!isValidLink) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#121926]">
        <div className="bg-[#202939] rounded-2xl p-8 border border-[#364152] shadow-lg text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Invalid Reset Link</h1>
          <p className="text-[#cdd5df] mb-6">The password reset link is invalid or has expired.</p>
          <Link to="/forgot-password" className="text-[#db610a] hover:text-[#f1750f] font-medium">
            Request a new reset link
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#121926] overflow-hidden py-10 md:py-16">
      <div className="w-[520px] max-w-full">
        <Link to="/signin" className="inline-flex items-center text-[#cdd5df] hover:text-white mb-8 transition-colors text-sm font-medium">
          <span className="w-4 h-4 mr-2">←</span>
          Back
        </Link>

        <div
          className="relative mx-auto"
          style={{
            '--card-scale': 'min(0.35, calc((100vh - 200px) / 593px))',
            width: 'calc(520px * var(--card-scale))',
            height: 'calc(593px * var(--card-scale))',
          }}
        >
          <div className="bg-[#202939] rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-[#364152] shadow-lg flex flex-col gap-6" style={{ transform: 'scale(var(--card-scale))', transformOrigin: 'top center' }}>
            {/* Logo */}
            <div className="flex justify-center">
              <img src={Logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" style={{marginTop: '-8px'}} />
            </div>

            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
            </div>

            {/* Success Message */}
            {success && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg text-sm">
                Password reset successfully!
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password Field */}
              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors pr-10 text-base"
                    required
                    minLength={6}
                    disabled={loading || success}
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#cdd5df] hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <p className="text-xs text-[#cdd5df] mt-2">Your new password must be at least 6 characters with letters, numbers & symbols.</p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Rewrite new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors pr-10 text-base"
                    required
                    minLength={6}
                    disabled={loading || success}
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#cdd5df] hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || success}
                className="w-full bg-[#db610a] hover:bg-[#f1750f] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Resetting..." : success ? "Success!" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword