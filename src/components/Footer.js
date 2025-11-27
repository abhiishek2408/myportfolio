import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2d1333] border-t border-gray-700 text-[#e0e0e0] font-inter py-12 ">
      <div className="max-w-6xl  mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: About / Brand */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#6b21a8] to-[#a855f7]">
            Abhishek Yadav
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Full Stack Developer | React & Laravel | Always learning & building
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-6 text-2xl text-[#a855f7]">
          <a href="https://github.com/abhiishek2408" target="_blank" rel="noopener noreferrer" className="hover:text-[#6b21a8] transition-colors no-underline">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abhishek" target="_blank" rel="noopener noreferrer" className="hover:text-[#6b21a8] transition-colors no-underline">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/abhishek" target="_blank" rel="noopener noreferrer" className="hover:text-[#6b21a8] transition-colors no-underline">
            <FaTwitter />
          </a>
          <a href="mailto:abhishek@example.com" className="hover:text-[#6b21a8] transition-colors no-underline">
            <FaEnvelope />
          </a>
        </div>

        {/* Right: Quick Links */}
        <div className="flex flex-col gap-2 text-center md:text-right text-gray-300 text-sm md:text-base">
          <a href="#projects" className="hover:text-[#a855f7] transition-colors no-underline">Projects</a>
          <a href="#contact" className="hover:text-[#a855f7] transition-colors no-underline">Contact</a>
          <a href="#about" className="hover:text-[#a855f7] transition-colors no-underline">About Me</a>
        </div>
      </div>

      <div className="mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Abhishek Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
