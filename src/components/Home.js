import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import {FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

import image from "../image/mypic.jpg";

const Home = () => {
  const profile = {
    name: "Abhishek",
    titleOptions: ["Full Stack Developer", "Front End Developer", "Back End Developer"],
    bio: "Passionate about building web apps with React, Node, and MongoDB.",
    contact: [
      { name: "Phone", icon: <FaPhone style={{ color: '#3f51b5' }} />, link: "tel:+919876543210" },
      { name: "Email", icon: <FaEnvelope style={{ color: '#ff4081' }} />, link: "mailto:abhishek@example.com" },
      { name: "LinkedIn", icon: <FaLinkedin style={{ color: '#0077b5' }} />, link: "https://linkedin.com/in/abhishek" },
      { name: "GitHub", icon: <FaGithub style={{ color: '#333' }} />, link: "https://github.com/abhi" }
    ]
  };

  const [typedText, setTypedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTitle = profile.titleOptions[currentTitleIndex];
      if (currentCharIndex < currentTitle.length) {
        setTypedText(prev => prev + currentTitle[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setTypedText('');
          setCurrentCharIndex(0);
          setCurrentTitleIndex((prev) => (prev + 1) % profile.titleOptions.length);
        }, 150);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentCharIndex, currentTitleIndex, profile.titleOptions]);

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.3 } },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-0 font-poppins relative overflow-hidden bg-[#1f141d]">
      <div className="container mx-auto px-4 w-full flex flex-col md:flex-row justify-center items-center gap-12 z-10">

        {/* Profile Picture Section */}
        <div className="w-full md:w-4/12 text-center flex justify-center fade-in">
          <motion.div initial="hidden" animate="visible" variants={imageVariants}>
            <img src={image} alt="Profile" className="w-60 h-60 rounded-full object-cover border-4 border-[#3f51b5] transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1" />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-6/12 text-center md:text-left p-6 md:p-8 backdrop-blur-md rounded-2xl fade-in">
          <motion.div initial="hidden" animate="visible" variants={textVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1 bg-gradient-to-r from-[#3f51b5] via-[#ff69b4] to-[#ff007f] bg-clip-text text-transparent transition-all duration-500 hover:bg-position-right">
              Hi, I'm {profile.name}
            </h1>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#3f51b5] to-[#ff01b3] bg-clip-text text-transparent whitespace-nowrap overflow-hidden pr-2 border-r-2 border-[#3f51b5] typewriter-animation">
              {typedText}
              <span className="cursor-animation">|</span>
            </h3>
            <p className="text-white text-lg md:text-xl my-4 leading-relaxed">
              {profile.bio}
            </p>

            {/* Contact Section */}
            <div className="flex justify-center gap-4 md:gap-6 mt-6">
              {profile.contact.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" title={item.name} className="relative w-12 h-12 flex items-center justify-center p-0.5 rounded-full bg-gradient-to-tr from-[#3f51b5] to-[#ff4081] transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-6">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    {React.cloneElement(item.icon, {
                      className: `text-xl transition-colors duration-300 text-white hover:text-[#ff4081]`
                    })}
                  </div>
                </a>
              ))}
            </div>

            {/* Attractive Buttons */}
            <div className="flex justify-center gap-3 mt-8">
              {/* Download CV Button */}
              <a href="https://drive.google.com/uc?export=download&id=1Mz2hkCFiFqYezTqDJV-T842xU_CKU5vi" className="btn-download px-6 py-3 rounded-full text-white font-semibold uppercase tracking-wider transition-all duration-400 hover:scale-105 hover:shadow-lg">
                Download CV
              </a>
              {/* Hire Me Button */}
              <a href="mailto:abhishek@example.com" className="btn-hire px-6 py-3 rounded-full text-white font-semibold uppercase tracking-wider transition-all duration-400 hover:scale-105 hover:shadow-lg">
                Hire Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>
        {`
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .typewriter-animation {
          animation: typewriter 4s steps(30, end) infinite, blink-caret 0.75s step-end infinite;
        }
        .cursor-animation {
          animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink-caret {
          50% { border-color: transparent; }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .btn-download {
          background: linear-gradient(90deg, #3f51b5, #ff69b4, #ff007f);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }
        .btn-download:hover {
          background: linear-gradient(90deg, #ff007f, #ff69b4, #3f51b5);
          box-shadow: 0 10px 18px rgba(63, 81, 181, 0.3);
        }
        .btn-hire {
          background: linear-gradient(90deg, #3f51b5, #ff69b4, #ff007f);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }
        .btn-hire:hover {
          background: linear-gradient(90deg, #ff007f, #ff69b4, #3f51b5);
          box-shadow: 0 10px 18px rgba(63, 81, 181, 0.3);
        }
        .hover\\:bg-position-right:hover {
          background-position: right;
        }
        `}
      </style>
    </div>
  );
};

export default Home;