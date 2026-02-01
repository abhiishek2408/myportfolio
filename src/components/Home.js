import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mypic from '../image/mypic.jpg'

const SvgPhone = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 13.5l-2.493 2.493a1.5 1.5 0 01-2.121 0l-.707-.707a1.5 1.5 0 010-2.121l2.493-2.493a1.5 1.5 0 012.121 0l.707.707a1.5 1.5 0 010 2.121zM9.5 7.5l-2.493-2.493a1.5 1.5 0 00-2.121 0l-.707.707a1.5 1.5 0 000 2.121l2.493 2.493a1.5 1.5 0 002.121 0l.707-.707a1.5 1.5 0 000-2.121zM12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zM12 20a8 8 0 118-8 8.009 8.009 0 01-8 8z"/>
  </svg>
);
const SvgEnvelope = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.5 5.5a2 2 0 012-2h15a2 2 0 012 2v13a2 2 0 01-2 2h-15a2 2 0 01-2-2v-13zM4.5 5.5v.421l7.5 5.25 7.5-5.25v-.421h-15zM4.5 7.747v10.753h15v-10.753l-7.5 5.25-7.5-5.25z"/>
  </svg>
);
const SvgLinkedin = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.916 2.052H3.084a.5.5 0 00-.5.5v17.896a.5.5 0 00.5.5h17.832a.5.5 0 00.5-.5V2.552a.5.5 0 00-.5-.5zM8.334 18.066H5.43v-9.52h2.904v9.52zM6.882 7.15c-.94 0-1.705-.764-1.705-1.705s.764-1.705 1.705-1.705 1.705.764 1.705 1.705-.764 1.705-1.705 1.705zm12.036 10.916h-2.903v-4.75c0-1.13-.021-2.584-1.575-2.584-1.575 0-1.815 1.233-1.815 2.502v4.832H9.076v-9.52h2.784v1.302h.04c.387-.74 1.332-1.517 2.748-1.517 2.946 0 3.491 1.93 3.491 4.437v5.298z"/>
  </svg>
);
const SvgGithub = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.125-.3-.535-1.523.117-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.4 3.003-.404 1.02.004 2.046.138 3.005.404 2.29-1.552 3.295-1.23 3.295-1.23.65 1.653.24 2.876.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.62-5.474 5.92.43.37.81 1.096.81 2.215 0 1.605-.015 2.89-.015 3.283 0 .32.21.693.825.575C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Home = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const getIconColor = (name) => {
    switch (name) {
      case "LinkedIn": return "#0077B5";
      case "GitHub": return "#333";
      case "Phone": return "#25D366";
      case "Email": return "#EA4335";
      default: return "#555";
    }
  };

  return (
    <div className="home-section w-full dark:bg-[#2d1333] dark:text-[#e0e0e0]">
      <div className="w-full min-h-screen pt-5 flex flex-col items-center font-inter p-16 bg-[#f5f5f5] text-[#333333] overflow-hidden dark:bg-[#2d1333] dark:text-[#e0e0e0]">
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-center items-center mt-20"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture Section with Blob Effect */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center p-4"
          variants={itemVariants}
        >
          <div className="relative group">
            {/* Animated Glow Background */}
            <div className="absolute inset-0  opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500 animate-blob"></div>
            
            <img
              src={mypic}
              alt="Profile"
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-white shadow-2xl transition-all duration-700 ease-in-out hover:scale-105"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                animation: "morph 8s ease-in-out infinite"
              }}
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 text-center lg:text-left lg:pl-12">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#4f46e5]">
              Hi, I'm {profile.name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4 text-[#555555] dark:text-[#cbd5e1] min-h-[3rem]">
              {typedText}
              <span className="inline-block w-0.5 h-6 ml-1 bg-[#7c3aed] animate-blink"></span>
            </h3>
          </motion.div>

          <motion.p
            className="text-lg text-[#666666] dark:text-[#cbd5e1] leading-relaxed mb-8 max-w-prose mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {profile.bio}
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center lg:justify-center gap-5 mb-10"
            variants={itemVariants}
          >
            {profile.contact.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md hover:bg-white hover:-translate-y-1 transition-all duration-300 ease-in-out group dark:bg-[#2d1333] dark:border-white/10 dark:hover:bg-[#2d1333]"
              >
                {React.cloneElement(item.icon, {
                  className: `w-6 h-6 transition-colors duration-300`,
                  style: { color: getIconColor(item.name) }
                })}
              </a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-center gap-4"
            variants={itemVariants}
          >
            <a
              href="YOUR_CV_LINK_HERE"
              className="bg-[#7c3aed] text-white px-10 py-3.5 rounded-full font-bold uppercase tracking-wider shadow-lg shadow-purple-200 hover:bg-[#6d28d9] transition-all duration-300 transform hover:scale-105 no-underline"
            >
              Download CV
            </a>
            <a
              href="mailto:abhishekydv2408@gmail.com"
              className="border-2 border-[#7c3aed] text-[#7c3aed] px-10 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 no-underline"
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        .animate-blink { animation: blink 0.75s step-end infinite; }

        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        @keyframes blob-float {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(5px, -10px) scale(1.05); }
          66% { transform: translate(-5px, 10px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob-float 7s infinite alternate;
        }
      `}</style>
      </div>
    </div>
  );
};

export default Home;