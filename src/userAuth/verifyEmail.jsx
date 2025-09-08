// components/VerifyEmail.js
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import useVerifyEmail from "../hooks/useVerifyEmail";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const { verifyEmail, loading, message } = useVerifyEmail();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    }
  }, [token, verifyEmail]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-2xl p-8 text-center">
          {/* Logo */}
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <img
                src={Logo}
                alt="BearisterAI Logo"
                className="w-16 h-16 rounded-full shadow-lg object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">BearisterAI</h1>
          </div>

          {/* Status */}
          <div>
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">Verifying Email</h2>
                <p className="text-gray-400">{message}</p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-2">Email Verification</h2>
                <p className="text-gray-400">{message}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;