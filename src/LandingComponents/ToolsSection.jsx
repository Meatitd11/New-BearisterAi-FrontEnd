import React, { useState } from 'react'

const ToolsSection = () => {
  const [activeSection, setActiveSection] = useState(0); // 0: Criminal Defense, 1: Civil Litigation, 2: Built for Students

  const sections = [
    {
      title: "Criminal Defense Toolkit",
      description: "Turn reports & body-cam into suppression arguments, quickly.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/fd227593e1659382b8a2a117d96d4a74d6353711?width=1404",
      phoneImage: "/src/assets/images/crimal.png",
      floatingElements: [],
      gradientBlurs: [
        {
          className: "w-[500px] md:w-[650px] lg:w-[767px] h-[200px] md:h-[250px] lg:h-[300px] absolute left-[-40px] md:left-[-60px] lg:left-[-81px] top-[-150px] md:top-[-200px] lg:top-[-259px] hidden md:block",
          style: {
            transform: 'rotate(20.261deg)',
            filter: 'blur(49.5px)',
            mixBlendMode: 'color'
          },
          viewBox: "0 0 702 298",
          pathData: "M698.042 128.189C673.398 194.948 482.972 231.511 284.237 158.151C85.5014 84.7909 -46.2862 -70.7121 -21.6431 -137.471C2.99992 -204.23 184.084 -198.879 382.819 -125.519C581.555 -52.1591 722.685 61.4299 698.042 128.189ZM66.5902 -104.901C47.9896 -54.5115 154.514 31.2254 304.52 86.5976C454.525 141.97 591.208 146.009 609.808 95.619C628.409 45.2293 521.884 -40.5077 371.878 -95.8798C221.873 -151.252 85.1908 -155.291 66.5902 -104.901Z",
          fillOpacity: "0.61",
          filterBox: { x: "-123.6", y: "-283.24", width: "923.435", height: "580.794" },
          gradient: {
            x1: "510.818", y1: "-155.184", x2: "403.074", y2: "136.493",
            stops: [
              { offset: "0.319409", color: "#E29C44" },
              { offset: "0.697079", color: "#7527AA", opacity: "0.95" },
              { offset: "1", color: "#C7497D" }
            ]
          }
        }
      ]
    },
    {
      title: "Civil Litigation Toolkit",
      description: "Surface contradictions, tag exhibits, and assemble arguments fast.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/fd227593e1659382b8a2a117d96d4a74d6353711?width=1404",
      phoneImage: "/src/assets/images/Built for Students.png",
      floatingElements: [],
      gradientBlurs: [
        {
          className: "w-[500px] md:w-[650px] lg:w-[767px] h-[200px] md:h-[250px] lg:h-[300px] absolute left-[-40px] md:left-[-60px] lg:left-[-73px] top-[150px] md:top-[180px] lg:top-[212px] hidden md:block",
          style: {
            transform: 'rotate(20.261deg)',
            filter: 'blur(49.5px)',
            mixBlendMode: 'color'
          },
          viewBox: "0 0 702 464",
          pathData: "M706.042 412.189C681.398 478.948 490.972 515.511 292.237 442.151C93.5014 368.791 -38.2862 213.288 -13.6431 146.529C10.9999 79.7698 192.084 85.1209 390.819 158.481C589.555 231.841 730.685 345.43 706.042 412.189ZM74.5902 179.099C55.9896 229.488 162.514 315.225 312.52 370.598C462.525 425.97 599.208 430.009 617.808 379.619C636.409 329.229 529.884 243.492 379.878 188.12C229.873 132.748 93.1908 128.709 74.5902 179.099Z",
          fillOpacity: "0.64",
          filterBox: { x: "-115.6", y: "0.76001", width: "923.435", height: "580.794" },
          gradient: {
            x1: "518.818", y1: "128.816", x2: "411.074", y2: "420.493",
            stops: [
              { offset: "0.319409", color: "#E29C44" },
              { offset: "0.697079", color: "#7527AA", opacity: "0.95" },
              { offset: "1", color: "#C7497D" }
            ]
          }
        }
      ]
    },
    {
      title: "Built for Students",
      description: "Outlines, case briefs, and issue-spotting fast, with citations you can verify.",
      backgroundImage: "https://api.builder.io/api/v1/image/assets/TEMP/fd227593e1659382b8a2a117d96d4a74d6353711?width=1404",
      phoneImage: "/src/assets/images/Civil Litigation Toolkit.png",
      floatingElements: [],
      gradientBlurs: []
    }
  ];

  return (
    <section className="relative z-10 flex flex-col items-start gap-2 pt-16 md:py-24 lg:py-[120px] px-4 md:px-8 lg:px-16 bg-[#020207]">
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full max-w-7xl mx-auto gap-8 lg:gap-0">
      {/* Left Content */}
      <div className="flex flex-col items-start gap-8 md:gap-10 lg:gap-[49px] w-full lg:w-[485px]">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 w-full">
          <h2
            className="text-white text-[32px] md:text-[50px] w-[17rem] md:w-[30rem] "
          >
            The right tools for your role
          </h2>
          <p className="text-[#B7B7B7] font-['Outfit'] w-[22rem] md:w-full text-base md:text-lg font-normal leading-relaxed md:leading-[27px]  max-w-[464px]">
            From first facts to filed drafts—faster for your practice area, with cited answers and role-based templates.
          </p>
        </div>

        {/* Content with Vertical Line - Desktop only */}
        <div className="hidden md:flex items-start gap-4 md:gap-[17px]">
          {/* Vertical Line with Star */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-[300px] md:h-[350px] lg:h-[401px] relative">
              {/* Background Line */}
              <div
                className="w-full h-full absolute left-0 top-0 bg-[#545454]"
              ></div>
              {/* Highlighted Section - Dynamic positioning */}
              <div 
                className="w-full h-[90px] md:h-[110px] lg:h-[126px] absolute left-0 transition-all duration-500 ease-in-out"
                style={{ 
                  top: `${activeSection * 110}px` // Dynamic positioning based on active section
                }}
              >
                <div
                  className="w-full h-full absolute left-0 top-0"
                  style={{
                    background: 'linear-gradient(180deg, #FFAE47 0%, #C7497D 78.75%, #7527AA 100%)'
                  }}
                ></div>
                {/* Star Icon - Dynamic positioning */}
                <svg
                  className="absolute left-[-5.5px] w-[13px] h-[13px] transition-all duration-500 ease-in-out"
                  style={{ 
                    top: `${80 + (activeSection * 0)}px` // Star stays at bottom of highlighted section
                  }}
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 0.650879L8.25559 5.39529L13 7.15088L8.25559 8.90647L6.5 13.6509L4.74441 8.90647L0 7.15088L4.74441 5.39529L6.5 0.650879Z"
                    fill="url(#paint0_radial_star)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_star"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(6.5 10.4009) rotate(90) scale(13.2708 12.1737)"
                    >
                      <stop stopColor="#FFAE47"/>
                      <stop offset="0.787463" stopColor="#C7497D"/>
                      <stop offset="1" stopColor="#7527AA"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex flex-col items-start gap-8 md:gap-10 lg:gap-[52px] w-full max-w-[337px]">
            {/* Criminal Defense (Interactive) */}
            <div 
              className="flex flex-col items-start gap-2 w-full cursor-pointer transition-all duration-300 hover:opacity-80"
              onClick={() => setActiveSection(0)}
            >
              <h3 className={`font-['Outfit'] text-xl md:text-2xl lg:text-[32px] font-medium leading-tight md:leading-relaxed lg:leading-[38px] w-full transition-colors duration-300 ${
                activeSection === 0 ? 'text-white' : 'text-[#575757]'
              }`}>
                Criminal Defense (CA)
              </h3>
              <p className={`font-['Outfit'] text-sm md:text-base lg:text-lg font-normal leading-relaxed md:leading-[27px] w-full transition-colors duration-300 ${
                activeSection === 0 ? 'text-[#ADADAD]' : 'text-[#525252]'
              }`}>
                Turn reports & body-cam into suppression arguments, quickly.
              </p>
            </div>

            {/* Civil Litigation Toolkit (Interactive) */}
            <div 
              className="flex flex-col items-start gap-2 w-full cursor-pointer transition-all duration-300 hover:opacity-80"
              onClick={() => setActiveSection(1)}
            >
              <h3 className={`font-['Outfit'] text-xl md:text-2xl lg:text-[32px] font-medium leading-tight md:leading-relaxed lg:leading-[38px] w-full transition-colors duration-300 ${
                activeSection === 1 ? 'text-white' : 'text-[#575757]'
              }`}>
                Civil Litigation Toolkit
              </h3>
              <p className={`font-['Outfit'] text-sm md:text-base lg:text-lg font-normal leading-relaxed md:leading-[27px] w-full transition-colors duration-300 ${
                activeSection === 1 ? 'text-[#ADADAD]' : 'text-[#525252]'
              }`}>
                Surface contradictions, tag exhibits, and assemble arguments fast.
              </p>
            </div>

            {/* Built for Students (Interactive) */}
            <div 
              className="flex flex-col items-start gap-2 w-full cursor-pointer transition-all duration-300 hover:opacity-80"
              onClick={() => setActiveSection(2)}
            >
              <h3 className={`font-['Outfit'] text-xl md:text-2xl lg:text-[32px] font-medium leading-tight md:leading-relaxed lg:leading-[38px] w-full transition-colors duration-300 ${
                activeSection === 2 ? 'text-white' : 'text-[#575757]'
              }`}>
                Built for Students
              </h3>
              <p className={`font-['Outfit'] text-sm md:text-base lg:text-lg font-normal leading-relaxed md:leading-[27px] w-full transition-colors duration-300 ${
                activeSection === 2 ? 'text-[#ADADAD]' : 'text-[#525252]'
              }`}>
                Outlines, case briefs, and issue-spotting fast, with citations you can verify.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Text sections with images below */}
        <div className="block md:hidden w-full space-y-8">
          {/* Criminal Defense Section */}
          <div className="w-full">
            <div className="flex flex-col items-start gap-2 w-full mb-4">
              <h3 className="text-white font-['Outfit'] text-[24px] font-medium leading-tight w-full">
                Criminal Defense (CA)
              </h3>
              <p className="text-[#ADADAD] w-[19rem] font-['Outfit'] text-[16px] leading-relaxed md:w-full ">
                Turn reports & body-cam into suppression arguments, quickly.
              </p>
            </div>
            <div className="w-full h-[400px] relative rounded-[24px] overflow-hidden">
              <img
                src="/src/assets/images/crimal.png"
                alt="Criminal Defense interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Civil Litigation Toolkit Section */}
          <div className="w-full">
            <div className="flex flex-col items-start gap-2 w-full mb-4">
              <h3 className="text-white font-['Outfit'] text-[24px] font-medium leading-tight w-full">
                Civil Litigation Toolkit
              </h3>
              <p className="text-[#ADADAD] font-['Outfit'] text-[16px] leading-relaxed w-[19rem] md:w-full">
                Surface contradictions, tag exhibits, and assemble arguments fast.
              </p>
            </div>
            <div className="w-full h-[400px] relative rounded-[24px] overflow-hidden">
              <img
                src="/src/assets/images/Civil Litigation Toolkit.png"
                alt="Civil Litigation interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Built for Students Section */}
          <div className="w-full">
            <div className="flex flex-col items-start gap-2 w-full mb-4">
              <h3 className="text-white font-['Outfit'] text-[24px] font-medium leading-tight w-full">
                Built for Students
              </h3>
              <p className="text-[#ADADAD] font-['Outfit'] text-[16px] leading-relaxed w-[19rem] md:w-full">
                Outlines, case briefs, and issue-spotting fast, with citations you can verify.
              </p>
            </div>
            <div className="w-full h-[400px] relative rounded-[24px] overflow-hidden">
              <img
                src="/src/assets/images/Built for Students.png"
                alt="Built for Students interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Image Display - Show below sections on mobile */}
        <div className="hidden w-full mt-8">
          <div className="w-full h-[300px] relative rounded-[24px] border border-transparent overflow-hidden">
            <img
              src={sections[activeSection].phoneImage}
              alt={`${sections[activeSection].title} interface`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Content - iPhone Mockup (Hidden on mobile, visible on md and up) */}
      <div className="hidden md:block w-full max-w-[600px] md:max-w-[650px] lg:w-[702px] h-[500px] md:h-[600px] lg:h-[700px] relative rounded-[24px] border border-transparent overflow-hidden mx-auto lg:mx-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
          
          
        ></div>

        {/* iPhone */}
        <img
          src={sections[activeSection].phoneImage}
          alt={`iPhone with ${sections[activeSection].title} interface`}
          className="w-full h-[40rem] object-contain absolute left-0 top-0 transition-all duration-500"
        />

        {/* Dark Overlay */}
        <div className="w-full h-full bg-black/24 absolute left-0 top-0"></div>

        {/* Dynamic Floating UI Elements */}
        {sections[activeSection].floatingElements.map((element, index) => (
          <div 
            key={index}
            className={`inline-flex h-8 md:h-10 lg:h-12 py-2 md:py-3 lg:py-4 px-3 md:px-4 lg:px-5 pr-2 md:pr-3 lg:pr-4 justify-center items-center gap-1 rounded-full border border-[#FFAE47] bg-[rgba(18,18,18,0.53)] absolute transition-all duration-700 ease-in-out ${element.className}`}
            style={{
              boxShadow: '0 0 6px 0 rgba(255, 255, 255, 0.10) inset, 0 0 20px 0 rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(30px)',
              ...element.style
            }}
          >
            <div className="flex w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 p-2 md:p-3 lg:p-4 justify-center items-center gap-1 rounded-full bg-[#1F1F1F]">
              <div dangerouslySetInnerHTML={{ __html: element.icon }} />
            </div>
            <span className="text-[#ABABAB] font-['Manrope'] text-sm md:text-lg lg:text-xl font-medium leading-4 md:leading-5 lg:leading-6">
              {element.label}
            </span>
          </div>
        ))}

        {/* Dynamic Gradient Blur Effects */}
        {sections[activeSection].gradientBlurs.map((blur, index) => (
          <svg
            key={index}
            className={`transition-all duration-700 ease-in-out ${blur.className}`}
            style={blur.style}
            viewBox={blur.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ mixBlendMode: 'color' }} filter={`url(#filter0_f_blur${activeSection}_${index})`}>
              <path d={blur.pathData} fill={`url(#paint0_linear_blur${activeSection}_${index})`} fillOpacity={blur.fillOpacity} />
            </g>
            <defs>
              <filter id={`filter0_f_blur${activeSection}_${index}`} x={blur.filterBox.x} y={blur.filterBox.y} width={blur.filterBox.width} height={blur.filterBox.height} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="49.5" result="effect1_foregroundBlur"/>
              </filter>
              <linearGradient id={`paint0_linear_blur${activeSection}_${index}`} x1={blur.gradient.x1} y1={blur.gradient.y1} x2={blur.gradient.x2} y2={blur.gradient.y2} gradientUnits="userSpaceOnUse">
                {blur.gradient.stops.map((stop, stopIndex) => (
                  <stop key={stopIndex} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity || 1} />
                ))}
              </linearGradient>
            </defs>
          </svg>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ToolsSection