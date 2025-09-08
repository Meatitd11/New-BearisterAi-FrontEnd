import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    // Function to handle auto-scrolling
    const autoScroll = (element, speed) => {
      if (!element) return;
      
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        element.scrollLeft += 1;
        scrollAmount += 1;
        
        if (scrollAmount >= element.scrollWidth - element.clientWidth) {
          // Reset to start for seamless looping
          element.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, speed);
      
      return () => clearInterval(slideTimer);
    };

    // Start auto-scrolling for both rows
    const timer1 = autoScroll(firstRowRef.current, 20);
    const timer2 = autoScroll(secondRowRef.current, 25); // Slightly different speed for visual interest

    return () => {
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
    };
  }, []);

  const firstRowReviews = [
    {
      rating: 5,
      text: "Finally found a user-friendly, afforded tool that feels like the future. We are standing on the edge of AI revolution—BearisterAI feels natural and a first-class beacon of justice for all.",
      author: "Stephanie Grimaldi",
      title: "Grimaldi Law",
      avatar: "👩‍💼"
    },
    {
      rating: 5,
      text: "From first facts to a polished brief in a single session—fewer late work outcomes.",
      author: "Rocky Roy",
      title: "Criminal Counsel",
      avatar: "👨‍💼"
    },
    {
      rating: 4,
      text: "BearisterAI has revolutionized my practice. The research capabilities are unmatched and the citations are always accurate. It's like having a team of junior associates working 24/7.",
      author: "Michael Chen",
      title: "Chen & Associates",
      avatar: "👨‍⚖️"
    },
    {
      rating: 5,
      text: "Impressive AI tool that saves me hours of research time. The legal briefs it generates are comprehensive and well-structured. Highly recommend for any legal professional.",
      author: "Sarah Williams",
      title: "Williams Law Firm",
      avatar: "👩‍💼"
    },
    // Add more cards to ensure continuous scrolling
    {
      rating: 5,
      text: "The motion writing feature is incredibly efficient. It's like having a paralegal available 24/7 right in your pocket.",
      author: "James Wilson",
      title: "Wilson Legal Group",
      avatar: "👨‍💼"
    },
    {
      rating: 4,
      text: "Excellent research capabilities with accurate citations. Has significantly reduced our case preparation time.",
      author: "Lisa Johnson",
      title: "Johnson & Partners",
      avatar: "👩‍⚖️"
    }
  ];

  const secondRowReviews = [
    {
      rating: 5,
      text: "The motion writing feature on BearisterAI is very easy to use and report from other AI apps. It's like having a paralegal available to you 24/7 right in your pocket.",
      author: "Leah Rosario",
      title: "Public Defender in Ventura County",
      avatar: "👩‍⚖️"
    },
    {
      rating: 5,
      text: "YES! This is exactly what we needed.",
      author: "Tiffiny Blacknell",
      title: "Blacknell Strategic Solutions",
      avatar: "👤"
    },
    {
      rating: 5,
      text: "From first facts to a polished brief in a single session—fewer late rate, better outcomes.",
      author: "Jesse Duran",
      title: "Law office of Jesse Duran",
      avatar: "⚖️"
    },
    {
      rating: 4,
      text: "The contract analysis feature has saved our firm countless hours. BearisterAI identifies potential issues and suggests improvements with remarkable accuracy.",
      author: "Emily Rodriguez",
      title: "Rodriguez & Partners",
      avatar: "👩‍💼"
    },
    // Add more cards to ensure continuous scrolling
    {
      rating: 5,
      text: "Transformed how we handle document review. The AI catches details that junior associates often miss.",
      author: "Robert Kim",
      title: "Kim Legal Associates",
      avatar: "👨‍💼"
    },
    {
      rating: 4,
      text: "The predictive analytics feature has helped us better assess case outcomes for our clients.",
      author: "Maria Gonzalez",
      title: "Gonzalez Law Firm",
      avatar: "👩‍⚖️"
    }
  ];

  return (
    <section className=" bg-[#020207] md:py-24 py-16">
      <div className="">
        <div className="container mb-16 p-5 mx-auto md:flex  gap-x-32 items-start">
          <div className=''>
        
            <h2
          className="font-['Outfit'] text-4xl lg:text-[56px] font-medium bg-clip-text text-transparent"
          style={{
            background: 'radial-gradient(101.8% 55.56% at 69.21% 88.33%, #FFF 12.5%, #C7C7C7 31.25%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >Why lawyers choose Obie court-ready work, faster
        </h2>
          </div>
          <div className=''>
            <p className="text-gray-300/90 max-w-md lg:text-left lg:mt-2">
              Cited research you can verify, file-ready drafts you can trust—real-world results that stand up in court.
            </p>
          </div>
        </div>
        
        {/* First row with auto-scroll */}
        <div 
          ref={firstRowRef}
          className="flex gap-6 pb-8 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {firstRowReviews.map((review, index) => (
            <Card 
              key={index} 
              className="border !border-[#212121] backdrop-blur-md transition-all duration-300 hover:scale-105 flex-shrink-0 rounded-2xl group cursor-pointer relative overflow-hidden"
              style={{ 
                backgroundColor: '#070808', 
                width: '420px',
                padding: '24px',
                minHeight: '200px'
              }}
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.8) 0%, rgba(219,39,119,0.8) 55%, rgba(249,115,22,0.8) 100%)'
                }}
              />
              <CardContent className="p-0 h-full flex flex-col relative z-10">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-sm mb-6 text-gray-300 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-lg"
                    style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 55%, #f97316 100%)' }}
                  >
                    <span>{review.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-base text-white group-hover:text-white transition-colors duration-300">{review.author}</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{review.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row with auto-scroll */}
        <div 
          ref={secondRowRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {secondRowReviews.map((review, index) => (
            <Card 
              key={index} 
              className="border !border-[#212121] backdrop-blur-md transition-all duration-300 hover:scale-105 flex-shrink-0 rounded-2xl group cursor-pointer relative overflow-hidden"
              style={{ 
                backgroundColor: '#070808', 
                width: '420px',
                padding: '24px',
                minHeight: '200px'
              }}
            >
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.8) 0%, rgba(219,39,119,0.8) 55%, rgba(249,115,22,0.8) 100%)'
                }}
              />
              <CardContent className="p-0 h-full flex flex-col relative z-10">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-sm mb-6 text-gray-300 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-lg"
                    style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 55%, #f97316 100%)' }}
                  >
                    <span>{review.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-base text-white group-hover:text-white transition-colors duration-300">{review.author}</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">{review.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Add some custom styles for hiding scrollbars in different browsers */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;