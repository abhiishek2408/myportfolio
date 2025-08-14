import React, { useState } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { BsMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
  const [brightMode, setBrightMode] = useState(document.documentElement.classList.contains('bright'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBrightMode = () => {
    const newBrightMode = !brightMode;
    setBrightMode(newBrightMode);
    document.documentElement.classList.toggle('bright', newBrightMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Dynamic text color class
  const textColor = brightMode ? 'text-purple' : 'text-white';

  const menuItems = ['Home', 'About', 'Projects', 'Contact', 'Blog'];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full transition-colors duration-300 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Abhishek
          </span>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`${textColor} hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`} // Changed to section ID
                  className={`relative font-light no-underline transition-colors duration-200 group ${textColor}`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
              {/* Bright Mode Toggle */}
              <button
                onClick={toggleBrightMode}
                className={`${textColor} hover:text-indigo-300 transition-colors duration-200`}
              >
                {brightMode ? <BsMoonStarsFill size={20} /> : <MdWbSunny size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`} // Changed to section ID
              className={`block px-3 py-2 rounded-md text-base font-light no-underline hover:bg-white/20 relative group ${textColor}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
          {/* Bright Mode Toggle for mobile */}
          <button
            onClick={toggleBrightMode}
            className={`flex items-center px-3 py-2 rounded-md text-base font-light no-underline hover:bg-white/20 w-full text-left ${textColor}`}
          >
            {brightMode ? (
              <>
                <BsMoonStarsFill size={18} className="mr-2" /> Bright Mode
              </>
            ) : (
              <>
                <MdWbSunny size={18} className="mr-2" /> Light Mode
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
