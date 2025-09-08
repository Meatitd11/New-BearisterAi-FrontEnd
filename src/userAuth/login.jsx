// components/SignIn.js
import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import useLogin from "../hooks/useLogin";

const SignIn = () => {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      // Error is already handled in the hook
      console.error("❌ Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#121926] py-10 md:py-16">
      <div className="w-[520px] max-w-full">
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
            "--card-scale":
              "min(0.35, calc((100vh - 200px) / 593px))",
            width: "calc(520px * var(--card-scale))",
            height: "calc(593px * var(--card-scale))",
          }}
        >
          <div
            className="bg-[#202939] rounded-2xl pt-10 pr-8 pb-8 pl-8 
                       border border-[#364152] shadow-lg flex flex-col gap-6"
            style={{
              transform: "scale(var(--card-scale))",
              transformOrigin: "top center",
            }}
          >
            <div className="flex justify-center">
              <img
                src={Logo}
                alt="BearisterAI Logo"
                className="w-16 h-16 rounded-full shadow-lg object-cover"
                style={{ marginTop: "-8px" }}
              />
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-[#cdd5df] text-base">
                Sign in to your BearisterAI account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="adam@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#121926] border border-[#364152] 
                             rounded-lg text-white placeholder-[#cdd5df] 
                             focus:outline-none focus:border-[#db610a] 
                             transition-colors text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#121926] border border-[#364152] 
                             rounded-lg text-white placeholder-[#cdd5df] 
                             focus:outline-none focus:border-[#db610a] 
                             transition-colors pr-10 text-base"
                  required
                />
              </div>
              <a
                  href="/forgot-password"
                  className="text-[#db610a]  hover:text-[#f1750f] font-medium"
                >
                  Forgot Password?
                </a>
           

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#db610a] hover:bg-[#f1750f] 
                           text-white font-semibold py-3 px-4 mt-3 rounded-lg 
                           transition-colors text-base shadow-md disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="text-center">
              <p className="text-sm text-[#cdd5df]">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-[#db610a] hover:text-[#f1750f] font-medium"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;