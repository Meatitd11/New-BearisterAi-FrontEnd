import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setIsLoggedIn(true);

      try {
        const parsedUser = JSON.parse(user);
        setIsSuperAdmin(parsedUser?.is_superadmin || false);
      } catch (e) {
        console.error("Error parsing user from localStorage", e);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleMyAccountClick = () => {
    if (isSuperAdmin) {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex items-center gap-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/07ee4757770b3900750f7393af76a4e06665a333?width=118"
            alt="BearisterAI Logo"
            className="w-[59px] h-[50px]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/daf320d2ea87ab7eff6c12ab847117c15513029c?width=260"
            alt="BearisterAI Text"
            className="w-[130px] h-[20px]"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors">Home</a>
          <a href="#" className="text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors">Features</a>
          <a href="#" className="text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors">Pricing</a>
          <a href="#" className="text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors">FAQ</a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          {!isLoggedIn ? (
            <Link to="/signin">
              <button
                className="flex px-4 sm:px-7 py-3 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-sm sm:text-base font-normal leading-6 hover:bg-white/90 shadow-[0_0_180px_0_rgba(153,23,255,0.25),0_0_0_0_rgba(255,255,255,0.07),0_-2px_8px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(255,255,255,0.41)_inset]"
              >
                Sign In
              </button>
            </Link>
          ) : (
            <button
              onClick={handleMyAccountClick}
              className="flex px-4 sm:px-7 py-3 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-sm sm:text-base font-normal leading-6 hover:bg-white/90 shadow-[0_0_180px_0_rgba(153,23,255,0.25),0_0_0_0_rgba(255,255,255,0.07),0_-2px_8px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(255,255,255,0.41)_inset]"
            >
              My Account
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className=" sm:hidden flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden sm:block absolute top-full left-0 right-0 bg-[#02030a] border-t border-white/10 transition-all duration-300 ease-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <a href="#" className="block text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors py-2">Home</a>
          <a href="#" className="block text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors py-2">Features</a>
          <a href="#" className="block text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors py-2">Pricing</a>
          <a href="#" className="block text-white font-['Outfit'] text-base font-normal leading-6 hover:text-white/80 transition-colors py-2">FAQ</a>

          <div className="pt-4">
            {!isLoggedIn ? (
              <Link to="/signin">
                <button
                  className="w-full flex px-4 py-3 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-base font-normal leading-6 hover:bg-white/90 shadow-[0_0_180px_0_rgba(153,23,255,0.25),0_0_0_0_rgba(255,255,255,0.07),0_-2px_8px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(255,255,255,0.41)_inset]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleMyAccountClick();
                  setIsMenuOpen(false);
                }}
                className="w-full flex px-4 py-3 justify-center items-center gap-2 rounded-xl bg-white text-[#202939] font-['Outfit'] text-base font-normal leading-6 hover:bg-white/90 shadow-[0_0_180px_0_rgba(153,23,255,0.25),0_0_0_0_rgba(255,255,255,0.07),0_-2px_8px_0_rgba(0,0,0,0.20)_inset,0_1px_2px_0_rgba(255,255,255,0.41)_inset]"
              >
                My Account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
