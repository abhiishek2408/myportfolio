import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import mypic from '../image/mypic.jpg';
import Magnetic from './Magnetic';

const SvgPhone = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" fill="currentColor">
    <path d="M16.5 13.5l-2.493 2.493a1.5 1.5 0 01-2.121 0l-.707-.707a1.5 1.5 0 010-2.121l2.493-2.493a1.5 1.5 0 012.121 0l.707.707a1.5 1.5 0 010 2.121zM9.5 7.5l-2.493-2.493a1.5 1.5 0 00-2.121 0l-.707.707a1.5 1.5 0 000 2.121l2.493 2.493a1.5 1.5 0 002.121 0l.707-.707a1.5 1.5 0 000-2.121zM12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zM12 20a8 8 0 118-8 8.009 8.009 0 01-8 8z"/>
  </svg>
);
const SvgEnvelope = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" fill="currentColor">
    <path d="M2.5 5.5a2 2 0 012-2h15a2 2 0 012 2v13a2 2 0 01-2 2h-15a2 2 0 01-2-2v-13zM4.5 5.5v.421l7.5 5.25 7.5-5.25v-.421h-15zM4.5 7.747v10.753h15v-10.753l-7.5 5.25-7.5-5.25z"/>
  </svg>
);
const SvgLinkedin = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" fill="currentColor">
    <path d="M20.916 2.052H3.084a.5.5 0 00-.5.5v17.896a.5.5 0 00.5.5h17.832a.5.5 0 00.5-.5V2.552a.5.5 0 00-.5-.5zM8.334 18.066H5.43v-9.52h2.904v9.52zM6.882 7.15c-.94 0-1.705-.764-1.705-1.705s.764-1.705 1.705-1.705 1.705.764 1.705 1.705-.764 1.705-1.705 1.705zm12.036 10.916h-2.903v-4.75c0-1.13-.021-2.584-1.575-2.584-1.575 0-1.815 1.233-1.815 2.502v4.832H9.076v-9.52h2.784v1.302h.04c.387-.74 1.332-1.517 2.748-1.517 2.946 0 3.491 1.93 3.491 4.437v5.298z"/>
  </svg>
);
const SvgGithub = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.125-.3-.535-1.523.117-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.4 3.003-.404 1.02.004 2.046.138 3.005.404 2.29-1.552 3.295-1.23 3.295-1.23.65 1.653.24 2.876.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.62-5.474 5.92.43.37.81 1.096.81 2.215 0 1.605-.015 2.89-.015 3.283 0 .32.21.693.825.575C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const profile = {
    name: "Abhishek",
    titleOptions: ["Full Stack Developer", "Front End Developer", "Back End Developer"],
    bio: "Passionate about building beautiful and functional web applications with modern technologies like React, Node.js, and MongoDB.",
    contact: [
      { name: "Phone", icon: <SvgPhone />, link: "tel:+919305963544" },
      { name: "Email", icon: <SvgEnvelope />, link: "mailto:abhishekydv2408@gmail.com" },
      { name: "LinkedIn", icon: <SvgLinkedin />, link: "https://www.linkedin.com/in/abhishek-yadav2408/" },
      { name: "GitHub", icon: <SvgGithub />, link: "https://github.com/abhiishek2408" }
    ]
  };

  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = profile.titleOptions[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting && typedText.length < currentTitle.length) {
        setTypedText(currentTitle.substring(0, typedText.length + 1));
        setTypingSpeed(100);
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentTitle.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else if (!isDeleting && typedText.length === currentTitle.length) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % profile.titleOptions.length);
        setTypingSpeed(200);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitleIndex, profile.titleOptions, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  const getIconColor = (name) => {
    switch (name) {
      case "LinkedIn": return "#0077B5";
      case "GitHub": return "#ffffff";
      case "Phone": return "#25D366";
      case "Email": return "#EA4335";
      default: return "#ffffff";
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-hidden mesh-gradient dark:bg-[#020617]">
      {/* Dynamic Parallax Background Elements */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[130px] rounded-full"
        animate={{
          x: (mousePosition.x - window.innerWidth / 2) * 0.05,
          y: (mousePosition.y - window.innerHeight / 2) * 0.05,
        }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/10 blur-[130px] rounded-full"
        animate={{
          x: (mousePosition.x - window.innerWidth / 2) * -0.05,
          y: (mousePosition.y - window.innerHeight / 2) * -0.05,
        }}
      />

      {/* Floating Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-900/5 dark:border-white/[0.02] rounded-full pointer-events-none hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-900/5 dark:border-white/[0.02] rounded-full pointer-events-none hidden lg:block"></div>

      <motion.div 
        className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Image with unique background */}
        <motion.div 
          className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          variants={itemVariants}
          style={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.02,
            y: (mousePosition.y - window.innerHeight / 2) * 0.02,
          }}
        >
          {/* Rotating frame */}
          <div className="absolute inset-0 border-2 border-dashed border-purple-500/30 rounded-full animate-[spin_25s_linear_infinite]"></div>
          
          <div className="relative w-full h-full p-4">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[morph_15s_ease-in-out_infinite] blur-md opacity-25"></div>
             
             <motion.div 
               className="relative w-full h-full overflow-hidden shadow-2xl border-4 border-white/10"
               style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.5 }}
             >
                <img 
                  src={mypic} 
                  alt={profile.name} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                />
             </motion.div>
          </div>
        </motion.div>

        <div className="flex-1 text-center space-y-5">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-purple-500 font-extrabold tracking-[0.4em] uppercase text-xs md:text-sm">
              Welcome to my world
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-accent animate-gradient">
                {profile.name}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="inline-block px-6 py-2 glass-dark rounded-full">
              <h3 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300">
                {typedText}
                <span className="inline-block w-1 h-6 ml-1 bg-purple-500 animate-blink"></span>
              </h3>
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium pt-1"
          >
            {profile.bio}
          </motion.p>


          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 pt-6"
          >
            <Magnetic>
              <a 
                href="#projects" 
                className="group px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(124,58,237,0.3)] hover:shadow-purple-500/50 hover:bg-right transition-all duration-700 no-underline text-xs flex items-center gap-3"
              >
                <FaRocket className="group-hover:rotate-12 transition-transform" /> 
                <span>Explore Works</span>
              </a>
            </Magnetic>

            <Magnetic>
              <a 
                href="YOUR_CV_LINK_HERE"
                className="px-10 py-4 bg-white/5 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 no-underline text-xs flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-[2px] h-4 bg-purple-500"></div>
                <span>Download CV</span>
              </a>
            </Magnetic>
          </motion.div>

          {/* Social Links with hover effects */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-6 pt-3"
          >
            {profile.contact.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center bg-slate-900 dark:bg-white/5 rounded-xl overflow-hidden shadow-lg transition-all duration-500"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: getIconColor(item.name) }}
                ></div>
                {React.cloneElement(item.icon, {
                  className: `relative z-10 w-5 h-5 transition-all duration-500 group-hover:scale-125`,
                  style: { color: getIconColor(item.name) }
                })}
                {/* Overlay White on hover for better contrast */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   {React.cloneElement(item.icon, {
                    className: `w-5 h-5 text-white`,
                  })}
                </div>
              </a>
            ))}
          </motion.div>

          {/* Professional Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 pt-12 border-t border-slate-200 dark:border-white/5 mt-10"
          >
            {[
              { num: "50+", label: "Projects Completed" },
              { num: "15+", label: "Tech Stack" },
              { num: "5+", label: "Open Source" },
              { num: "100%", label: "Dedication" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{stat.num}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        .animate-blink { animation: blink 0.75s step-end infinite; }

        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          33% { border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%; }
          66% { border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-move 5s ease infinite;
        }

        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Home;