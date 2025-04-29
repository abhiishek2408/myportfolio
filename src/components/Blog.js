// pages/Blog.js
import React from 'react';
import './Blog.css';

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
    link: "#",
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
    <div className="blog-page">
      <h2 className="blog-title">Blog</h2>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-header">
              <h3>{blog.title}</h3>
              <span className="blog-date">{blog.date}</span>
            </div>
            <p>{blog.description}</p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
