import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


// Hamburger menu icons as SVGs
const HAMBURGER_ICON = (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CLOSE_ICON = (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const menuItems = ['Home', 'About', 'Projects', 'Contact', 'Blog'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${isScrolled ? (isDarkMode ? 'bg-[#2d1333] shadow-md' : 'bg-[#f5f5f5] shadow-md') : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-2xl font-bold text-[#a855f7] drop-shadow-md">
            Abhishek
          </span>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              type="button"
              className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-[#a855f7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#a855f7] dark:focus:ring-0 rounded-md p-2 transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <i className="fas fa-sun" aria-hidden="true"></i> : <i className="fas fa-moon" aria-hidden="true"></i>}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-[#a855f7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#a855f7] dark:focus:ring-0 rounded-md p-2 transition-colors duration-200`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger or Close icon */}
              {isMenuOpen ? CLOSE_ICON : HAMBURGER_ICON}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative font-light no-underline transition-colors duration-200 group ${isDarkMode ? 'text-white' : 'text-black'} hover:text-[#a855f7]`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a855f7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              type="button"
              className={`ml-6 ${isDarkMode ? 'text-white' : 'text-black'} hover:text-[#a855f7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#a855f7] dark:focus:ring-0 rounded-md p-2 transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <i className="fas fa-sun" aria-hidden="true"></i> : <i className="fas fa-moon" aria-hidden="true"></i>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#f5f5f5] dark:bg-[#2d1333] p-4 transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`block px-3 py-2 rounded-md text-base font-light no-underline hover:bg-white/10 relative group ${isDarkMode ? 'text-white' : 'text-black'} hover:text-[#a855f7] transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#a855f7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
