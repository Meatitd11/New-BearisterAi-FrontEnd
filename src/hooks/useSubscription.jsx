import { useState } from "react";
import { toast } from "react-toastify";
import axiosAuth from "../utils/axiosAuth";

const useSubscription = () => {
  const [loading, setLoading] = useState(false);
  const [freePlanActivated, setFreePlanActivated] = useState(false);

  const createFreeSubscription = async () => {
    setLoading(true);
    try {
      const response = await axiosAuth.post("/auth/create-free-subscription");
      setFreePlanActivated(true);
      toast.success("Free subscription activated successfully!");
      return response.data;
    } catch (error) {
      console.error("Error creating free subscription:", error);
      const errorMessage = error.response?.data?.detail || "Failed to activate free subscription";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const createCheckoutSession = async (planType) => {
    setLoading(true);
    try {
      const response = await axiosAuth.post(`/auth/create-checkout-session/${planType}`);
      
      // Redirect to Stripe Checkout
      if (response.data.checkout_url) {
        window.location.href = response.data.checkout_url;
      } else {
        throw new Error("No checkout URL received");
      }
      
      return response.data;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      const errorMessage = error.response?.data?.detail || "Failed to create checkout session";
      toast.error(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const checkPaymentStatus = async (sessionId) => {
    try {
      const response = await axiosAuth.get(`/auth/payment-status/${sessionId}`);
      return response.data;
    } catch (error) {
      console.error("Error checking payment status:", error);
      throw error;
    }
  };

  return {
    loading,
    freePlanActivated,
    createFreeSubscription,
    createCheckoutSession,
    checkPaymentStatus,
    setFreePlanActivated
  };
};

export default useSubscription;