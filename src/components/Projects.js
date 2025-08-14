import React from "react";
import { motion } from "framer-motion";
import newsWeb from  '../image/NewsWeb.png';
import RestroWeb from  '../image/RestroWeb.png';
import Lms from  '../image/Library.jpeg';
import PuzzleApp from  '../image/Puzzle.jpg';

// Placeholder images to ensure the code runs without missing assets.
// In a real application, these would be actual image imports.
const PROJECTS_IMAGES = {
  restaurant: RestroWeb,
  news: newsWeb,
  puzzle: PuzzleApp,
  library: Lms,
};

// SVG icons for GitHub and Live links
const GITHUB_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.864 8.163 6.837 9.489.5.092.682-.218.682-.483 0-.237-.008-.867-.012-1.701-2.782.605-3.37-1.341-3.37-1.341-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.531 1.029 1.531 1.029.892 1.528 2.341 1.085 2.91.829.091-.644.35-1.085.637-1.336-2.22-.252-4.555-1.109-4.555-4.935 0-1.089.389-1.979 1.024-2.674-.102-.252-.444-1.264.097-2.637 0 0 .835-.269 2.732 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.114 2.504.331 1.896-1.294 2.731-1.025 2.731-1.025.542 1.373.201 2.385.098 2.637.636.695 1.023 1.585 1.023 2.674 0 3.834-2.339 4.679-4.566 4.925.359.31.678.921.678 1.854 0 1.336-.012 2.417-.012 2.744 0 .267.18.579.688.481C19.14 20.16 22 16.417 22 12 22 6.477 17.523 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LIVE_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59L8.71 13.71l1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

// Array of project data
const projects = [
  {
    title: "Restaurant Management System",
    description:
      "A comprehensive web application to streamline restaurant operations, including order tracking, menu management, billing, and reservations. This system provides an intuitive interface for staff and administrators to enhance efficiency and customer service.",
    goal: "To build a robust and scalable full-stack application that handles complex business logic and provides a seamless user experience. Focused on mastering server-side rendering and database design.",
    techStack: ["React js", "PHP", "MySQL", "Bootstrap"],
    image: PROJECTS_IMAGES.restaurant,
    github: "https://github.com/abhiishek2408/React-Restaurant-Website", // Placeholder link
    live: "https://github.com/abhiishek2408/React-Restaurant-Website", // Placeholder link
  },
  {
    title: "Digital News Platform",
    description:
      "A dynamic news platform where users can read, comment on, and share articles. The application includes user authentication, article categorization, advanced search functionality, and a robust admin panel for content management.",
    goal: "To develop a high-performance content-driven platform using the MERN stack. The objective was to implement secure user authentication, create RESTful APIs, and optimize the database for fast content retrieval.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: PROJECTS_IMAGES.news,
    github: "https://github.com/abhiishek2408/online-news-platform", // Placeholder link
    live: "https://vercel.com/abhishek-yadavs-projects-9805436e/online-news-platform", // Placeholder link
  },
  {
    title: "Puzzle Mobile App",
    description:
      "A challenging and interactive mobile puzzle game designed for logical problem-solving. This cross-platform application allows users to track high scores, and create and share custom puzzles.",
    goal: "To gain hands-on experience with mobile application development using React Native and to build a backend that manages user data and game state efficiently. The focus was on state management and API integration in a mobile context.",
    techStack: ["React Native", "MongoDB", "Express.js", "Node.js"],
    image: PROJECTS_IMAGES.puzzle,
    github: "https://github.com/abhiishek2408/EduzzleApp-React-Native", // Placeholder link
    live: "https://github.com/abhiishek2408/EduzzleApp-React-Native", // Placeholder link
  },
  {
    title: "Library Management System",
    description:
      "A complete solution for managing library operations, including book cataloging, member registration, borrowing, and returns. The system features a secure and scalable backend with an intuitive admin dashboard for inventory management and reporting.",
    goal: "To master the Laravel framework by building a secure, full-featured web application. The goal was to understand MVC architecture, Eloquent ORM, and advanced database relationships within a large-scale project.",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: PROJECTS_IMAGES.library,
    github: "https://github.com/abhiishek2408/Library-management-system", // Placeholder link
    live: "https://github.com/abhiishek2408/Library-management-system", // Placeholder link
  },
];

const Projects = () => {
  // Animation variants for the container and each project card
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animation
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#2d1333] text-[#e0e0e0] font-inter pt-2 md:pt-16 pb-8 overflow-hidden">
      <motion.h4
        className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7] tracking-wide relative pb-2"
        variants={sectionTitleVariants}
        initial="hidden"
        animate="visible"
      >
        My Projects
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#6b21a8] to-[#a855f7] rounded-full"></span>
      </motion.h4>
      
      {/* Scrollable container for projects */}
      <motion.div
        className="flex flex-nowrap overflow-x-auto gap-8 mt-8 mx-auto px-4 pb-4 md:pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-none w-[350px] bg-[#3a2a3e] rounded-2xl shadow-2xl p-6 border-t-8 border-[#a855f7] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            variants={itemVariants}
          >
            {/* Project image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-4 border-2 border-gray-700"
            />
            {/* Project title */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-50">{project.title}</h3>
            </div>
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#2d1333] text-[#a855f7] text-xs font-semibold rounded-full border border-[#a855f7] transition-colors hover:bg-[#a855f7] hover:text-[#2d1333]"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Project description */}
            <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.description}</p>
            {/* Project goal */}
            <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 border-gray-500 pl-2 mb-4">
              <span className="font-bold text-gray-200">Goal:</span> {project.goal}
            </p>
            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#2d1333] text-[#a855f7] font-semibold rounded-lg hover:bg-[#6b21a8] hover:text-white transition-colors"
              >
                {GITHUB_ICON}
                <span>GitHub</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#2d1333] text-[#a855f7] font-semibold rounded-lg hover:bg-[#6b21a8] hover:text-white transition-colors"
              >
                {LIVE_ICON}
                <span>Live</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center text-sm text-gray-500 mt-4">
        (Scroll horizontally to see all projects)
      </div>
    </div>
  );
};

export default Projects;
