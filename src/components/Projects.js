import React from "react";
import { motion } from "framer-motion";
import newsWeb from "../image/NewsWeb.png";
import RestroWeb from "../image/RestroWeb.png";
import Lms from "../image/Library.jpeg";
import PuzzleApp from "../image/Puzzle.jpg";

const PROJECTS_IMAGES = {
  restaurant: RestroWeb,
  news: newsWeb,
  puzzle: PuzzleApp,
  library: Lms,
};

const GITHUB_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.864 8.163 6.837 9.489.5.092.682-.218.682-.483 0-.237-.008-.867-.012-1.701-2.782.605-3.37-1.341-3.37-1.341-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.531 1.029 1.531 1.029.892 1.528 2.341 1.085 2.91.829.091-.644.35-1.085.637-1.336-2.22-.252-4.555-1.109-4.555-4.935 0-1.089.389-1.979 1.024-2.674-.102-.252-.444-1.264.097-2.637 0 0 .835-.269 2.732 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.114 2.504.331 1.896-1.294 2.731-1.025 2.731-1.025.542 1.373.201 2.385.098 2.637.636.695 1.023 1.585 1.023 2.674 0 3.834-2.339 4.679-4.566 4.925.359.31.678.921.678 1.854 0 1.336-.012 2.417-.012 2.744 0 .267.18.579.688.481C19.14 20.16 22 16.417 22 12 22 6.477 17.523 2 12 2z" />
  </svg>
);

const LIVE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59L8.71 13.71l1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

const projects = [
  {
    title: "Restaurant Management System",
    techStack: ["React", "PHP", "MySQL"],
    image: PROJECTS_IMAGES.restaurant,
    github: "https://github.com/abhiishek2408/Restaurant-Management-System-MERN-Stack",
    live: "https://restaurant-management-system-mern-s.vercel.app/user",
  },
  {
    title: "Digital News Platform",
    techStack: ["React", "Node", "MongoDB"],
    image: PROJECTS_IMAGES.news,
    github: "https://github.com/abhiishek2408/online-news-platform",
    live: "https://online-news-platform.vercel.app/user/dashboard",
  },
  {
    title: "Puzzle Mobile App",
    techStack: ["React Native", "Express"],
    image: PROJECTS_IMAGES.puzzle,
    github: "https://github.com/abhiishek2408/EduzzleApp-React-Native",
    live: "https://github.com/abhiishek2408/EduzzleApp-React-Native",
  },
  {
    title: "Library Management System",
    techStack: ["Laravel", "Tailwind", "MySQL"],
    image: PROJECTS_IMAGES.library,
    github: "https://github.com/abhiishek2408/Library-management-system",
    live: "https://github.com/abhiishek2408/Library-management-system",
  },
];

const Projects = () => {
  return (
    <div className="projects-section w-full py-6 dark:bg-[#2d1333] dark:text-[#e0e0e0]">
      <motion.section 
        className="mt-8 mx-auto max-w-7xl px-6 bg-white/90 backdrop-blur-sm py-10 rounded-[2rem] shadow-[0_20px_60px_-40px_rgba(113,62,235,0.35)] border border-[#713eeb]/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
      {/* Compact Title */}
      <div className="text-center mb-10 relative">
        <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase relative inline-block">
          Portfolio Projects
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#713eeb] rounded-full"></span>
        </h4>
        <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-[9px]">Building Digital Solutions</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col bg-[#f9fafb] rounded-xl border border-gray-100 overflow-hidden hover:border-[#713eeb]/30 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
          >
            {/* Project Image - Reduced Height */}
            <div className="relative h-32 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#713eeb]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content Container */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#713eeb] transition-colors">
                {project.title}
              </h3>

              {/* Tech Stack - Single Line Compact */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-[9px] font-black uppercase text-[#713eeb]/70 bg-[#713eeb]/5 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons - Pushed to bottom */}
              <div className="mt-auto pt-3 border-t border-gray-200/50 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-black text-gray-800 hover:text-[#713eeb] transition-colors uppercase no-underline"
                >
                  {GITHUB_ICON} Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-black text-gray-800 hover:text-[#713eeb] transition-colors uppercase no-underline"
                >
                  {LIVE_ICON} Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.section>
    </div>
  );
};

export default Projects;