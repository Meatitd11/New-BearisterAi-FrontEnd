import React from 'react';
import Dashboard1 from "../assets/images/dashboard1.png";
import Dashboard2 from "../assets/images/dashboard2.png";
import Dashboard3 from "../assets/images/dashboard3.png";

const TestDriveSection = () => {
  return (
    <section
      className="relative z-10 flex flex-col items-center gap-2 py-16 px-4 md:px-8 lg:px-16"
      style={{
        background: 'linear-gradient(180deg, #171717 3.94%, #121212 19.56%, #0A0A0A 59.78%, #02030A 100%)'
      }}
    >
      <div className="flex flex-col items-center gap-10 lg:gap-20 w-full max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 md:gap-10 max-w-[476px]">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2
              className="text-center font-['Outfit'] text-3xl md:text-4xl lg:text-[56px] font-medium lg:leading-[66px] bg-clip-text text-transparent"
              style={{
                background: 'radial-gradient(156.65% 197.21% at 29.1% 0%, #FFF 0%, #B2B2B3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              1-Minute Test Drive
            </h2>
            <p className="text-[#B7B7B7] text-center font-['Outfit'] text-base md:text-lg font-normal leading-6 md:leading-[27px] w-full">
              Pick a task run a demo prompt see cited output.
            </p>
          </div>
          <button
            className="flex py-3 px-7 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Manrope'] text-base font-bold leading-6 transition-transform hover:scale-105"
            style={{
              boxShadow: '0 0 180px 0 rgba(153, 23, 255, 0.25), 0 0 0 0 rgba(255, 255, 255, 0.07), 0 -2px 8px 0 rgba(0, 0, 0, 0.20) inset, 0 1px 2px 0 rgba(255, 255, 255, 0.41) inset'
            }}
          >
            Get Started
          </button>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-8">
          {/* Sample Transcript - Large Left Card */}
          <div className="w-full lg:w-[52%] bg-[#0D0D0D] rounded-[24px] p-6 md:p-8 lg:p-10 flex flex-col items-center gap-6 md:gap-8 relative overflow-hidden">
            <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-md text-center">
              <h3 className="text-white font-['Outfit'] text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                Sample Transcript
              </h3>
              <p className="text-[#B7B7B7] font-['Outfit'] text-sm md:text-base font-normal leading-5 md:leading-6">
                Ask a legal question get cited answers (CA & Federal) in seconds.
              </p>
            </div>
            
            <div className=" w-full flex justify-center">
              <img
                src={Dashboard3}
                alt="Dashboard Chat Interface"
                className="w-full max-w-lg rounded-[10px] h-[220px] "
               
              />
             
            </div>
          </div>

          {/* Right Column - Two Smaller Cards */}
          <div className="w-full lg:w-[48%] flex flex-col gap-6">
            {/* Document Analysis Card */}
            <div className="w-full bg-[#0D0D0D] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 overflow-hidden">
              <div className="md:w-1/2 flex flex-col gap-2 md:gap-4">
                <h3 className="text-white font-['Outfit'] text-xl md:text-2xl lg:text-3xl font-medium leading-tight">
                  Document Analysis
                </h3>
                <p className="text-[#B7B7B7] font-['Outfit'] text-sm md:text-base font-normal leading-5 md:leading-6">
                  Upload a police report/contract/transcript see a sourced issue map and summary.
                </p>
              </div>
              
              <div className="md:w-1/2 ">
                <img
                  src={Dashboard1}
                  alt="Document Analysis Dashboard"
                  className="w-full rounded-[10px]"
                 
                />
               
              </div>
            </div>

            {/* Trial Prep Card */}
            <div className="w-full bg-[#0D0D0D] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8  overflow-hidden">
              <div className="md:w-1/2 flex flex-col gap-2 md:gap-4">
                <h3 className="text-white font-['Outfit'] text-xl md:text-2xl lg:text-3xl font-medium leading-tight">
                  Trial Prep
                </h3>
                <p className="text-[#B7B7B7] font-['Outfit'] text-sm md:text-base font-normal leading-5 md:leading-6">
                  Voir dire, juror profile cards, and evidence linked cross exam ready in minutes.
                </p>
              </div>
              
              <div className="md:w-1/2 ">
                <img
                  src={Dashboard2}
                  alt="Trial Prep Dashboard"
                  className="w-full rounded-[10px]"
                
                />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestDriveSection;