import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  User,
  Shield,
  Sparkles,
  Bell,
  Database,
  ArrowLeft,
  CircleCheck ,
  X,
  Zap,
  FileText,
  Calendar,
  CreditCard,
  Crown,
  Star
} from "lucide-react";
import Logo from "../assets/images/logo.png";
import axiosAuth from "../utils/axiosAuth";

const SubscriptionLimits = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [usageData, setUsageData] = useState(null);
  const [activePlan, setActivePlan] = useState("Basic Free");

  // Plan definitions with features and limits
  const plans = {
    "Basic Free": {
      price: "$0/month",
      messageLimit: 250,
      documentLimit: 4,
      features: [
       
      ],
      missingFeatures: [
       
      ],
      description: "Unlock your legal edge with powerful tools for professionals and students — all for just $20/month with BearisterAI Plus"
    },
    "Obie Basic": {
      price: "$10/month",
      messageLimit: 600,
      documentLimit: 12,
      features: [
        "600 Message Cap",
        "12 Document Uploads/mo",
        "Detailed Law Student Outlines (Exportable)",
        "Police Report Analysis",
        "Cross-Examination Builder",
        "Voir Dire Question Builder",
        "Juror Profile Creator",
        "Everything in Basic"
      ],
      missingFeatures: [
      
      ],
      description: "Thanks for subscribing to BearisterAI Obie Basic! Your Obie Basic plan includes:"
    },
    "Obie Core": {
      price: "$20/month",
      messageLimit: 1000,
      documentLimit: 20,
      features: [
        "1000 Message Cap",
        "20 Document Uploads/mo",
        "Detailed Law Student Outlines (Exportable)",
        "Detailed Motion Drafting (Case-tailored)",
        "Batch Upload/Multi-file Search",
        "Everything in Plus"
      ],
      missingFeatures: [],
      description: "Thanks for subscribing to BearisterAI Obie Core! Your Obie Core plan includes:"
    }
  };

  // Fetch subscription and usage data
  useEffect(() => {
    const fetchSubscriptionData = async () => {
      try {
        setLoading(true);
        const response = await axiosAuth.get("/auth/subscription-usage");
        setSubscriptionData(response.data.subscription);
        setUsageData(response.data.usage);
        setActivePlan(response.data.subscription?.product_name || "Basic Free");
      } catch (error) {
        console.error("Error fetching subscription data:", error);
        toast.error("Failed to fetch subscription data");
        
        // Fallback data if API fails
        setSubscriptionData({
          status: "active",
          start_date: "2025-09-06T16:47:50.448301",
          product_name: "Basic Free",
          formatted_amount: "$0.00 USD"
        });
        
        setUsageData({
          text_prompt_count: 19,
          file_prompt_count: 0
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptionData();
  }, []);

  const settingsMenuItems = [
    {
      name: "Account",
      path: "/profile-settings",
      icon: <User size={25} strokeWidth={1.5} />,
      active: false,
    },
    {
      name: "Security & Access",
      path: "/security-settings",
      icon: <Shield size={25} strokeWidth={1.5} />,
      active: false,
    },
    {
      name: "Pricing & Plans",
      path: "/pricing-plans",
      icon: <Sparkles size={25} strokeWidth={1.5} />,
      active: false,
    },
    {
      name: "Subscription & Usage",
      path: "/subscription",
      icon: <Sparkles size={25} strokeWidth={1.5} />,
      active: true,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <Bell size={25} strokeWidth={1.5} />,
    },
    {
      name: "Data Controls",
      path: "/data-controls",
      icon: <Database size={25} strokeWidth={1.5} />,
    },
  ];

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get current plan limits
  const getPlanLimits = () => {
    return plans[activePlan] || plans["Basic Free"];
  };

  // Calculate usage percentages
  const currentPlan = getPlanLimits();
  const messagePercentage = usageData ? 
    (usageData.text_prompt_count / currentPlan.messageLimit) * 100 : 0;
  const documentPercentage = usageData ? 
    (usageData.file_prompt_count / currentPlan.documentLimit) * 100 : 0;
  
  // Convert percentage to stroke-dashoffset (314 is circumference of circle with r=50)
  const messageOffset = 314 - (314 * messagePercentage / 100);
  const documentOffset = 314 - (314 * documentPercentage / 100);

  if (loading) {
    return (
      <div className="flex h-screen bg-[#0B1426]">
        <div className="w-64 bg-[#1E293B] border-r border-[#334155] p-4">
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="BearisterAI Logo"
              className="w-6 h-6 rounded-md object-cover"
            />
            <span className="text-base font-semibold text-white">
              BearisterAI
            </span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F97316] mx-auto mb-4"></div>
            <p className="text-gray-400">Loading subscription data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0B1426]">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E293B] border-r border-[#334155] p-4">
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="BearisterAI Logo"
            className="w-6 h-6 rounded-md object-cover"
          />
          <span className="text-base font-semibold text-white">
            BearisterAI
          </span>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center mt-[1rem] space-x-2 text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Chat</span>
        </button>
        <nav className="space-y-1 mt-[1rem]">
          {settingsMenuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${
                item.active
                  ? "bg-[#334155] text-white border-l-2 border-[#F97316]"
                  : "text-gray-400 hover:text-white hover:bg-[#334155]"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Subscription & Usage</h1>
            <p className="text-gray-400">
              Manage your subscription and track your usage
            </p>
          </div>

          {/* Current Plan Box */}
          <div className="bg-[#1E293B] rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-3">
           <div>
           <div className="flex items-center mb-2">
                  <h3 className="text-white font-medium text-lg mr-3">
                  Subscription
                    
                  </h3>
                  <span className={"px-2 py-1 text-xs rounded-4xl bg-[#364152] text-white"}>
                   {subscriptionData?.product_name || "Basic Free"}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                
                  
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-[#F97316] mr-2" />
                    <span className="text-gray-400 text-sm">
                      Started on {subscriptionData?.start_date ? formatDate(subscriptionData.start_date) : "Sep 6, 2025"}
                    </span>
                  </div>
                </div>
            </div>        
                <button 
                  onClick={() => navigate("/pricing-plans")}
                  className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg font-medium transition-colors"
                >
                  Change Plan
                </button>
               
              </div>
            <div className="flex items-center justify-between bg-[#0B1426] rounded-lg p-4">
              <div className="flex-1">
             
                
                <div className="mt-4">
                  <p className="text-gray-300 text-sm mb-2">{currentPlan.description}</p>
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center mb-1">
                      <CircleCheck  className="w-4 h-4 text-[#CDD5DF] mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {currentPlan.missingFeatures.length > 0 && (
                    <div className="flex items-center">
                      <X className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-gray-400 text-sm">
                        {currentPlan.missingFeatures[0]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
           
            </div>
          </div>

          {/* Usage Overview */}
          <div className="bg-[#1E293B] rounded-lg p-6 mb-6">
            <h3 className="text-white font-semibold text-base mb-2">Monthly Usage Overview</h3>
            <p className="text-gray-400 text-sm mb-6">
              Your message and document limits reset next month — or upgrade now to get more messages, uploads, and powerful features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Message Usage */}
              <div className="bg-[#0B1426] rounded-lg p-3 flex flex-col items-center justify-center">
                <div className="mb-3">                 
                  <p className="text-gray-300 font-bold">Message Usage</p>
                  <p className="text-gray-400 text-sm">
                  {currentPlan.messageLimit - (usageData?.text_prompt_count || 0)} Messages Remaining
                </p>
                </div>
               
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-gray-700"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="transparent"
                      r="50"
                      cx="56"
                      cy="56"
                    />
                    <circle
                      className="text-[#fff]"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="transparent"
                      r="50"
                      cx="56"
                      cy="56"
                      strokeDasharray="314"
                      strokeDashoffset={messageOffset}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {usageData?.text_prompt_count || 0}
                    </span>
                    <span className="text-gray-400 text-sm">/{currentPlan.messageLimit}</span>
                  </div>
                </div>
            
              </div>

              {/* Document Uploads */}
              <div className="bg-[#0B1426] rounded-lg p-6 flex flex-col items-center justify-center">
               
                <div className="mb-3">                 
                  <p className="text-gray-300 font-bold">Document Uploads</p>
                  <p className="text-gray-400 text-sm">
                  {currentPlan.documentLimit - (usageData?.file_prompt_count || 0)} Uploads Remaining
                </p>
                </div>
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-gray-700"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="transparent"
                      r="50"
                      cx="56"
                      cy="56"
                    />
                    <circle
                      className="text-[#F97316]"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="transparent"
                      r="50"
                      cx="56"
                      cy="56"
                      strokeDasharray="314"
                      strokeDashoffset={documentOffset}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {usageData?.file_prompt_count || 0}
                    </span>
                    <span className="text-gray-400 text-sm">/{currentPlan.documentLimit}</span>
                  </div>
                </div>
               
              </div>
            </div>
          </div>         
        </div>
      </div>
    </div>
  );
};

export default SubscriptionLimits;