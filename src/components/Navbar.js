import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      className={`fixed top-0 left-0 z-[100] w-full transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/70 dark:bg-slate-950/50 backdrop-blur-2xl shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 z-[101] transition-all duration-75" style={{ width: `${scrollProgress}%` }}></div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="text-xl font-black tracking-tighter no-underline flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-7 h-7 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-[10px] rotate-12 group-hover:rotate-0 transition-transform">
            A
          </div>
          <span className="text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">Abhishek</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 m-0 p-0 list-none font-medium text-sm">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-slate-600 dark:text-white no-underline hover:text-purple-600 dark:hover:text-pink-500 transition-colors py-2 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="h-5 w-[1px] bg-slate-200 dark:bg-white/10 mx-2"></div>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all duration-300 text-slate-600 dark:text-white"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white"
          >
            {isDarkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900"
          >
            {isMenuOpen ? <FaTimes className="text-xs" /> : <FaBars className="text-xs" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark dark:bg-slate-950 overflow-hidden border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-slate-800 dark:text-white no-underline hover:text-purple-600"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
