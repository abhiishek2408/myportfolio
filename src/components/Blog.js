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
  return (
    <div className="blog-section w-full py-6 dark:bg-[#2d1333] dark:text-[#e0e0e0]">
      <motion.section 
        className="mt-8 mx-auto max-w-7xl px-6 bg-white/90 backdrop-blur-sm py-10 rounded-[2rem] shadow-[0_20px_60px_-40px_rgba(113,62,235,0.35)] border border-[#713eeb]/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
      {/* Compact Title */}
      <div className="text-center mb-10 relative">
        <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase relative inline-block">
          Latest Articles
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#713eeb] rounded-full"></span>
        </h4>
        <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-[9px]">Thoughts & Insights</p>
      </div>

      {/* Grid - Set to 3 or 4 columns to stay compact */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col bg-[#f9fafb] rounded-xl border border-gray-100 p-5 hover:border-[#713eeb]/30 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline"
          >
            {/* Top Row: Date Badge */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-[9px] font-black text-[#713eeb] bg-[#713eeb]/5 px-2 py-0.5 rounded uppercase">
                {blog.date}
              </span>
              <div className="text-gray-300 group-hover:text-[#713eeb] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#713eeb] transition-colors">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
              {blog.description}
            </p>

            {/* Footer */}
            <div className="mt-auto pt-3 border-t border-gray-200/50">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 group-hover:text-[#713eeb]">
                Read Article
              </span>
            </div>
          </motion.a>
        ))}
      </div>
      </motion.section>
    </div>
  );
};

export default Blog;