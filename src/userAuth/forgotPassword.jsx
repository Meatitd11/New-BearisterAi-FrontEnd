import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.png"
import useForgotPassword from '../hooks/useForgotPassword'

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const { sendResetLink, loading, error, success } = useForgotPassword()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await sendResetLink(email)
    } catch (err) {
      console.error("Failed to send reset link:", err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#121926] overflow-hidden py-10 md:py-16">
      <div className="w-[520px] max-w-full">
        {/* Back Button */}
        <Link to="/signin" className="inline-flex items-center text-[#cdd5df] hover:text-white mb-8 transition-colors text-sm font-medium">
          <span className="w-4 h-4 mr-2">←</span>
          Back
        </Link>

        <div
          className="relative mx-auto"
          style={{
            '--card-scale': 'min(0.35, calc((100vh - 240px) / 408px))',
            width: 'calc(520px * var(--card-scale))',
            height: 'calc(408px * var(--card-scale))',
          }}
        >
          <div className="bg-[#202939] rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-[#364152] shadow-lg flex flex-col gap-6" style={{ transform: 'scale(var(--card-scale))', transformOrigin: 'top center' }}>
            {/* Logo */}
            <div className="flex justify-center">
              <img src={Logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" style={{marginTop: '-8px'}} />
            </div>

            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2">Forgot Password</h1>
              <p className="text-[#cdd5df] text-base">Enter your email to receive a password reset link</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg text-sm">
                Password reset link sent! Check your email.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="adam@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors text-base"
                  required
                  disabled={loading || success}
                />
              </div>

              <button
                type="submit"
                disabled={loading || success}
                className="w-full bg-[#db610a] hover:bg-[#f1750f] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : success ? "Sent!" : "Send Reset Link"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword