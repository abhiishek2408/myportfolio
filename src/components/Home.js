import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import mypic from '../image/mypic.jpg'

// Reusing the inline SVG components from the previous fix
const SvgPhone = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 13.5l-2.493 2.493a1.5 1.5 0 01-2.121 0l-.707-.707a1.5 1.5 0 010-2.121l2.493-2.493a1.5 1.5 0 012.121 0l.707.707a1.5 1.5 0 010 2.121zM9.5 7.5l-2.493-2.493a1.5 1.5 0 00-2.121 0l-.707.707a1.5 1.5 0 000 2.121l2.493 2.493a1.5 1.5 0 002.121 0l.707-.707a1.5 1.5 0 000-2.121zM12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zM12 20a8 8 0 118-8 8.009 8.009 0 01-8 8z"/>
    <path d="M12 9.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM12 14.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z"/>
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

  // State to handle the advanced typewriter effect
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    // Determine the current title from the array
    const currentTitle = profile.titleOptions[currentTitleIndex];

    // Typing logic
    if (!isDeleting && typedText.length < currentTitle.length) {
      setTypingSpeed(100);
      setTypedText(currentTitle.substring(0, typedText.length + 1));
    }
    // Deleting logic (backspacing)
    else if (isDeleting && typedText.length > 0) {
      setTypingSpeed(50);
      setTypedText(currentTitle.substring(0, typedText.length - 1));
    }
    // Transition to the next title
    else if (!isDeleting && typedText.length === currentTitle.length) {
      setTypingSpeed(1500); // Pause for a moment after typing
      setTimeout(() => setIsDeleting(true), 1500);
    }
    // Finished deleting, move to the next title in the array
    else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % profile.titleOptions.length);
      setTypingSpeed(200); // Pause for a moment before starting to type again
    }

    const timer = setTimeout(() => {
      // The state changes will trigger re-renders and continue the effect
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitleIndex, profile.titleOptions, typingSpeed]);


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const getIconColor = (name) => {
    switch (name) {
      case "LinkedIn":
        return "#0077B5";
      case "GitHub":
        return "#ffffff";
      default:
        return "#ffffff"; // Default color for other icons
    }
  };

  return (
    // The single root element now has the new dark background and a light text color
    <div className="w-full min-h-screen pt-5 flex flex-col items-center font-inter p-16 bg-[#2d1333] text-[#e0e0e0] overflow-hidden">
        <motion.div
            className="w-full flex flex-col lg:flex-row justify-center items-center mt-20"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
        >
          {/* Profile Picture Section */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center p-4"
            variants={itemVariants}
          >
            {/* Subtle profile picture styling for the new theme */}
            <div className="relative rounded-full p-2 bg-gradient-to-tr from-[#6b21a8] to-[#a855f7] shadow-md">
              <img
                src={mypic}
                alt="Profile"
                className="w-40 h-40 sm:w-60 sm:h-60 aspect-square rounded-full object-cover border-4 border-white hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3 text-center lg:text-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7]">
                Hi, I'm {profile.name}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 text-[#e0e0e0] min-h-[3rem]">
                {typedText}
                <span className="inline-block w-0.5 h-6 ml-1 bg-white animate-blink"></span>
              </h3>
            </motion.div>

            <motion.p
              className="text-lg text-[#e0e0e0] leading-relaxed mb-6 max-w-prose mx-auto lg:mx-auto"
              variants={itemVariants}
            >
              {profile.bio}
            </motion.p>
            
            {/* Contact Section - Aligned to center for all screen sizes */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-6"
              variants={itemVariants}
            >
              {profile.contact.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                  // Changed button background for new theme color
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2d1333] hover:bg-[#6b21a8] transition-all duration-300 ease-in-out group"
                >
                  {React.cloneElement(item.icon, {
                    // Using a helper function to determine the color of each icon
                    className: `text-xl group-hover:text-white transition-colors duration-300`,
                    style: { color: getIconColor(item.name) }
                  })}
                </a>
              ))}
            </motion.div>

            {/* Attractive Buttons - Aligned to center for all screen sizes */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <a
                href="https://drive.google.com/file/d/1935lrJ8NWNWkLvH6mSnxhpjLXmoL7nAV/view?usp=sharing"
                className="bg-[#6b21a8] text-white px-8 py-3 rounded-full font-bold uppercase shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 no-underline"
              >
                Download CV
              </a>
              <a
                href="mailto:abhishekydv2408@gmail.com"
                className="bg-[#a855f7] text-white px-8 py-3 rounded-full font-bold uppercase shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 no-underline"
              >
                Hire Me
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Custom CSS for animations */}
        <style>{`
          @keyframes blink {
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.75s step-end infinite;
          }
        `}</style>
      </div>
  );
};

export default Home;
