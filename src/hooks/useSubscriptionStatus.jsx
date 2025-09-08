import { useState } from "react";
import { toast } from "react-toastify";
import axiosAuth from "../utils/axiosAuth";

const useSubscriptionStatus = () => {
  const [loading, setLoading] = useState(false);
  const [fetchingSubscription, setFetchingSubscription] = useState(true);
  const [subscriptionData, setSubscriptionData] = useState({
    status: "",
    start_date: "",
    product_name: "",
    formatted_amount: "",
    usage: {
      text_prompt_count: 0,
      file_prompt_count: 0,
    },
  });

  // Fetch subscription
  const fetchSubscription = async () => {
    setFetchingSubscription(true);
    try {
      const { data } = await axiosAuth.get("/auth/subscription-usage");

      setSubscriptionData({
        status: data.subscription?.status || "",
        start_date: data.subscription?.start_date || "",
        product_name: data.subscription?.product_name || "",
        formatted_amount: data.subscription?.formatted_amount || "",
        usage: data.subscription?.usage || {
          text_prompt_count: 0,
          file_prompt_count: 0,
        },
      });

      return data.subscription;
    } catch (error) {
      console.error("Error fetching subscription:", error);
      toast.error(error.response?.data?.detail || "Failed to fetch subscription data");
      throw error;
    } finally {
      setFetchingSubscription(false);
    }
  };

  return {
    loading,
    fetchingSubscription,
    subscriptionData,
    setSubscriptionData,
    fetchSubscription,
  };
};

export default useSubscriptionStatus;
