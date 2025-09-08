import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { toast } from 'react-toastify';
import useSubscription from '../hooks/useSubscription';
import useAuth from '../hooks/useAuth';

const PricingSection = () => {
  const navigate = useNavigate();
  const { loading, freePlanActivated, createFreeSubscription, createCheckoutSession } = useSubscription();
  const { user } = useAuth();
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [activatingPlan, setActivatingPlan] = useState(null);

 

  const handleSubscribe = async (planType) => {
    const accessToken = localStorage.getItem('access_token');
  
    if (!accessToken) {
      navigate('/signin'); // redirect on button click instead of page load
      return;
    }
  
    setActivatingPlan(planType);
  
    try {
      if (planType === "free") {
        await createFreeSubscription();
        toast.success("Free plan activated successfully!");
      } else {
        await createCheckoutSession(planType);
        // Redirected to Stripe automatically
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Failed to process subscription");
    } finally {
      setActivatingPlan(null);
    }
  };
  

  const isCurrentPlan = (planId) => {
    return user?.subscription?.plan_type === planId;
  };

  const isFreePlanActivated = (planId) => {
    return planId === "free" && (freePlanActivated || isCurrentPlan("free"));
  };

  return (
    <section className="relative z-10 md:py-24 py-16 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[56px] font-semibold mb-3 md:w-[50%] mx-auto bg-clip-text text-transparent"
              style={{
                background: 'radial-gradient(120% 140% at 50% 0%, #FFFFFF 0%, #B9B9BA 70%, #8F8F91 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>The plan that fits your work</h2>
              
          <p className=" text-[18px]  text-[#CFCFCF] mb-10 md:w-[50%] mx-auto">Find your fit—plans for every legal workflow, from research and drafting to trial prep.</p>
         
          <div className='flex items-center'> 
            <div className="flex items-center bg-[#23262f] w-[300px] px-2 py-2 rounded-full mx-auto justify-center gap-3 mb-10">
              <button 
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                  billingPeriod === "monthly"
                    ? "bg-white text-black"
                    : "text-[#D6D6D6] hover:text-white hover:bg-white/5"
                }`}
              >
                Monthly
              </button>
              <button 
               
                className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                  billingPeriod === "yearly"
                    ? "bg-white text-black"
                    : "text-[#D6D6D6] hover:text-white hover:bg-white/5"
                }`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <Card className="border border-white/10 p-4 backdrop-blur-xl" style={{ backgroundColor: '#0F0F0F'}}>
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-2 text-white/90">Basic</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">Free</span>
              </div>
              <button 
                onClick={() => handleSubscribe('free')}
                disabled={loading || activatingPlan === 'free'}
                className=" w-full mb-6 text-[16px] bg-white rounded-full p-2 text-gray-900 hover:bg-gray-100 shadow-[0_0_40px_rgba(255,255,255,0.07)] disabled:opacity-50 disabled:cursor-not-allowed  cursor-pointer"
              >
                {activatingPlan === 'free' ? 'Processing...' : 
                 isFreePlanActivated('free') ? 'Plan Activated' : 
                 'Start for Free'}
              </button>
              <ul className="space-y-3 text-sm text-gray-300/90">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  250 Message Cap
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  4 Document Uploads/mo
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Detailed Law Student Outlines
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Case Law Research
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Save Past Chats/Research
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Simple Motion Drafting (Template)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Plus Plan */}
          <div className="p-4 relative backdrop-blur-xl rounded-xl border-[2px] border-solid [border-image:radial-gradient(86%_93.75%_at_50%_100%,#FFAE47_0%,#C7497D_58.08%,#7527AA_100%)_1] bg-[linear-gradient(160.59deg,rgba(246,135,55,0.32)_0.63%,rgba(199,73,125,0.32)_8.47%,rgba(117,39,170,0.32)_12.65%,#0F0F0F_21.37%)]">
          
            <CardContent className="p-0 relative z-10 ">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">Plus</h3>
                <div 
                  className="text-white text-xs px-4 py-2 rounded-full shadow-[0_8px_30px_rgba(255,174,71,0.5)] font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 55%, #f97316 100%)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  Popular
                </div>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">${billingPeriod === 'yearly' ? '16' : '20'}</span>
                <span className="text-gray-200">/{billingPeriod === 'yearly' ? 'Year' : 'Month'}</span>
              </div>
              <button 
                onClick={() => handleSubscribe('basic')}
                disabled={loading || isCurrentPlan('basic') || activatingPlan === 'basic'}
                className="w-full mb-6 text-[16px] p-2 rounded-full text-white shadow-[0_12px_40px_rgba(255,174,71,0.45)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  border: 'none'
                }}
              >
                {activatingPlan === 'basic' ? 'Processing...' : 
                 isCurrentPlan('basic') ? 'Current Plan' : 
                 'Get Plus'}
              </button>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  600 Message Cap
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  12 Document Uploads/mo
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Detailed Law Student Outlines (Exportable)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Police Report Analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Cross-Examination Builder
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Voir Dire Question Builder
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Jury Profile Creator
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Everything in Basic
                </li>
              </ul>
            </CardContent>
          </div>

          {/* Pro Plan */}
          <Card className="bg-[#111214]/80 border border-white/10 p-4 backdrop-blur-xl" style={{ backgroundColor: '#0F0F0F'}} >
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-2 text-white/90">Pro</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">${billingPeriod === 'yearly' ? '48' : '60'}</span>
                <span className="text-gray-300">/{billingPeriod === 'yearly' ? 'Year' : 'Month'}</span>
              </div>
              <button 
                onClick={() => handleSubscribe('core')}
                disabled={loading || isCurrentPlan('core') || activatingPlan === 'core'}
                className="w-full mb-6 text-[16px] p-2 rounded-full text-white shadow-[0_10px_36px_rgba(255,174,71,0.35)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  border: 'none'
                }}
              >
                {activatingPlan === 'core' ? 'Processing...' : 
                 isCurrentPlan('core') ? 'Current Plan' : 
                 'Get Pro'}
              </button>
              <ul className="space-y-3 text-sm text-gray-300/90">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  1000 Message Cap
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  20 Document Uploads/mo
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Detailed Law Student Outlines (Exportable)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Detailed Motion Drafting (Case-tailored)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Batch Upload/Multi-file Search
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-transparent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Everything in Plus
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;