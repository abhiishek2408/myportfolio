import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa';

const blogs = [
  {
    title: "The Future of Agentic AI",
    category: "Artificial Intelligence",
    description: "Deep dive into how autonomous agents are reshaping the software engineering landscape and what it means for developers.",
    date: "May 12, 2025",
    readTime: "8 min read",
    link: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-600 to-indigo-600"
  },
  {
    title: "Scalable Architecture Patterns",
    category: "System Design",
    description: "Exploring microservices, event-driven architectures, and how to build systems that handle millions of requests.",
    date: "April 28, 2025",
    readTime: "12 min read",
    link: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Mastering Modern CSS Layouts",
    category: "Frontend Mastery",
    description: "Beyond Flexbox and Grid: modern techniques for creating fluid, high-performance web interfaces with zero layout shift.",
    date: "April 15, 2025",
    readTime: "6 min read",
    link: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    color: "from-pink-600 to-rose-500"
  },
];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="blog" className="relative w-full py-10 bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <FaBookOpen /> Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-black">Insights</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-medium">
            Exploring the intersection of design, technology, and the future of software development through technical articles and case studies.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              className="p-8 md:p-10 bg-slate-100 dark:bg-white/5 glass-dark rounded-[2.5rem] border border-slate-400 dark:border-white/30 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden shadow-none"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden rounded-2xl mb-8">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                <div className={`absolute bottom-6 left-8 py-1.5 px-4 rounded-full bg-gradient-to-r ${blog.color} text-white text-[9px] font-black uppercase tracking-widest shadow-lg`}>
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <FaCalendarAlt className="text-purple-500" /> {blog.date}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <FaClock className="text-pink-500" /> {blog.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 line-clamp-2 leading-snug group-hover:text-purple-500 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-8 line-clamp-3 leading-relaxed">
                  {blog.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5">
                  <a 
                    href={blog.link} 
                    className="inline-flex items-center gap-3 text-slate-900 dark:text-white font-black text-[9px] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform no-underline"
                  >
                    Read Perspective <FaArrowRight className="text-purple-500 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Progress bar decoration */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${blog.color} transition-all duration-700`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3.5 rounded-full border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all">
            Access Full Library
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;