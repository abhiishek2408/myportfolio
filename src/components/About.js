import React from "react";
import { GiCricketBat } from "react-icons/gi";
import { FaRocket, FaUserTie } from "react-icons/fa";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiExpress, SiHtml5, SiCss3, SiLaravel, SiPhp, SiJavascript, SiDjango, SiGit, SiDocker, SiPostman, SiC, SiCplusplus, SiAngular as SiSiangulardotjs } from 'react-icons/si';
import InternshipTraining from "./InternshipTraining";

const programmingLanguages = [
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "Java", icon: <span className="text-red-500 font-black">J</span> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
];

const skillsData = [
  { subject: "Frontend", A: 95 },
  { subject: "Backend", A: 85 },
  { subject: "Database", A: 80 },
  { subject: "API Integration", A: 90 },
  { subject: "Performance", A: 75 },
];



const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative w-full py-8 bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Intro Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest">
              <FaUserTie /> Professional Profile
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-black">Innovation</span> & Technical Excellence
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              I'm Abhishek, a full-stack engineer dedicated to building scalable, high-performance systems. I bridge the gap between complex backend architectures and intuitive frontend experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="p-6 bg-slate-100 dark:bg-slate-900/60 glass-dark rounded-3xl flex-1 min-w-[200px] border border-slate-400 dark:border-white/30">
                <div className="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-4">
                  <GiCricketBat className="text-2xl text-purple-600" />
                </div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Passions</h4>
                <p className="text-sm text-slate-500">Cricket, Strategic Puzzles, Tech Discovery</p>
              </div>
              <div className="p-6 bg-slate-100 dark:bg-slate-900/60 glass-dark rounded-3xl flex-1 min-w-[200px] border border-slate-400 dark:border-white/30">
                <div className="w-12 h-12 bg-pink-600/10 rounded-2xl flex items-center justify-center mb-4">
                  <FaRocket className="text-2xl text-pink-600" />
                </div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Ambition</h4>
                <p className="text-sm text-slate-500">Mastering Agentic AI & Large Scale Systems</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 md:p-10 bg-slate-100 dark:bg-slate-900/60 glass-dark rounded-[3rem] border border-white/10 dark:border-white/[0.08] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-center font-black text-xs uppercase tracking-[0.3em] text-slate-400 mb-8">Architectural Mastery</h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#9333ea"
                    fill="#9333ea"
                    fillOpacity={0.3}
                    dot={{ r: 4, fill: '#9333ea' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="mb-24">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              Technical <span className="text-purple-600 italic">Ecosystem</span>
            </h3>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Universal Languages", skills: programmingLanguages, color: "from-blue-600 to-indigo-600" },
              { 
                title: "Frontend ecosystems", 
                skills: [
                  {name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />},
                  {name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" />},
                  {name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />},
                  {name: "React (Web & Native)", icon: <SiReact className="text-[#61DAFB]" />},
                  {name: "Angular", icon: <SiSiangulardotjs className="text-[#DD0031]" />},
                ], 
                color: "from-cyan-600 to-blue-600" 
              },
              { 
                title: "Engineered Backend", 
                skills: [
                  {name: "Node.js (Runtime)", icon: <SiNodedotjs className="text-[#339933]" />},
                  {name: "Express.js", icon: <SiExpress className="text-slate-400" />},
                  {name: "Django (Python)", icon: <SiDjango className="text-[#092E20]" />},
                  {name: "Laravel (PHP)", icon: <SiLaravel className="text-[#FF2D20]" />},
                ], 
                color: "from-green-600 to-emerald-600" 
              },
              { 
                title: "Dev & Growth Tools", 
                skills: [
                  {name: "Docker (Containerization)", icon: <SiDocker className="text-[#2496ED]" />},
                  {name: "Postman (API)", icon: <SiPostman className="text-[#FF6C37]" />},
                  {name: "Git (Version Control)", icon: <SiGit className="text-[#F05032]" />},
                ], 
                color: "from-orange-600 to-red-600" 
              },
            ].map((cat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative h-full p-10 bg-slate-100 dark:bg-slate-900/60 glass-dark rounded-[3rem] border border-white/10 dark:border-white/[0.08] transition-all duration-500 shadow-none overflow-hidden"
              >
                <div className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${cat.color} opacity-30`}></div>
                <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${cat.color} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                
                <h4 className="text-slate-900 dark:text-white font-black text-[11px] uppercase tracking-[0.3em] mb-10 pb-2 border-b border-slate-200 dark:border-white/5">{cat.title}</h4>
                
                <div className="space-y-6">
                  {cat.skills.map((skill, si) => (
                    <div key={si} className="flex items-center gap-4 group/skill">
                      <div className="text-2xl transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:rotate-12">
                        {skill.icon}
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-bold text-[12px] group-hover/skill:text-purple-500 transition-colors">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Component */}
        <InternshipTraining />

        {/* Academic Foundation - Redesigned as Centered Timeline */}
        <motion.section 
          className="mt-8 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-white/5 text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
              <FaRocket /> Scholastic Path
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              Academic <span className="text-pink-600">Foundation</span>
            </h3>
            <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative space-y-12">
            {/* Vertical Line - Black/Dark on light bg, subtle white on dark bg */}
            <div className="absolute left-[20px] lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-900 dark:via-white to-transparent"></div>

            {[
              { year: "2022 - 2026", title: "B.Tech in Computer Science", school: "Lovely Professional University", detail: "Major in Full Stack & AI Systems", color: "border-purple-600" },
              { year: "2019 - 2021", title: "Senior Secondary (XII)", school: "Glenhill School", detail: "Excellence in Mathematics & Physics", color: "border-pink-600" },
              { year: "2017 - 2019", title: "Secondary School (X)", school: "Glenhill School", detail: "Foundation in Science & Mathematics", color: "border-blue-600" },
            ].map((edu, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Connection Point - Dark on light bg */}
                <div className="absolute left-[20px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 dark:bg-white border-4 border-white lg:border-purple-600 z-20 shadow-none ring-2 ring-slate-200 dark:ring-white transition-transform hover:scale-125"></div>

                <div className="w-full lg:w-1/2 pl-12 lg:pl-0">
                  <div className="p-8 md:p-10 bg-slate-100 dark:bg-slate-900/60 glass-dark rounded-[2.5rem] border border-white/10 dark:border-white/[0.08] hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden shadow-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 dark:bg-white/5 blur-3xl rounded-full"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        {edu.year}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 transition-colors">
                      {edu.title}
                    </h4>
                    <p className="text-pink-600 font-black text-[11px] uppercase tracking-[0.2em] mb-4">
                      {edu.school}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for Desktop */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default About;

