import React from 'react';
import { motion } from 'framer-motion';

// Dummy Data Object for Students
const defaultExperiences = [
//   {
//     role: "Full Stack Web Development Intern",
//     company: "Tech Solutions Pvt. Ltd.",
//     duration: "June 2025 - August 2025",
//     description: "Worked on building responsive UI components using React and integrated RESTful APIs with Node.js. Improved application performance by 20% through code optimization.",
//     link: "https://certificate-link.com"
//   },
  {
  role: "Data Structures & Algorithms Training",
  company: "GeeksforGeeks",
  duration: "3 Months (2025)", // Apni date ke hisaab se change karein
  description: "Comprehensive training on Arrays, Linked Lists, Trees, and Graphs. Solved 200+ problems on GFG portal and mastered space-time complexity analysis.",
  link: "https://auth.geeksforgeeks.org/user/your_username" // Aap apni GFG profile ka link bhi de sakte hain
},
//   {
//     role: "Java Programming Training",
//     company: "Coding Academy",
//     duration: "Jan 2025 - March 2025",
//     description: "Completed an intensive 3-month certification in Advanced Java and Data Structures. Solved 100+ algorithmic problems and built a desktop-based library management tool.",
//     link: "#"
//   },
//   {
//     role: "Open Source Contributor",
//     company: "GitHub Community",
//     duration: "2024 - Present",
//     description: "Actively contributing to various JavaScript-based open source projects. Fixed minor bugs and improved documentation for community-driven UI libraries.",
//     link: "https://github.com"
//   }
];

const InternshipTraining = ({ 
  experiences = defaultExperiences, // Uses dummy data if no prop is passed
  containerVariants, 
  itemVariants, 
  sectionTitleVariants, 
  ICONS = { externalLink: <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i> } // Fallback icon
}) => {
  return (
    <motion.section 
      className="mt-8 mx-auto max-w-7xl px-6 bg-white/90 backdrop-blur-sm py-10 rounded-[2rem] shadow-[0_20px_60px_-40px_rgba(113,62,235,0.35)] border border-[#713eeb]/10" 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <motion.div className="mb-8 text-center" variants={sectionTitleVariants}>
        <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase relative inline-block">
          Internship & Training
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#713eeb] rounded-full"></span>
        </h4>
        <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-[9px]">
          Professional Learning & Hands-on Experience
        </p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-[#713eeb]/20 ml-4 md:ml-10 space-y-4">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="relative pl-6 md:pl-12"
            variants={itemVariants}
          >
            {/* Timeline Indicator Dot */}
            <div className="absolute -left-[5.5px] top-5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#713eeb] z-10" />
            
            {/* Compact Card Content */}
            <div className="relative bg-[#f9fafb] rounded-xl p-5 border border-gray-100 hover:border-[#713eeb]/20 hover:bg-white transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                    {exp.role}
                  </h3>
                  <h4 className="text-[10px] md:text-[11px] font-extrabold text-[#713eeb] uppercase tracking-wider mt-0.5">
                    @ {exp.company}
                  </h4>
                </div>

                <span className="shrink-0 text-[9px] font-black text-gray-400 bg-white px-2 py-1 rounded border border-gray-100 uppercase tracking-tighter">
                  {exp.duration}
                </span>
              </div>

              <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed max-w-5xl mb-4">
                {exp.description}
              </p>

              {/* Action Footer */}
              <div className="pt-3 border-t border-gray-200/40 flex items-center justify-between">
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-gray-900 hover:text-[#713eeb] no-underline transition-colors"
                >
                  View Details 
                  <span className="text-xs transform group-hover:translate-x-1 transition-transform">
                    {ICONS.externalLink}
                  </span>
                </a>
                <span className="text-[8px] font-bold text-gray-300 uppercase tracking-widest">
                  Training Verified
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default InternshipTraining;