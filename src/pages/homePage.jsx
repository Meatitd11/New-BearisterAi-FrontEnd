import React from 'react'
import BackgroundLights from '../LandingComponents/BackgroundLights'
import FAQSection from '../LandingComponents/FAQSection'
import FeaturesSection from '../LandingComponents/FeaturesSection'
import FooterSection from '../LandingComponents/FooterSection'
import HeroSection from '../LandingComponents/HeroSection'
import LaunchSection from '../LandingComponents/LaunchSection'
import NavigationHeader from '../LandingComponents/NavigationHeader'
import PartnershipSection from '../LandingComponents/PartnershipSection'
import PricingSection from '../LandingComponents/PricingSection'
import TestDriveSection from '../LandingComponents/TestDriveSection'
import TestimonialsSection from '../LandingComponents/TestimonialsSection'
import ToolsSection from '../LandingComponents/ToolsSection'

const HomePage = () => {
  return (
   <>
   <div className=" bg-black text-white ">
    <BackgroundLights/>
    <div className="relative z-10">
        <NavigationHeader/>
        <HeroSection/>
        <PartnershipSection/>
        <TestimonialsSection/>
        <FeaturesSection/>
        <TestDriveSection/>
        <ToolsSection/>
        <PricingSection/>
        <LaunchSection/>
        <FAQSection/>
        <FooterSection/>
    </div>
   </div>
   </>
  )
}

export default HomePage