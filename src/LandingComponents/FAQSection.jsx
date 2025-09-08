import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default

  const faqData = [
    {
      question: "Will my data be used to train any AI models?",
      answer: "Any AI vendors we use are contractually barred from training on your data. Uploaded files auto-delete after 30 days (you can delete sooner), and everything is encrypted in transit and at rest. We may review de-identified usage telemetry (like feature errors or load times) to improve reliability—never your readable client content."
    },
    {
      question: "Do you cite real cases I can verify?",
      answer: "Yes, we provide accurate citations to real cases that you can verify. Our AI system references legitimate legal precedents and case law."
    },
    {
      question: "How many documents can I upload on my plan?",
      answer: "Document upload limits vary by plan: Basic plan allows 4 documents per month, Plus plan allows 12 documents per month, and Pro plan allows 20 documents per month."
    },
    {
      question: "Is this legal advice, or do I need attorney review?",
      answer: "This tool provides legal research assistance and drafting support, but it does not constitute legal advice. Always consult with a qualified attorney for legal advice specific to your situation."
    },
    {
      question: "Build a motion outline with citations?",
      answer: "Yes, our platform can help you build comprehensive motion outlines with proper legal citations and structured arguments based on relevant case law and precedents."
    }
  ];

  const toggleFAQ = (index) => {
    // Don't allow closing the first FAQ (index 0)
    if (index === 0) return;
    setOpenFAQ(openFAQ === index ? 0 : index);
  };

  // Icon data for easier rendering
  const icons = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/48b0185e8d0146caff3f2e7b2b83714d303896ec?width=132",
      alt: "Judicial Gavel",
      width: "w-[66px]",
      height: "h-[35px]",
      position: "left-[9px] top-4"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/1f4de00fe108093f1e2e4d9a9fee5e662543aa45?width=78",
      alt: "City Landmark",
      width: "w-[39px]",
      height: "h-[48px]",
      position: "left-[22px] top-2"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d648527554b1f214ff9bfa8559f937ef86aedf99?width=100",
      alt: "Scales of Justice",
      width: "w-[50px]",
      height: "h-[44px]",
      position: "left-[17px] top-3"
    }
  ];

  return (
    <section className="bg-[#02030a] py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between gap-10 md:gap-12">
            {/* Header */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h2
                className="font-['Outfit'] text-3xl md:text-4xl lg:text-[56px] font-medium md:leading-[66px] bg-clip-text text-transparent"
                style={{
                  background: 'radial-gradient(156.65% 197.21% at 29.1% 0%, #FFFFFF 0%, #BFC0C2 65%, #9C9EA1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Got questions? We've got answers
              </h2>
              <p className="text-[#D0D0D0] font-['Outfit'] text-base md:text-[15px] font-normal leading-6 max-w-lg">
                Your top questions about research, drafting, and trial prep answered.
              </p>
            </div>

            {/* Icons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              {icons.map((icon, index) => (
                <div key={index} className="w-[83px] h-[68px] rounded-lg border border-[#FFAE47] bg-[#0D0D0D] relative overflow-hidden">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={`${icon.width} ${icon.height} absolute ${icon.position}`}
                    style={{ mixBlendMode: 'plus-lighter' }}
                  />
                  <svg
                    className="w-full h-full absolute inset-0"
                    style={{ mixBlendMode: 'color-burn' }}
                    viewBox="0 0 83 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g style={{mixBlendMode: 'color-burn'}}>
                      <g filter="url(#filter0_f_icon1)">
                        <circle cx="17.4856" cy="39.9002" r="17.4856" fill="#FFAE47"/>
                      </g>
                      <g filter="url(#filter1_f_icon1)">
                        <circle cx="72.1142" cy="41.2737" r="17.4856" transform="rotate(120 72.1142 41.2737)" fill="#C7497D"/>
                      </g>
                      <g filter="url(#filter2_f_icon1)">
                        <ellipse cx="45.9518" cy="31.9102" rx="11.2708" ry="22.0826" transform="rotate(150 45.9518 31.9102)" fill="#7527AA"/>
                      </g>
                    </g>
                    <defs>
                      <filter id="filter0_f_icon1" x="-20.5713" y="1.84325" width="76.1138" height="76.1138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                      </filter>
                      <filter id="filter1_f_icon1" x="34.0544" y="3.21386" width="76.1196" height="76.1196" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                      </filter>
                      <filter id="filter2_f_icon1" x="10.6431" y="-8.60352" width="70.6174" height="81.0274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right FAQ Items */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4 md:gap-6">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`p-4 flex flex-col gap-2 w-full rounded-xl bg-[#0D0D0D] border border-white/5 ${
                  index === 0 ? '' : 'cursor-pointer transition-all duration-300 hover:border-white/10'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center justify-between w-full">
                    <span 
                      className={`font-['Outfit'] text-lg md:text-xl leading-[30px] flex-1 pr-4 ${
                        openFAQ === index 
                          ? 'text-white font-medium' 
                          : 'text-[#BEBEBE] font-normal'
                      }`}
                    >
                      {faq.question}
                    </span>
                    {index !== 0 && (
                      <div className="flex w-6 h-6 p-1 justify-center items-center gap-2 rounded-2xl border border-black bg-[#0D0D0D] flex-shrink-0">
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openFAQ === index ? 'rotate-180' : ''
                          }`} 
                          viewBox="0 0 16 17" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d={openFAQ === index 
                              ? "M2.64597 10.2968L7.64597 5.29685C7.69241 5.25036 7.74755 5.21348 7.80825 5.18832C7.86895 5.16316 7.93401 5.15021 7.99972 5.15021C8.06543 5.15021 8.13049 5.16316 8.19119 5.18832C8.25189 5.21348 8.30704 5.25036 8.35347 5.29685L13.3535 10.2969C13.4473 10.3907 13.5 10.5179 13.5 10.6506C13.5 10.7833 13.4473 10.9105 13.3535 11.0044C13.2597 11.0982 13.1324 11.1509 12.9997 11.1509C12.867 11.1509 12.7398 11.0982 12.646 11.0044L7.99972 6.35748L3.35347 11.0044C3.30702 11.0508 3.25187 11.0877 3.19117 11.1128C3.13047 11.1379 3.06542 11.1509 2.99972 11.1509C2.93402 11.1509 2.86897 11.1379 2.80827 11.1128C2.74758 11.0877 2.69243 11.0508 2.64597 11.0044C2.59952 10.9579 2.56267 10.9027 2.53753 10.842C2.51238 10.7814 2.49944 10.7163 2.49944 10.6506C2.49944 10.5849 2.51238 10.5198 2.53753 10.4592C2.56267 10.3985 2.59952 10.3433 2.64597 10.2968Z"
                              : "M13.354 7.00491L8.35403 12.0049C8.30759 12.0514 8.25245 12.0883 8.19175 12.1134C8.13105 12.1386 8.06599 12.1515 8.00028 12.1515C7.93457 12.1515 7.86951 12.1386 7.80881 12.1134C7.74811 12.0883 7.69296 12.0514 7.64653 12.0049L2.64653 7.00491C2.55271 6.91109 2.5 6.78384 2.5 6.65116C2.5 6.51847 2.55271 6.39123 2.64653 6.29741C2.74035 6.20359 2.8676 6.15088 3.00028 6.15088C3.13296 6.15088 3.26021 6.20359 3.35403 6.29741L8.00028 10.9443L12.6465 6.29741C12.693 6.25095 12.7481 6.2141 12.8088 6.18896C12.8695 6.16382 12.9346 6.15088 13.0003 6.15088C13.066 6.15088 13.131 6.16382 13.1917 6.18896C13.2524 6.2141 13.3076 6.25095 13.354 6.29741C13.4005 6.34386 13.4373 6.39901 13.4625 6.45971C13.4876 6.52041 13.5006 6.58546 13.5006 6.65116C13.5006 6.71685 13.4876 6.78191 13.4625 6.84261C13.4373 6.9033 13.4005 6.95845 13.354 7.00491Z"
                            } 
                            fill="white"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {openFAQ === index && (
                    <div className="flex flex-col gap-4">
                      <div className="h-px w-full rounded-xl bg-white/10"></div>
                      <p className="text-[#CFCFCF] font-['Outfit'] text-sm md:text-[15px] font-normal leading-6">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Icons - Mobile */}
        <div className="flex md:hidden justify-center items-center gap-4 mt-10">
          {icons.map((icon, index) => (
            <div key={index} className="w-[70px] h-[58px] rounded-lg border border-[#FFAE47] bg-[#0D0D0D] relative overflow-hidden">
              <img
                src={icon.src}
                alt={icon.alt}
                className={`${icon.width} ${icon.height} absolute ${icon.position}`}
                style={{ mixBlendMode: 'plus-lighter' }}
              />
              <svg
                className="w-full h-full absolute inset-0"
                style={{ mixBlendMode: 'color-burn' }}
                viewBox="0 0 83 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g style={{mixBlendMode: 'color-burn'}}>
                  <g filter="url(#filter0_f_icon1)">
                    <circle cx="17.4856" cy="39.9002" r="17.4856" fill="#FFAE47"/>
                  </g>
                  <g filter="url(#filter1_f_icon1)">
                    <circle cx="72.1142" cy="41.2737" r="17.4856" transform="rotate(120 72.1142 41.2737)" fill="#C7497D"/>
                  </g>
                  <g filter="url(#filter2_f_icon1)">
                    <ellipse cx="45.9518" cy="31.9102" rx="11.2708" ry="22.0826" transform="rotate(150 45.9518 31.9102)" fill="#7527AA"/>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_f_icon1" x="-20.5713" y="1.84325" width="76.1138" height="76.1138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                  </filter>
                  <filter id="filter1_f_icon1" x="34.0544" y="3.21386" width="76.1196" height="76.1196" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                  </filter>
                  <filter id="filter2_f_icon1" x="10.6431" y="-8.60352" width="70.6174" height="81.0274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="10.2856" result="effect1_foregroundBlur"/>
                  </filter>
                </defs>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;