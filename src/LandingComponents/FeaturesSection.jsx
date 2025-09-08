import React from 'react'
import Chat from "../assets/images/chat.png";
import Case from "../assets/images/case.png";
import Document from "../assets/images/document.png";
import Jurry from "../assets/images/jurry.png";


const FeaturesSection = () => {
  return (
    <section className="relative z-10 flex flex-col items-center gap-2 md:py-[80px] py-16 md:px-16 p-5 bg-black">
    <div className="flex flex-col items-center gap-20 w-full max-w-7xl">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 max-w-[584px]">
        <h2
          className="text-center font-['Outfit'] text-4xl lg:text-[56px] font-medium bg-clip-text text-transparent"
          style={{
            background: 'radial-gradient(101.8% 55.56% at 69.21% 88.33%, #FFF 12.5%, #C7C7C7 31.25%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Features built for the way lawyers work
        </h2>
        <p className="text-[#B7B7B7] text-center font-['Outfit'] text-lg font-normal leading-[27px] max-w-[541px]">
          Obie brings AI-powered research, drafting, and prep—made for attorneys and law students.
        </p>
      </div>

      {/* Features Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 w-full justify-center">
        {/* AI Chat Assistant Card */}
        <div className=" rounded-xl bg-[#0F0F0F] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] border border-transparent hover:border-[#FFAE47]/40">
          
            <div className="h-[200px]">
              <img
                src={Chat}
                alt="AI Chat Dashboard"
                className="mx-auto h-[-webkit-fill-available]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-white font-['Outfit'] text-2xl font-medium leading-9">
                AI Chat Assistant
              </h3>
              <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6">
                Get rapid case analysis through our smart chat interface.
              </p>
            </div>
         
        </div>

        {/* Document Analysis Card */}
        <div className=" rounded-xl bg-[#0F0F0F]  transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] border border-transparent hover:border-[#FFAE47]/40">
          <div className="h-[200px]">
            <img
              src={Document}
              alt="Document Analysis Interface"
              className="mx-auto h-[-webkit-fill-available]"
            />
            </div>
            <div className="p-5">
              <h3 className="text-white font-['Outfit'] text-2xl font-medium leading-9">
                Document Analysis
              </h3>
              <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6">
                AI-powered document review faster, cited, export-ready.
              </p>
            </div>
        
        </div>

        {/* Case Strategies Card */}
        <div className="rounded-xl bg-[#0F0F0F] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] border border-transparent hover:border-[#FFAE47]/40">
          <div className="h-[200px]">
            <img
              src={Case}
              alt="Case Strategies Dashboard"
              className="mx-auto h-[-webkit-fill-available]"
            /> </div>
            <div className="p-5">
              <h3 className="text-white font-['Outfit'] text-2xl font-medium leading-9">
                Case Strategies
              </h3>
              <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6 max-w-[265px]">
                Map the case from every perspective and out-prepare opposing counsel.
              </p>
            </div>
         
        </div>

        {/* Jury Selection Card */}
        <div className=" rounded-xl bg-[#0F0F0F]  transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(117,39,170,0.35)] border border-transparent hover:border-[#FFAE47]/40">
          <div className="h-[200px]">
          <img
              src={Jurry}
              alt="Case Strategies Dashboard"
              className="mx-auto h-[-webkit-fill-available]"
            />  </div>
           
            <div className="p-5">
              <h3 className="text-white font-['Outfit'] text-2xl font-medium leading-9">
                Jury Selection
              </h3>
              <p className="text-[#B7B7B7] font-['Outfit'] text-base font-normal leading-6">
                Data-driven voir dire that saves time and sharpens strategy.
              </p>
            </div>
        
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection