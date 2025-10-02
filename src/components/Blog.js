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
    <div className="min-h-screen bg-[#2d1333] text-[#e0e0e0] font-inter pt-2 md:pt-16 pb-8 px-4 overflow-hidden">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto"
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
            // Removed specific `w-[calc(...)]` for simpler grid behavior
            className="block h-full relative bg-[#3a2a3e] rounded-2xl shadow-xl p-6 border border-transparent transition-all duration-300 transform hover:scale-[1.03] group hover:border-[#a855f7] flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-50 group-hover:text-[#a855f7] transition-colors">{blog.title}</h3>
                <span className="text-sm text-gray-400 whitespace-nowrap ml-4">{blog.date}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{blog.description}</p>
            </div>
            {/* FIX: Ensure the "Read More" link stays at the bottom and the arrow is clearly visible */}
            <span className="text-[#a855f7] font-semibold flex items-center gap-1 transition-transform group-hover:translate-x-1 mt-auto">
              Read More &rarr;
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;