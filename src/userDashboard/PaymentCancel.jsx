import React from "react";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B1426] text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Cancelled</h1>
        <p className="text-gray-400 mb-6">
          Your payment was cancelled. No charges have been made to your account.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/subscription")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Choose Another Plan
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;