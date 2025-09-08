import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";
import useSubscription from "../hooks/useSubscription";
import useAuth from "../hooks/useAuth";
import { CircleCheck } from 'lucide-react';

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const { loading, freePlanActivated, createFreeSubscription, createCheckoutSession, setFreePlanActivated } = useSubscription();
  const { user, refreshUser } = useAuth();
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [activatingPlan, setActivatingPlan] = useState(null);

  // Check if user already has free plan
  useEffect(() => {
    if (user?.subscription?.plan_type === "free") {
      setFreePlanActivated(true);
    }
  }, [user, setFreePlanActivated]);

  const handleSubscribe = async (planType) => {
    setActivatingPlan(planType);
    
    try {
      if (planType === "free") {
        await createFreeSubscription();
        // Refresh user data to get updated subscription info
        await refreshUser();
      } else {
        await createCheckoutSession(planType);
        // User will be redirected to Stripe, no further action needed here
      }
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setActivatingPlan(null);
    }
  };

  const plans = [
    {
      id: "free",
      name: "Basic",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started",
      features: [
        '250 Message Cap',
        '4 Document Uploads/mo',
        'Detailed Law Student Outlines',
        'Case Law Research',
        'Save Past Chats/Research',
        'Simple Motion Drafting (Template)'
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline",
      popular: false
    },
    {
      id: "basic",
      name: "Plus",
      price: { monthly: 10, yearly: 96 },
      description: "For growing practices",
      features: [
        '600 Message Cap',
        '12 Document Uploads/mo',
        'Detailed Law Student Outlines (Exportable)',
        'Police Report Analysis',
        'Cross-Examination Builder',
        'Voir Dire Question Builder',
        'Juror Profile Creator',
        'Everything in Basic'
      ],
      buttonText: "Upgrade to Plus",
      buttonVariant: "primary",
      popular: true
    },
    {
      id: "core",
      name: "Pro",
      price: { monthly: 20, yearly: 192 },
      description: "For established practices",
      features: [
        '1000 Message Cap',
        '20 Document Uploads/mo',
        'Detailed Law Student Outlines (Exportable)',
        'Detailed Motion Drafting (Case-tailored)',
        'Batch Upload/Multi-file Search',
        'Everything in Plus'
      ],
      buttonText: "Upgrade to Pro",
      buttonVariant: "primary",
      popular: false
    }
  ];

  const getPrice = (plan) => {
    const price = billingPeriod === "yearly" ? plan.price.yearly : plan.price.monthly;
    return price === 0 ? "Free" : `$${price}`;
  };

  const getBillingPeriodText = (plan) => {
    if (plan.price.monthly === 0) return "";
    return billingPeriod === "yearly" ? "/year" : "/month";
  };

  const getSavings = (plan) => {
    if (plan.price.monthly === 0 || billingPeriod === "monthly") return null;
    const yearlySavings = (plan.price.monthly * 12) - plan.price.yearly;
    return `Save $${yearlySavings} yearly`;
  };

  const isCurrentPlan = (planId) => {
    return user?.subscription?.plan_type === planId;
  };

  const isFreePlanActivated = (planId) => {
    return planId === "free" && (freePlanActivated || isCurrentPlan("free"));
  };

  return (
    <div className="min-h-screen bg-[#0B1426] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
            Upgrade Your Plan
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Select the perfect plan for your legal practice needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 p-1 rounded-4xl bg-[#1E293B]">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-4xl text-sm font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-[#374253] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
            
              className={`px-4 py-2 rounded-4xl text-sm font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-[#374253] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly <span className="ml-1 text-orange-300">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center items-start">
          {plans.map((plan) => {
            const savings = getSavings(plan);
            const currentPlan = isCurrentPlan(plan.id);
            const freeActivated = isFreePlanActivated(plan.id);
            const isProcessing = activatingPlan === plan.id;
            
            return (
              <div
                key={plan.id}
                className={`relative p-6 border transition-all duration-200 hover:translate-y-[-4px] w-full max-w-md min-h-[600px] ${
                  plan.popular
                    ? "border-[2px] [border-image-source:radial-gradient(86%_93.75%_at_50%_100%,#FFAE47_0%,#C7497D_58.08%,#7527AA_100%)] [border-image-slice:1] [border-image-repeat:stretch] rounded-2xl shadow-lg shadow-orange-500/20"
                    : "border-[2px] border-[#334155] hover:[border-image-source:radial-gradient(86%_93.75%_at_50%_100%,#FFAE47_0%,#C7497D_58.08%,#7527AA_100%)] [border-image-slice:1] [border-image-repeat:stretch] rounded-2xl"
                } ${plan.popular ? "bg-gradient-to-b from-[#1E293B] to-[#0F172A]" : "bg-[#1E293B]"}`}
                
              >
                {/* Popular Badge */}
             

                <div className="flex justify-between">
                <div className="text-sm uppercase tracking-wider text-white mb-2">
                  {plan.name}
                </div>
                {plan.popular && (
                  <div className="">
                    <span className="p-6 [background:radial-gradient(86%_93.75%_at_50%_100%,#FFAE47_0%,#C7497D_58.08%,#7527AA_100%)] text-white text-xs px-3 py-1 rounded-full font-medium">
                     Popular
                    </span>
                  </div>
                )}</div>

                {/* Price */}
                <div className="text-3xl font-bold text-white mb-1">
                  {getPrice(plan)}
                  {plan.price.monthly > 0 && (
                    <span className="text-lg font-normal text-gray-400 ml-1">
                      {getBillingPeriodText(plan)}
                    </span>
                  )}
                </div>

                {/* Savings */}
                {savings && (
                  <div className="text-sm text-green-400 mb-4">
                    {savings}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Subscribe Button */}
                <button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={loading || currentPlan || freeActivated || isProcessing}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    currentPlan || freeActivated
                      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                      : plan.popular
                      ? "bg-[#f17512] hover:bg-[#f17512] text-white"
                      : "bg-[#334155] hover:bg-[#475569] text-white"
                  } ${(loading || isProcessing) ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isProcessing ? "Processing..." : 
                   currentPlan ? "Current Plan" : 
                   freeActivated ? "Plan Activated" : 
                   plan.buttonText}
                </button>

                {/* Features List */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                      <CircleCheck className="text-gray-300"/>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>All plans include 24/7 support and secure data storage</p>
          <p className="mt-1">Cancel or change your plan anytime</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;