import React from 'react'
import { Mail } from 'lucide-react';
import { MapPinned } from 'lucide-react';
import Facebook from "../assets/images/facebook.png"
import Instagram from "../assets/images/insta.png"
import Linkdin from "../assets/images/linkdin.png"
import Twitter from "../assets/images/twitter.png"

const FooterSection = () => {
  return (
    <footer
    className=" backdrop-blur-md bg-[linear-gradient(180deg,rgba(2,3,10,0)_-3.5%,rgba(244,120,31,0.3)_53.7%,rgba(117,39,170,0.3)_82.56%,rgba(199,73,125,0.31)_96.91%,#000000_111.25%)]  px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-8 lg:py-16"
 
  >

    <div className="w-full">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-start text-left">
         
          
            <span className="text-sm mb-2 text-[32px] font-normal text-white">Bearister.ai</span>
        
          <p className="text-xs md:text-sm text-[#B7B7B7] mb-3 md:mb-4 leading-relaxed max-w-sm mx-auto lg:mx-0">
            Obie by BearisterAI is an AI co-counsel for attorneys and law students—research, drafting, and trial prep in one workspace.
          </p>
          <button className=" px-4 md:px-7 py-2 md:py-3  rounded-xl bg-white text-[#202939] font-['Outfit'] text-xs md:text-base font-normal leading-5 md:leading-6 hover:bg-white/90 transition-all duration-300 shadow-[0_0_180px_0_rgba(153,23,255,0.25),0_0_0_0_rgba(255,255,255,0.07),0_-2px_8px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(255,255,255,0.41)_inset] w-auto ">Get Started</button>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid grid-cols-2 gap-6 md:gap-8">
  {/* Product */}
  <div className="flex flex-col items-start text-left">
    <h4 className="font-semibold mb-2 md:mb-4 text-white text-sm md:text-base">Product</h4>
    <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-[#B7B7B7] w-full">
      <li className="flex justify-start">
        <a href="#" className="hover:text-white transition-colors block py-0.5 md:py-1">Features</a>
      </li>
      <li className="flex justify-start">
        <a href="#" className="hover:text-white transition-colors block py-0.5 md:py-1">Pricing</a>
      </li>
      <li className="flex justify-start">
        <a href="#" className="hover:text-white transition-colors block py-0.5 md:py-1">FAQ</a>
      </li>
      <li className="flex justify-start">
        <a href="#" className="hover:text-white transition-colors block py-0.5 md:py-1">Mobile App</a>
      </li>
    </ul>
  </div>

  {/* Legal */}
  <div className="flex flex-col items-start text-left">
    <h4 className="font-semibold mb-2 md:mb-4 text-white text-sm md:text-base">Legal</h4>
    <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-[#B7B7B7] w-full">
      <li className="flex justify-start">
        <a href="#" className="hover:text-white transition-colors block py-0.5 md:py-1">Terms & Conditions</a>
      </li>
      <li className="flex justify-start">
        <a href="#" className="hover:text-white transition-colors block py-0.5 md:py-1">Privacy Policy</a>
      </li>
      <li className="flex justify-start">
        <a href="#" className="hover:text-white transition-colors block py-0.5 md:py-1">Workflow</a>
      </li>
    </ul>
  </div>
</div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-start text-left">
          <h4 className="font-semibold mb-2 md:mb-4 text-white text-sm md:text-base">Contact Us</h4>
          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-[#B7B7B7] w-full">
            <li className="flex justify-start gap-3"><Mail className='text-sm'/> support@bearister.ai</li>
            <li className="flex justify-start gap-3 lg:text-left"><MapPinned className='text-sm'/> BearisterAI LLC 2108 N ST #17637 Sacramento, CA 95816</li>
           
          </ul>
          <div className="flex gap-1.5 md:gap-2 mt-3 md:mt-4 justify-center lg:justify-start w-full">
           <img src={Facebook} alt="" />
           <img src={Instagram} alt="" />
           <img src={Linkdin} alt="" />
           <img src={Twitter} alt="" />
          </div>
        </div>
        </div>
        
        {/* Copyright Notice */}
        <div className="border-t border-gray-700/30 mt-6 md:mt-8 pt-4 md:pt-6">
          <p className="text-xs md:text-sm text-[#B7B7B7] text-center">
            2025 © bearister.ai. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default FooterSection