// pages/Blog.js
import React from 'react';

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
    <div className="mt-16 mx-4 md:mx-10 lg:mx-20 font-lato mb-20">
      <h4 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-wide relative pb-2">
       Blog
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full"></span>
      </h4>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 mt-8">
        {blogs.map((blog, index) => (
          <a 
            key={index} 
            href={blog.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full md:w-[calc(33.333%-1.5rem)] relative bg-[#2a1b2d] rounded-2xl shadow-xl p-6 border border-transparent hover:border-[#3b82f6] transition-all duration-300 transform hover:scale-[1.03] group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-50 group-hover:text-cyan-400 transition-colors">{blog.title}</h3>
              <span className="text-sm text-gray-400 whitespace-nowrap">{blog.date}</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">{blog.description}</p>
            <span className="text-pink-400 font-semibold flex items-center gap-1 transition-transform group-hover:translate-x-1">
              Read More →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;