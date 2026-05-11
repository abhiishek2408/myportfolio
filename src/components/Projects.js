import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Magnetic from "./Magnetic";
import newsWeb from "../image/NewsWeb.png";
import RestroWeb from "../image/RestroWeb.png";
import Lms from "../image/Library.jpeg";
import PuzzleApp from "../image/Puzzle.jpg";

const projects = [
  {
    title: "Eco-News Platform",
    category: "Full Stack Development",
    tech: ["React", "Node.js", "MongoDB"],
    description: "A high-performance news platform with real-time updates and seamless user experience.",
    image: newsWeb,
    github: "https://github.com/abhiishek2408/online-news-platform",
    live: "#",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "DineSmart System",
    category: "Enterprise Solution",
    tech: ["React", "PHP", "MySQL"],
    description: "An integrated restaurant management system featuring smart ordering and admin dashboards.",
    image: RestroWeb,
    github: "https://github.com/abhiishek2408/Restaurant-Management-System-MERN-Stack",
    live: "#",
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "Eduzzle Learning",
    category: "Mobile Application",
    tech: ["React Native", "Express"],
    description: "Interactive educational puzzles designed to enhance critical thinking skills in young learners.",
    image: PuzzleApp,
    github: "https://github.com/abhiishek2408/EduzzleApp-React-Native",
    live: "#",
    color: "from-orange-600 to-red-500"
  },
  {
    title: "LibriTrack",
    category: "Management System",
    tech: ["Laravel", "Blade", "MySQL"],
    description: "A robust library management system with specialized roles and activity tracking.",
    image: Lms,
    github: "https://github.com/abhiishek2408/Library-management-system",
    live: "#",
    color: "from-emerald-600 to-teal-500"
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="relative w-full py-10 bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <FaCode /> Featured Labs
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Creations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-medium">
            Explore a collection of engineered solutions focused on performance, scalability, and user-centric design.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -15 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
              className="group relative h-[520px] bg-slate-900 rounded-[3.5rem] border-none overflow-hidden transition-all duration-700 shadow-2xl"
            >
              {/* Image Background with zoom and luminosity */}
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
                />
              </div>

              {/* Spotlight Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(124,58,237,0.15)_0%,transparent_50%)]"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Project Status Tag */}
              <div className={`absolute top-10 left-10 py-2.5 px-5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 group-hover:border-purple-500/50`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mr-2 animate-pulse`}></span>
                {project.category}
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="space-y-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-black text-white leading-none">{project.title}</h3>
                  <p className="text-slate-400 text-base font-medium line-clamp-2 max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-white/5 text-slate-300 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-8 pt-6">
                    <Magnetic>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white no-underline font-black text-[10px] uppercase tracking-[0.2em] hover:text-purple-400 transition-colors"
                      >
                        <FaGithub className="text-lg" /> Source Code
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white no-underline font-black text-[10px] uppercase tracking-[0.2em] hover:text-pink-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-sm" /> Live Demo
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </div>

              {/* Glowing side accent */}
              <div className={`absolute bottom-0 right-0 w-2.5 h-0 group-hover:h-full bg-gradient-to-t ${project.color} transition-all duration-1000 ease-out shadow-[0_0_30px_rgba(124,58,237,0.3)]`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mt-12">
            <a 
              href="https://github.com/abhiishek2408" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 dark:bg-white/10 rounded-2xl border-none text-slate-900 dark:text-white font-black uppercase tracking-widest text-[11px] hover:bg-purple-600 hover:text-white transition-all no-underline shadow-2xl"
            >
              <FaGithub size={18} /> View More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;