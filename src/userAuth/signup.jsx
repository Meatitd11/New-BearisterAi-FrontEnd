// components/Signup.js
import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const { signup, loading, message } = useSignup();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(fullName, email, password, agree);
    } catch (err) {
      // Error is already handled in the hook
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#121926] overflow-hidden py-10 md:py-16">
      <div className="w-[520px] max-w-full">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center text-[#cdd5df] hover:text-white mb-8 transition-colors text-sm font-medium"
        >
          <span className="w-4 h-4 mr-2">←</span>
          Back
        </a>

        <div
          className="relative mx-auto"
          style={{
            "--card-scale": "min(0.35, calc((100vh - 200px) / 725px))",
            width: "calc(520px * var(--card-scale))",
            height: "calc(725px * var(--card-scale))",
          }}
        >
          <div
            className="bg-[#202939] rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-[#364152] shadow-lg flex flex-col gap-6"
            style={{
              transform: "scale(var(--card-scale))",
              transformOrigin: "top center",
            }}
          >
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={Logo}
                alt="BearisterAI Logo"
                className="w-16 h-16 rounded-full shadow-lg object-cover"
                style={{ marginTop: "-8px" }}
              />
            </div>

            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2">
                Create Account
              </h1>
              <p className="text-[#cdd5df] text-base">
                Start your journey with BearisterAI
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Adam Smith"
                  className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors text-base"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="adam@gmail.com"
                  className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors text-base"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors text-base"
                  required
                />
                <p className="text-xs text-[#cdd5df] mt-1">
                  Your new password must be at least 8 characters with letters,
                  numbers & symbols.
                </p>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#db610a] bg-[#121926] border-[#364152] rounded focus:ring-[#db610a] focus:ring-2"
                  required
                />
                <label htmlFor="terms" className="text-xs text-[#cdd5df]">
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-[#db610a] hover:text-[#f1750f] font-medium"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-[#db610a] hover:text-[#f1750f] font-medium"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#db610a] hover:bg-[#f1750f] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md"
              >
                {loading ? "Creating Account..." : "Create account"}
              </button>
            </form>


            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-sm text-[#cdd5df]">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="text-[#db610a] hover:text-[#f1750f] font-medium"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;