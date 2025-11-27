import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: "How I Built My Portfolio",
    description: "Sharing my process, tech stack, and tips to create a standout portfolio website.",
    date: "April 2025",
    link: "#",
  },
  {
    title: "Top 5 React Libraries I Love",
    description: "Exploring my favorite React libraries that made my projects faster and better.",
    date: "March 2025",
    link: "#"
  },
  {
    title: "Learning Full Stack Development",
    description: "My journey, challenges, and milestones from frontend to backend mastery.",
    date: "February 2025",
    link: "#",
  },
];

const Blog = () => {
  // Animation variants for the section title
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for the blog cards container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        duration: 0.8,
      },
    },
  };

  // Animation variants for each individual blog card
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

  return (
    <div className="min-h-screen bg-[#2d1333] text-[#e0e0e0] font-inter pt-2 md:pt-16 pb-8 overflow-hidden">
      <motion.h4
        className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7] tracking-wide relative pb-2"
        variants={sectionTitleVariants}
        initial="hidden"
        animate="visible"
      >
        Blog
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#6b21a8] to-[#a855f7] rounded-full"></span>
      </motion.h4>
      
      {/*
        FIX: Switched from complex flex layout to simple grid layout for better control and less complex width calculations.
      */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 max-w-[1200px] mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full relative rounded-2xl p-0 overflow-hidden group shadow-2xl bg-[rgba(58,42,62,0.85)] backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:shadow-purple-500/30 flex flex-col justify-between no-underline"
            variants={itemVariants}
          >
            {/* Accent bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[#6b21a8] to-[#a855f7] mb-4" />
            <div className="flex-1 flex flex-col px-6 pt-2 pb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-extrabold text-gray-50 group-hover:text-[#a855f7] transition-colors drop-shadow-sm">
                  {blog.title}
                </h3>
                <span className="text-xs font-semibold text-[#a855f7] bg-[#2d1333]/60 px-2 py-1 rounded-full ml-4 shadow-sm">
                  {blog.date}
                </span>
              </div>
              <p className="text-[15px] text-gray-300 leading-relaxed mb-6 font-medium">
                {blog.description}
              </p>
              <span className="text-[#a855f7] font-bold flex items-center gap-1 transition-transform group-hover:translate-x-1 mt-auto text-base">
                Read More <span aria-hidden>→</span>
              </span>
            </div>
            {/* Glassmorphism shine effect */}
            <span className="pointer-events-none absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-white/60 to-transparent" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
