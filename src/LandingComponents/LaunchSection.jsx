import React from 'react';
import DashboardLaunch from "../assets/images/dashboard-launch.png";

const LaunchSection = () => {
  return (
    <section className="relative z-10 flex w-full justify-center items-center py-16 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, #1F1F1F -6.59%, #141414 7.55%, rgba(0, 0, 0, 0) 52.94%, rgba(2, 3, 10, 0) 63.8%)'
        }}
      />
      
      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 flex flex-col items-start gap-5 md:gap-12">
          {/* Badge */}
          <div className="flex py-[6px] px-4 justify-center items-center gap-2 rounded-[32px] border border-[#FFAE47]">
            <span
              className="font-['Outfit'] text-base font-normal leading-6 bg-clip-text text-transparent"
              style={{
                background: 'radial-gradient(40.83% 41.66% at 40.82% 58.33%, #FFF 0%, #666 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Pick a path
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-6 w-full">
            <h2
              className="font-['Outfit'] text-3xl md:text-4xl lg:text-[56px] font-medium md:leading-[66px] bg-clip-text text-transparent w-full"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, #FFF 0%, #999 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Launch your first prompt
            </h2>
            <p className="text-[#B7B7B7] font-['Outfit'] text-lg font-normal leading-[27px] w-full max-w-md">
              Trusted by attorneys & students—join them today and get court-ready faster.
            </p>
          </div>

          {/* Button */}
          <button
            className="flex py-3 px-7 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-lg font-normal leading-[27px] transition-transform hover:scale-105"
            style={{
              boxShadow: '0 0 180px 0 rgba(153, 23, 255, 0.25), 0 0 0 0 rgba(255, 255, 255, 0.07), 0 -2px 8px 0 rgba(0, 0, 0, 0.20) inset, 0 1px 2px 0 rgba(255, 255, 255, 0.41) inset'
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right Dashboard Mockup */}
        <div className="w-full lg:w-3/5 flex justify-center items-center relative">
          <div className="relative w-full max-w-2xl">
            <div
              className="w-full  md:h-80 lg:h-96 rounded-2xl lg:rounded-3xl"
             
            >
              {/* Dashboard Image */}
              <img
                src={DashboardLaunch}
                alt="Dashboard Chat Interface"
              
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;