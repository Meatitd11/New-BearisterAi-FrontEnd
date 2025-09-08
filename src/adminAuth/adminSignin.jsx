// components/AdminSignin.js
import React from "react";
import Logo from "../assets/images/logo.png";
import useAdminLogin from "../hooks/useAdminLogin";

const AdminSignin = () => {
  const { login, loading, error } = useAdminLogin();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
    <div className="admin-auth min-h-screen flex items-center justify-center p-4 bg-white overflow-hidden py-10 md:py-16">
      <div className="w-[520px] max-w-full">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-sm font-medium"
        >
          <span className="w-4 h-4 mr-2">←</span>
          Back
        </a>

        <div
          className="relative mx-auto"
          style={{
            "--card-scale": "min(0.35, calc((100vh - 200px) / 593px))",
            width: "calc(520px * var(--card-scale))",
            height: "calc(593px * var(--card-scale))",
          }}
        >
          <div
            className="bg-gray-50 rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-gray-200 shadow-lg flex flex-col gap-6"
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Admin Access
              </h1>
              <p className="text-gray-600 text-base">
                Sign in to BearisterAI Admin Panel
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@bearisterai.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#db610a] focus:ring-1 focus:ring-[#db610a] transition-colors text-base"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#db610a] focus:ring-1 focus:ring-[#db610a] transition-colors pr-10 text-base"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <span className="w-5 h-5">👁️</span>
                  </button>
                </div>
              </div>

            

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#db610a] hover:bg-[#f1750f] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md"
              >
                {loading ? "Signing In..." : "Sign In as Admin"}
              </button>

             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;