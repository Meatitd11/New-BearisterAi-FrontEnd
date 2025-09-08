import React from 'react'
import { Link } from "react-router-dom";
import LeftIcons  from "../assets/images/left.png";
import RightIcons from "../assets/images/right.png";
import TopIcons from "../assets/images/top.png";
import BottomIcons from "../assets/images/bottom.png";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-10 px-4 sm:px-6 py-8 sm:py-12">
    {/* Main Heading */}
    <div className="flex flex-col items-center gap-4 max-w-4xl">
      <h1 
        className="text-center font-['Outfit'] text-4xl sm:text-6xl lg:text-7xl font-medium bg-clip-text text-transparent"
        style={{
          background: 'radial-gradient(101.8% 55.56% at 69.21% 88.33%, #D0D0D0 56.37%, #FFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Tools for the lawyers of tomorrow
      </h1>
      <p className="w-full max-w-[686px] text-[#D7D7D7] text-center font-['Outfit'] text-lg font-normal leading-[27px]">
        Research you can trust—backed by public case law. Drafts you can file with confidence, from first facts to final export.
      </p>
    </div>

    {/* Get Started button */}
    <Link to="/signup">
    <button 
      className="flex px-7 py-3 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-base font-normal leading-6 hover:bg-white/90 shadow-[0_0_180px_0_rgba(153,23,255,0.25),0_0_0_0_rgba(255,255,255,0.07),0_-2px_8px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(255,255,255,0.41)_inset]"
    >
      Get Started
    </button>
    </Link>
<div className='md:flex items-center'>
  <div className='md:w-[20%] md:block hidden'>
    <img src={LeftIcons} alt="" />
  </div>
 
  <div className='md:hidden block'>
    <img src={TopIcons} alt="" className='mx-auto'/>
  </div>


      {/* Main Chat Container */}
      <div
        className="flex flex-col items-center gap-2 rounded-[21px] p-4 sm:p-8 backdrop-blur-[85px] md:w-[80%]"
        style={{
          background: 'radial-gradient(86% 93.75% at 50% 100%, rgba(255, 174, 71, 0.3) 0%, rgba(199, 73, 125, 0.4) 58.08%, rgba(117, 39, 170, 0.5) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        {/* Chat Input */}
        <div
      className="flex flex-col items-start gap-4 sm:gap-6 w-full max-w-[728px] rounded-[24px] p-4 sm:p-6 backdrop-blur-[23px]"
      style={{
        background: 'rgba(199, 73, 125, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}
    >
      {/* Input Area */}
      <div className="flex items-center gap-2 w-full">
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 19L8 13.5L2.5 11L8 8.5L10.5 3L13 8.5L18.5 11L13 13.5L10.5 19ZM18.5 21L17.25 18.25L14.5 17L17.25 15.75L18.5 13L19.75 15.75L22.5 17L19.75 18.25L18.5 21Z" fill="url(#magicGradient)"/>
          <defs>
            <radialGradient id="magicGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.5 21) rotate(90) scale(16.875 17.1999)">
              <stop stopColor="#FFF6EB"/>
              <stop offset="0.580832" stopColor="#E4A7C0"/>
              <stop offset="1" stopColor="#E7CEF7"/>
            </radialGradient>
          </defs>
        </svg>
        <input 
          type="text" 
          placeholder="Ask Anything..." 
          className="text-[#FCFCFD] bg-transparent border-none outline-none font-medium text-base w-full placeholder-[#FCFCFD]"
        />
      </div>

      {/* Bottom Actions */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <div className="flex p-2 items-center gap-2 rounded-[24px] border border-white/15">
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7H7.5C4.73858 7 2.5 9.23858 2.5 12C2.5 14.7614 4.73858 17 7.5 17H9.5C12.2614 17 14.5 14.7614 14.5 12M17 17H17.5C20.2614 17 22.5 14.7614 22.5 12C22.5 9.23858 20.2614 7 17.5 7H15.5C12.7386 7 10.5 9.23858 10.5 12" stroke="#CDD5DF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div 
          className="flex p-[10px] justify-center items-center gap-2 rounded-[20px] cursor-pointer"
          style={{
            background: 'radial-gradient(86% 93.75% at 50% 100%, #FFAE47 0%, #C7497D 58.08%, #7527AA 100%)'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25036 9.99983H4.66702M4.59648 10.2427L2.65071 16.055C2.49785 16.5116 2.42142 16.7399 2.47627 16.8805C2.5239 17.0026 2.6262 17.0952 2.75244 17.1304C2.8978 17.171 3.11736 17.0722 3.55647 16.8746L17.4827 10.6078C17.9113 10.4149 18.1256 10.3185 18.1918 10.1845C18.2494 10.0681 18.2494 9.93155 18.1918 9.81516C18.1256 9.68119 17.9113 9.58475 17.4827 9.39188L3.55161 3.12293C3.11383 2.92593 2.89493 2.82742 2.74971 2.86783C2.6236 2.90292 2.5213 2.99524 2.47351 3.11711C2.41847 3.25744 2.49408 3.48526 2.64531 3.94088L4.59702 9.8211C4.62299 9.89936 4.63598 9.93848 4.64111 9.9785C4.64565 10.014 4.64561 10.05 4.64097 10.0855C4.63574 10.1255 4.62265 10.1646 4.59648 10.2427Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>

        {/* Quick Action buttons */}
        <div className="flex items-start gap-3 sm:gap-4 flex-wrap justify-center mt-4">
          <div 
            className="flex px-3 py-3 justify-center items-center gap-2 rounded-xl backdrop-blur-[40.5px]"
            style={{background: '#AC68A0'}}
          >
            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.08365 11.3334H7.08365M12.917 11.3334H17.917M10.0003 6.33341V18.0001M10.0003 6.33341C11.1509 6.33341 12.0836 5.40067 12.0836 4.25008M10.0003 6.33341C8.84972 6.33341 7.91698 5.40068 7.91698 4.25008M3.33365 18.0001L16.667 18.0001M3.33365 4.25009L7.91698 4.25008M7.91698 4.25008C7.91698 3.09949 8.84972 2.16675 10.0003 2.16675C11.1509 2.16675 12.0836 3.09949 12.0836 4.25008M12.0836 4.25008L16.667 4.25008M7.40068 12.447C7.06677 13.7256 5.93207 14.6667 4.58365 14.6667C3.23523 14.6667 2.10053 13.7256 1.76662 12.447C1.73933 12.3426 1.72569 12.2903 1.72438 12.0816C1.72357 11.9537 1.77112 11.6587 1.81208 11.5375C1.8789 11.3398 1.95124 11.2282 2.09591 11.005L4.58365 7.16675L7.07139 11.005C7.21606 11.2282 7.28839 11.3398 7.35522 11.5375C7.39618 11.6587 7.44373 11.9537 7.44292 12.0816C7.4416 12.2903 7.42796 12.3426 7.40068 12.447ZM18.234 12.447C17.9001 13.7256 16.7654 14.6667 15.417 14.6667C14.0686 14.6667 12.9339 13.7256 12.5999 12.447C12.5727 12.3426 12.559 12.2903 12.5577 12.0816C12.5569 11.9537 12.6044 11.6587 12.6454 11.5375C12.7122 11.3398 12.7846 11.2282 12.9292 11.005L15.417 7.16675L17.9047 11.005C18.0494 11.2282 18.1217 11.3398 18.1885 11.5375C18.2295 11.6587 18.2771 11.9537 18.2763 12.0816C18.2749 12.2903 18.2613 12.3426 18.234 12.447Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#E3E8EF] font-['Manrope'] text-sm font-semibold">Get Jury Instruction</span>
          </div>

          <div 
            className="flex px-3 py-3 justify-center items-center gap-2 rounded-xl backdrop-blur-[40.5px]"
            style={{background: '#AC68A0'}}
          >
            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6666 2.39136V5.83348C11.6666 6.30018 11.6666 6.53354 11.7574 6.7118C11.8373 6.8686 11.9648 6.99609 12.1216 7.07598C12.2999 7.16681 12.5332 7.16681 12.9999 7.16681H16.442M13.3333 11.3334H6.66659M13.3333 14.6667H6.66659M8.33325 8.00008H6.66659M11.6666 2.16675H7.33325C5.93312 2.16675 5.23306 2.16675 4.69828 2.43923C4.22787 2.67892 3.84542 3.06137 3.60574 3.53177C3.33325 4.06655 3.33325 4.76662 3.33325 6.16675V14.8334C3.33325 16.2335 3.33325 16.9336 3.60574 17.4684C3.84542 17.9388 4.22787 18.3212 4.69828 18.5609C5.23306 18.8334 5.93312 18.8334 7.33325 18.8334H12.6666C14.0667 18.8334 14.7668 18.8334 15.3016 18.5609C15.772 18.3212 16.1544 17.9388 16.3941 17.4684C16.6666 16.9336 16.6666 16.2335 16.6666 14.8334V7.16675L11.6666 2.16675Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#E3E8EF] font-['Manrope'] text-sm font-semibold">Draft a Motion</span>
          </div>

          <div 
            className="flex px-3 py-3 justify-center items-center gap-2 rounded-xl backdrop-blur-[40.5px]"
            style={{background: 'rgba(255, 255, 255, 0.15)'}}
          >
            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.50008 10.5001L9.16675 12.1667L12.9167 8.41675M6.11155 3.68233C6.78142 3.62887 7.41734 3.36546 7.92881 2.9296C9.12235 1.91246 10.8778 1.91246 12.0714 2.9296C12.5828 3.36546 13.2187 3.62887 13.8886 3.68233C15.4518 3.80707 16.6931 5.04837 16.8178 6.61155C16.8713 7.28142 17.1347 7.91734 17.5706 8.42881C18.5877 9.62235 18.5877 11.3778 17.5706 12.5714C17.1347 13.0828 16.8713 13.7187 16.8178 14.3886C16.6931 15.9518 15.4518 17.1931 13.8886 17.3178C13.2187 17.3713 12.5828 17.6347 12.0714 18.0706C10.8778 19.0877 9.12235 19.0877 7.92881 18.0706C7.41734 17.6347 6.78142 17.3713 6.11155 17.3178C4.54837 17.1931 3.30707 15.9518 3.18233 14.3886C3.12887 13.7187 2.86546 13.0828 2.4296 12.5714C1.41246 11.3778 1.41246 9.62235 2.4296 8.42881C2.86546 7.91734 3.12887 7.28142 3.18233 6.61155C3.30707 5.04837 4.54837 3.80707 6.11155 3.68233Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#E3E8EF] font-['Manrope'] text-sm font-semibold">Check Penalties</span>
          </div>

          <div 
            className="flex px-3 py-3 justify-center items-center gap-2 rounded-xl backdrop-blur-[40.5px]"
            style={{background: '#AC68A0'}}
          >
            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2627 13.2984C14.0371 13.5535 13.8004 13.8053 13.5529 14.0529C9.97304 17.6327 5.48813 18.9518 3.5355 16.9991C2.19684 15.6605 2.39592 13.1316 3.80697 10.5201M5.74131 7.77096C5.97607 7.50404 6.22302 7.24055 6.48178 6.98178C10.0616 3.40198 14.5465 2.08288 16.4991 4.03551C17.8387 5.3751 17.6384 7.90654 16.2247 10.5199M13.5529 6.98178C17.1327 10.5616 18.4518 15.0465 16.4991 16.9991C14.5465 18.9518 10.0616 17.6327 6.48178 14.0529C2.90198 10.473 1.58288 5.98813 3.5355 4.0355C5.48813 2.08288 9.97304 3.40198 13.5529 6.98178ZM10.8333 10.4999C10.8333 10.9601 10.4602 11.3332 9.99997 11.3332C9.53973 11.3332 9.16664 10.9601 9.16664 10.4999C9.16664 10.0397 9.53973 9.66658 9.99997 9.66658C10.4602 9.66658 10.8333 10.0397 10.8333 10.4999Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#E3E8EF] font-['Manrope'] text-sm font-semibold">Analyze Police Report</span>
          </div>
        </div>
      </div>
      <div className='md:hidden block'>
    <img src={BottomIcons} alt="" className='mx-auto'/>
  </div>
      <div className='md:w-[20%] md:block hidden'>
        <img src={RightIcons} alt=""  />
      </div>
      </div>
   
  </div>
  )
}

export default HeroSection