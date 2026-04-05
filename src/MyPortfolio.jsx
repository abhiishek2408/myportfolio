// MyPortfolio.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import { motion } from 'framer-motion';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

import { FaChevronUp } from 'react-icons/fa';

function MyPortfolio() {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-slate-50 dark:bg-[#020617] transition-colors duration-300 overflow-hidden md:cursor-none noise-bg">
      <CustomCursor />
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="workflow"><Workflow /></section>
        <section id="blog"><Blog /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScroll ? 1 : 0, scale: showScroll ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 z-[90] w-12 h-12 bg-purple-600 text-white rounded-2xl shadow-2xl flex items-center justify-center text-xl hover:bg-pink-600 transition-all duration-300"
      >
        <FaChevronUp />
      </motion.button>
    </div>
  );
}

export default MyPortfolio;
