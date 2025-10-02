import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiExpress, SiMysql, SiHtml5, SiCss3, SiMongodb, SiLaravel, SiPhp, SiTailwindcss, SiJavascript, SiDjango, SiPostgresql, SiGithub, SiGit, SiDocker, SiPostman } from 'react-icons/si';
import { SiC, SiCplusplus } from 'react-icons/si';



const programmingLanguages = [
  { name: "C", icon: <SiC className="text-blue-500 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-700 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "Java", icon: <span className="text-red-600 font-bold text-lg w-8 h-8 inline-block hover:scale-110 transition-transform duration-300">J</span> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "PHP", icon: <SiPhp className="text-purple-500 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
];

const frontendSkills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "React", icon: <SiReact className="text-blue-400 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
];



const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "PHP", icon: <SiPhp className="text-blue-600 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "Django", icon: <SiDjango className="text-green-700 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
];

const databaseSkills = [
  { name: "MySQL", icon: <SiMysql className="text-blue-600 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-emerald-500 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "Postgresql", icon: <SiPostgresql className="text-blue-700 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
];


const toolSkills = [
  { name: "Git", icon: <SiGit className="text-orange-600 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-800 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  // VS Code icon removed due to missing export
  { name: "Docker", icon: <SiDocker className="text-blue-400 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 w-8 h-8 hover:scale-110 transition-transform duration-300" /> },
];



// Icons as inline SVGs or emojis to avoid external dependencies
const ICONS = {
  javascript: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.32 15.34c-.45.98-1.55 1.54-2.82 1.54-1.28 0-2.38-.56-2.82-1.54-.44-.98-.24-2.26 0-3.34h1.9c.14.7.46 1.25.92 1.54.46.29 1.05.44 1.7.44s1.24-.15 1.7-.44c.46-.29.78-.84.92-1.54h1.9c-.24 1.08-.44 2.36 0 3.34zm-6.14-5.34h1.9c.14.7.46 1.25.92 1.54.46.29 1.05.44 1.7.44s1.24-.15 1.7-.44c.46-.29.78-.84.92-1.54h1.9c-.24 1.08-.44 2.36 0 3.34zm3.82-5.34c.46-.29.78-.84.92-1.54h-1.9c-.14.7-.46 1.25-.92 1.54s-1.05.44-1.7.44c-1.28 0-2.38-.56-2.82-1.54-.44-.98-.24-2.26 0-3.34h1.9c-.14.7-.46 1.25-.92 1.54s-1.05.44-1.7.44c-1.28 0-2.38-.56-2.82-1.54-.44-.98-.24-2.26 0-3.34h1.9c-.14.7-.46 1.25-.92 1.54s-1.05.44-1.7.44c-1.28 0-2.38-.56-2.82-1.54-.44-.98-.24-2.26 0-3.34z"/></svg>,
  react: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/></svg>,
  html5: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2.408 14.288L8 14.116V9.884l1.592-.895 1.592-.895 1.592.895 1.592.895v4.232l-1.592 1.172-1.592 1.172-1.592-1.172z"/></svg>,
  css3: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14H7V8h6V6H7.5C6.67 6 6 6.67 6 7.5v9C6 17.33 6.67 18 7.5 18h5.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5zm-1-3h-1.5v2H11v-2h1z"/></svg>,
  nodejs: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3 14c-.67 0-1.28.16-1.8.44-.52.28-.97.66-1.35 1.15-.38-.49-.83-.87-1.35-1.15-.52-.28-1.13-.44-1.8-.44-.94 0-1.74.4-2.4 1.2s-1.02 2.05-1.02 3.4c0 .54.12 1.05.36 1.53.24.48.58.89 1.02 1.23.44.34.93.57 1.5.7.57.13 1.16.2 1.76.2s1.19-.07 1.76-.2c.57-.13 1.06-.36 1.5-.7.44-.34.78-.75 1.02-1.23.24-.48.36-.99.36-1.53 0-1.35-.34-2.5-1.02-3.4s-1.46-1.2-2.4-1.2z"/></svg>,
  mongodb: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14h3v-2.5h-3V14zm-3-3h3V8.5h-3V11z"/></svg>,
  mysql: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>,
  postman: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>,
  insomnia: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>,
  figma: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>,
  chrome: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>,
  docker: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>,
  git: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"/></svg>,
  github: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6z"/></svg>,
  kubernetes: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>,
  certificate: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 15c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>,
  externalLink: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59L8.71 13.71l1.41 1.41L19 6.41V10h2V3h-7z"/></svg>,
};


// Data for all sections
const skillsData = [
  { subject: "Frontend", A: 95 },
  { subject: "Backend", A: 85 },
  { subject: "Database", A: 80 },
  { subject: "API Integration", A: 90 },
  { subject: "Performance", A: 75 },
];





const certifications = [
  { title: "Server-side JavaScript with Node", provider: "Coursera", link: "https://www.coursera.org" },
  { title: "HTML, CSS, and JavaScript for Web Developers ", provider: "Coursera", link: "https://www.udemy.com" },
  { title: "MongoDB Skillathon", provider: "MongoDB University", link: "https://university.mongodb.com" },
  { title: "AI Agents and Agentic AI", provider: "Coursera", link: "https://www.coursera.org/learn/nodejs-express-mongodb-web-development" },
];

const experiences = [
  {
    role: "Digital News Platform",
    company: "College Project / Personal",
    duration: "May 2023",
    description: [
      "Developed a full-stack digital news platform using React, CSS, JavaScript (frontend), Node.js (backend), and MongoDB",
      "Enabled real-time news updates under 500ms using WebSockets and achieved 95% accuracy through API integration",
      "Boosted user engagement by 40% with fast, responsive UI and optimized performance using caching and efficient queries",
      "Secured the platform with JWT/OAuth, built scalable RESTful APIs, and deployed on Vercel with 99.9% uptime reliability"
    ],
    link: "https://github.com/abhiishek2408/online-news-platform"
  },
  {
    role: "Restaurant Management System",
    company: "College Project / Personal",
    duration: "Dec 2024",
    description: [
      "Built a restaurant management system using React, PHP, and MySQL with separate dashboards for users and admins",
      "Added features like online ordering, table reservations, menu management, order tracking, and secure payments",
      "Enhanced UI/UX with Bootstrap and jQuery, ensuring a responsive, interactive, and user-friendly design",
      "Implemented role-based authentication, optimized database, deployed to cloud, and integrated GPT for chat and feedback insights"
    ],
    link: "https://github.com/abhiishek2408/React-Restaurant-Website"
  },
  {
    role: "Educational Puzzle App",
    company: "College Project / Personal",
    duration: "July 2025",
    description: [
      "Engineered a full-stack app with React Native frontend and Node.js/Express backend using MongoDB for 500+ users",
      "Created engaging interactive puzzles to enhance problem-solving and critical thinking abilities",
      "Boosted backend performance by 30% through advanced query improvements and efficient data indexing",
      "Collaborated using Git/GitHub, deployed backend on Vercel, and managed environment security protocols"
    ],
    link: "https://github.com/abhiishek2408/EduzzleApp-React-Native"
  },
  {
    role: "Library Management System (LMS)",
    company: "College Project / Personal",
    duration: "April 2025",
    description: [
      "Developed a robust and scalable Library Management System using Laravel 10+, PHP 8+, Blade, Bootstrap, and MySQL",
      "Implemented role-based authentication for Admin, Librarian, and User",
      "Enabled book management (Add, Edit, Delete, View), issuing/returning books, reservations, and renewals",
      "Integrated overdue alert system and detailed reports for issued, returned, and overdue books",
      "Built admin panel with role management and activity logs",
      "Developed responsive UI using Blade templating and supported RESTful APIs for integration"
    ],
    link: "https://github.com/abhiishek2408/Library-management-system"
  }
];


const education = [
  {
    title: "Bachelor of Technology (B.Tech)",
    institution: "Lovely Professional University",
    duration: "2022 - 2026",
    description: "Major in Computer Science and Engineering",
  },
  {
    title: "Senior Secondary (12th Grade)",
    institution: "Glenhill School",
    duration: "2019 - 2021",
    description: "Specialized in Physics, Chemistry, and Mathematics (PCM).",
  },
  {
    title: "Secondary (10th Grade)",
    institution: "Glenhill School",
    duration: "2017 - 2019",
    description: "Completed with distinction in all major subjects.",
  },
];

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    // Main container with consistent theme
    <div className="w-full min-h-screen bg-[#2d1333] text-[#e0e0e0] font-inter p-4 md:p-8 lg:p-16 overflow-hidden">
      
      {/* About & Radar Chart Section */}
      <motion.div 
        className="flex flex-col lg:flex-row items-start justify-center gap-10 p-5 md:p-10 lg:p-12 bg-[#3a2a3e] rounded-2xl mx-auto max-w-7xl shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About Content */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
  {/** About Text **/}
  <motion.div className="space-y-3" variants={itemVariants}>
    <motion.h4 
      className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7]" 
      variants={itemVariants}
    >
      About
    </motion.h4>
    <motion.p 
      className="text-sm md:text-base leading-relaxed text-gray-300 text-justify" 
      variants={itemVariants}
    >
      Hi, I'm Abhishek, a passionate full-stack developer with a strong focus on crafting beautiful and efficient web applications. I love solving real-world problems through clean code, scalable architectures, and interactive UI experiences. Over time, I've built solid expertise in React, Node.js, Express, and databases like MongoDB and MySQL. I thrive in collaborative environments, enjoy debugging as much as building, and constantly explore new technologies to elevate my development stack.
    </motion.p>
  </motion.div>

  {/** Hobbies & Goal Cards **/}
  <motion.div className="flex flex-col gap-3" variants={containerVariants}>
    <motion.div 
      className="p-4 rounded-2xl bg-[#3a2a3e] border border-[#a855f7] shadow-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
      variants={itemVariants}
    >
      <h4 className="text-xl font-bold mb-1">Hobbies</h4>
      <p className="text-sm text-gray-400">Playing Cricket, Coding, Solving Puzzles, Exploring Tech Trends</p>
    </motion.div>

    <motion.div 
      className="p-4 rounded-2xl bg-[#3a2a3e] border border-[#6b21a8] shadow-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
      variants={itemVariants}
    >
      <h4 className="text-xl font-bold mb-1">Goal</h4>
      <p className="text-sm text-gray-400">To grow as a skilled full-stack developer by working on challenging projects, learning new technologies, and contributing to impactful solutions.</p>
    </motion.div>
  </motion.div>
</div>

        {/* Radar Chart Container */}
        <motion.div 
          className="flex-1 w-full lg:w-auto min-w-[300px] max-w-[550px] flex justify-center items-center"
          variants={itemVariants}
        >
          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-4">Skill Proficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart outerRadius={90} data={skillsData}>
                <PolarGrid stroke="#6b21a8" />
                <PolarAngleAxis dataKey="subject" stroke="#fff" fontSize={14} />
                <Radar name="Skill" dataKey="A" stroke="#a855f7" fill="#a855f7" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>



      {/* --- Skills & Technologies Section --- */}
      <motion.section 
  className="mt-8 mx-auto max-w-7xl"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h5 
    className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7] tracking-wide relative pb-1"
    variants={sectionTitleVariants}
  >
    Skills & Technologies
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#6b21a8] to-[#a855f7] rounded-full"></span>
  </motion.h5>

  <motion.div 
    className="flex flex-wrap justify-center lg:flex-nowrap gap-3 mt-6 p-3 bg-[#3a2a3e] rounded-2xl shadow-lg"
    variants={containerVariants}
  >
    {[
      { title: "Programming Languages", skills: programmingLanguages },
      { title: "Frontend Skills", skills: frontendSkills },
      { title: "Backend Skills", skills: backendSkills },
      { title: "Database Skills", skills: databaseSkills },
      { title: "Other Skills", skills: toolSkills },
    ].map((group, groupIndex) => (
      <motion.div 
        key={groupIndex} 
        className="flex flex-col gap-1 p-2 rounded-lg bg-[#2d1333] border border-[#a855f7] shadow-xl w-full lg:w-1/5 min-w-0 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        variants={itemVariants}
      >
        <h3 className="text-xs md:text-sm font-semibold text-center text-white uppercase">{group.title}</h3>
        <div className="flex flex-wrap justify-center gap-1">
          {group.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="p-1 rounded-md bg-[#3a2a3e] text-base md:text-lg text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg relative">
              <span title={skill.name}>
                {skill.icon}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>





      {/* --- Certifications & Courses Section --- */}
      <motion.section 
        className="mt-16 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h4 
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7] tracking-wide relative pb-2"
          variants={sectionTitleVariants}
        >
          🎓 Certifications & Courses
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#6b21a8] to-[#a855f7] rounded-full"></span>
        </motion.h4>
        <motion.div 
          className="mt-8 p-3 bg-[#3a2a3e] rounded-2xl shadow-lg flex flex-wrap justify-center gap-6"
          variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-3 px-4 py-5 bg-[#2d1333] border border-[#a855f7] shadow-xl rounded-2xl w-full md:w-[280px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="text-3xl text-[#a855f7] flex-shrink-0">
                {ICONS.certificate}
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-100 mb-1">{cert.title}</h5>
                <p className="text-sm text-gray-400 mb-2">{cert.provider}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[#a855f7] text-sm font-medium hover:underline flex items-center gap-1">
                  View Certificate {ICONS.externalLink}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>



      {/* --- Experience Section --- */}
      <motion.section 
        className="mt-16 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h4 
          className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7] tracking-wide relative pb-2"
          variants={sectionTitleVariants}
        >
          Experience
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#6b21a8] to-[#a855f7] rounded-full"></span>
        </motion.h4>
        <motion.div 
          className="flex flex-col gap-8 mt-8 pb-4"
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="w-full relative bg-[#3a2a3e] rounded-2xl shadow-2xl p-8 border-l-8 border-[#a855f7] text-gray-100 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-50">{exp.role}</h3>
                <span className="text-sm text-gray-400">{exp.duration}</span>
              </div>
              <h4 className="text-lg font-semibold text-[#a855f7] mb-4">{exp.company}</h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{exp.description}</p>
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-[#a855f7] font-semibold flex items-center gap-1">
                Learn more {ICONS.externalLink}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>


      {/* --- Education Qualifications Section --- */}
      <motion.section 
  className="mt-16 mx-auto max-w-7xl relative"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h4 
    className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-[#a855f7] tracking-wide relative pb-2"
    variants={sectionTitleVariants}
  >
    Education Qualifications
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#6b21a8] to-[#a855f7] rounded-full"></span>
  </motion.h4>

  <motion.div 
    className="relative max-w-5xl mx-auto py-10 md:py-20"
    variants={containerVariants}
  >
    {/* Central Timeline Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-[90%] 
                    bg-gradient-to-b from-[#6b21a8] via-[#9333ea] to-[#a855f7] 
                    shadow-[0_0_10px_rgba(168,85,247,0.7)] rounded-full animate-pulse hidden md:block top-1/2 -translate-y-1/2"></div>

    <div className="flex flex-col space-y-12">
      {education.map((edu, index) => (
        <motion.div 
          key={index} 
          className={`relative w-full md:w-1/2 ${index % 2 === 0 ? 'md:self-start md:pr-10' : 'md:self-end md:pl-10'}`} 
          variants={itemVariants}
        >
          {/* Connector Circle */}
          <div className={`hidden md:flex absolute top-5 z-10 ${index % 2 === 0 ? 'right-0 -mr-2.5' : 'left-0 -ml-2.5'}`}>
            <div className="relative flex items-center justify-center">
              {/* Outer pulse */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#9333ea] to-[#a855f7] shadow-lg shadow-purple-500/50 animate-ping absolute opacity-70"></div>
              {/* Inner circle with white border */}
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#6b21a8] to-[#a855f7] border-2 border-white shadow-md"></div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-[#3a2a3e] p-6 rounded-2xl shadow-xl text-gray-100 transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
            <h4 className="text-lg font-semibold text-[#a855f7] mb-1">{edu.institution}</h4>
            <span className="text-sm text-gray-400">{edu.duration}</span>
            <p className="text-sm text-gray-300 mt-2">{edu.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</motion.section>


      
    </div>
  );
};

export default About;
