import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const defaultExperiences = [
  {
    role: "Full Stack Development Trainee",
    company: "Coding Ninjas",
    duration: "Jan 2025 - Present",
    description: "Intensive training in MERN stack, database design, and scalable architecture. Solved 300+ algorithmic challenges and built production-ready web applications.",
    link: "#",
    type: "training"
  },
  {
    role: "Data Structures & Algorithms",
    company: "GeeksforGeeks",
    duration: "3 Months (2024)",
    description: "Mastered core computer science concepts including advanced trees, graphs, and dynamic programming. Achieved top ranks in competitive coding contests.",
    link: "https://auth.geeksforgeeks.org/user/your_username",
    type: "training"
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Community",
    duration: "2024 - Present",
    description: "Collaborating with global developers to improve UI libraries and fix security vulnerabilities in JavaScript-based open source ecosystems.",
    link: "https://github.com/abhiishek2408",
    type: "experience"
  }
];

const InternshipTraining = ({ 
  experiences = defaultExperiences,
  containerVariants, 
  itemVariants,
}) => {
  return (
    <motion.section 
      className="mt-8 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
          <FaBriefcase /> Industry Exposure
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
          Professional <span className="text-purple-600">Journey</span>
        </h3>
        <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative space-y-12">
        {/* Vertical Line - Black/Dark on light bg, subtle white on dark bg */}
        <div className="absolute left-[20px] lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-900 dark:via-white to-transparent"></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Connection Point - Dark on light bg */}
            <div className="absolute left-[20px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 dark:bg-white border-4 border-white lg:border-purple-600 z-20 shadow-none ring-2 ring-slate-200 dark:ring-white transition-transform hover:scale-125"></div>

            <div className="w-full lg:w-1/2 pl-12 lg:pl-0">
              <div className="p-8 md:p-10 bg-slate-100 dark:bg-white/5 bglass-dark rounded-[2.5rem] border border-slate-400 dark:border-white/30 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden shadow-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-3xl rounded-full group-hover:bg-purple-600/10 transition-colors"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${exp.type === 'experience' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'} text-xl`}>
                    {exp.type === 'experience' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                  <span className="text-[9px] font-black text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 uppercase tracking-widest">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-500 transition-colors">
                  {exp.role}
                </h4>
                <p className="text-pink-600 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
                  @ {exp.company}
                </p>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8">
                  {exp.description}
                </p>

                <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-white/5">
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-900 dark:text-white font-black text-[9px] uppercase tracking-widest no-underline group-hover:text-purple-500 transition-colors"
                  >
                    View Credential <FaExternalLinkAlt />
                  </a>
                  <div className="flex items-center gap-2 text-green-500 font-black text-[9px] uppercase tracking-widest">
                    <FaCheckCircle /> Verified
                  </div>
                </div>
              </div>
            </div>
            
            {/* Spacer for Desktop */}
            <div className="hidden lg:block lg:w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default InternshipTraining;