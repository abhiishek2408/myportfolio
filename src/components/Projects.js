import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import News from "../image/NewsWeb.png";
import Restro from "../image/RestroWeb.jpg";
import Puzzle from "../image/Puzzle.jpg";
import Library from "../image/Library.jpeg";

const projects = [
  {
    title: "Restaurant Management System",
    description:
      "The Restaurant Management System is a web application designed to manage restaurant operations like orders, menus, billing, and reservations. It allows restaurant staff to manage customer orders, track inventory, update menu items, and handle reservations. The system provides an easy interface for both admins and staff, improving efficiency and customer service.",
    techStack: ["React js", "PHP", "MySQL", "Bootstrap"],
    image: Restro,
    github: "https://github.com/yourusername/restaurant-management-system",
    live: "https://restaurant-management-system.vercel.app",
  },
  {
    title: "Digital News Platform",
    description:
      "The Digital News Platform is a web application that allows users to read, comment on, and share news articles. The platform supports features such as user registration, article categorization, search functionality, and comment threads. Admins can manage news articles, approve or reject comments, and handle the overall content. The platform provides a seamless reading experience and a dynamic content feed.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: News,
    github: "https://github.com/yourusername/digital-news-platform",
    live: "https://digital-news-platform.vercel.app",
  },
  {
    title: "Puzzle Mobile App",
    description:
      "A fun and challenging puzzle game built for mobile devices. The app features a grid-based puzzle where users can solve logical challenges. It uses React Native for a cross-platform experience and integrates a MERN stack (MongoDB, Express.js, React, Node.js) for user authentication, high score tracking, and custom puzzle creation.",
    techStack: ["React Native", "MongoDB", "Express.js", "Node.js"],
    image: Puzzle,
    github: "https://github.com/yourusername/puzzle-app",
    live: "https://example.com/puzzle-app",
  },
  {
    title: "Library Management System",
    description:
      "A full-featured web application for managing library operations. The system handles book cataloging, member registration, book borrowing, and returns. It provides an intuitive admin dashboard to track inventory, manage members, and generate reports. Built with the Laravel framework, it ensures a secure and scalable backend.",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: Library,
    github: "https://github.com/yourusername/library-management-system",
    live: "https://example.com/library-management-system",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#1f141d] text-gray-300 font-lato pt-2 md:pt-16 pb-8">
      <h4 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-wide relative pb-2">
        My Projects
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full"></span>
      </h4>
      <div className="flex flex-nowrap overflow-x-auto gap-8 mt-8 mx-auto px-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {projects.map((project, index) => (
          <div key={index} className="flex-none w-[350px] bg-[#2a1b2d] rounded-2xl shadow-2xl p-6 border-t-8 border-[#ec4899] transition-all duration-300 hover:scale-[1.02] hover:shadow-glow">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-gray-50">{project.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-blue-400 font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-blue-400 font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                <TbWorldWww className="text-lg" />
                <span>Live</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;