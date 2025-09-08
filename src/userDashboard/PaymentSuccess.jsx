import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import useSubscription from "../hooks/useSubscription";
import useAuth from "../hooks/useAuth";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refreshUser } = useAuth();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const handleSuccess = async () => {
      try {
        // Refresh user data to get updated subscription info
        await refreshUser();
        toast.success("Payment successful! Your subscription has been activated.");
      } catch (error) {
        console.error("Error refreshing user data:", error);
        toast.error("Error updating subscription information.");
      }
    };

    if (sessionId) {
      handleSuccess();
    }
  }, [sessionId, refreshUser]);

  return (
    <div className="min-h-screen bg-[#0B1426] text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-gray-400 mb-6">
          Thank you for your purchase. Your subscription has been activated successfully.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;