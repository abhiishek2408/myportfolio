import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiCricketBat } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiExpress, SiMysql, SiHtml5, SiCss3, SiMongodb, SiLaravel, SiPhp, SiTailwindcss, SiJavascript, SiDjango, SiPostgresql, SiGithub, SiGit, SiDocker, SiPostman } from 'react-icons/si';
import { SiC, SiCplusplus } from 'react-icons/si';
import InternshipTraining from "./InternshipTraining";


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
    <div className="w-full min-h-screen about-section dark:bg-[#2d1333] dark:text-[#e0e0e0] font-inter p-2 md:p-4 lg:p-6 overflow-hidden text-[0.95rem]">
      
    


    {/* --- Main Info & Radar Section --- */}
<motion.div 
  className="flex flex-col lg:flex-row items-stretch justify-center gap-10 p-8 md:p-12 bg-white/90 backdrop-blur-sm rounded-[2rem] mx-auto max-w-7xl shadow-[0_25px_70px_-40px_rgba(113,62,235,0.35)] border border-[#713eeb]/10 mt-10"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {/* Left Column: Bio & Cards */}
  <div className="flex-[1.5] flex flex-col gap-8 dark:bg-[#2d1333] dark:text-[#e0e0e0]">
    
    {/* Bio Content Box */}
    <motion.div 
      className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 border border-gray-100 shadow-inner"
      variants={itemVariants}
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-[#713eeb]"></div>
      
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Hi, I'm <span className="text-[#713eeb] font-bold">Abhishek</span>, a driven <span className="text-[#713eeb] font-bold">full-stack developer</span> committed to engineering high-performance web solutions.
        </p>
        <p className="text-sm md:text-base opacity-90 font-medium">
          I specialize in building scalable architectures using <span className="font-bold text-gray-900">React, Node.js, and Cloud Technologies.</span> My approach combines technical precision with a focus on seamless user experiences.
        </p>
      </div>
    </motion.div>

    {/* Hobbies & Goal Cards Side-by-Side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Hobbies Card */}
      <motion.div 
        className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-[#713eeb]/30 transition-all duration-300"
        variants={itemVariants}
      >
        <div className="w-14 h-14 rounded-2xl bg-[#713eeb]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <GiCricketBat size={30} className="text-[#713eeb]" />
        </div>
        <h5 className="text-lg font-bold text-gray-900 mb-1">Hobbies</h5>
        <p className="text-xs md:text-sm text-gray-500 font-medium italic">Cricket, Coding, Puzzles, Tech Exploration</p>
      </motion.div>

      {/* Goal Card */}
      <motion.div 
        className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-[#713eeb]/30 transition-all duration-300"
        variants={itemVariants}
      >
        <div className="w-14 h-14 rounded-2xl bg-[#713eeb]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <FaRocket size={28} className="text-[#713eeb]" />
        </div>
        <h5 className="text-lg font-bold text-gray-900 mb-1">Goal</h5>
        <p className="text-xs md:text-sm text-gray-500 font-medium">To lead impactful projects and master Agentic AI systems.</p>
      </motion.div>
    </div>
  </div>

  {/* Right Column: Skill Radar */}
  <motion.div 
    className="flex-1 flex flex-col bg-[#fafafa] rounded-[2rem] border border-gray-100 p-8 items-center justify-center relative overflow-hidden"
    variants={itemVariants}
  >
    {/* Heading updated to #713eeb */}
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full text-center">
        <h3 className="text-sm font-black text-[#713eeb] tracking-[0.25em] uppercase drop-shadow-sm">
          Architecture Proficiency
        </h3>
        <div className="w-8 h-1 bg-[#713eeb]/20 mx-auto mt-2 rounded-full"></div>
    </div>
    
    <div className="w-full h-[320px] mt-10">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
          <PolarGrid stroke="#e2e8f0" strokeWidth={1} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#713eeb', fontSize: 10, fontWeight: 800 }} 
          />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#713eeb"
            strokeWidth={3}
            fill="#713eeb"
            fillOpacity={0.15}
            dot={{ r: 6, fill: '#713eeb', strokeWidth: 3, stroke: '#fff' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
</motion.div>



      {/* --- Skills & Technologies Section --- */}
{/* --- Technical Ecosystem Section --- */}
<motion.section 
  className="mt-8 mx-auto max-w-7xl px-6 bg-white/90 backdrop-blur-sm py-10 rounded-[2rem] shadow-[0_20px_60px_-40px_rgba(113,62,235,0.35)] border border-[#713eeb]/10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  {/* Compact Header */}
  <div className="text-center mb-10 relative">
    <motion.h2 
      className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase"
      variants={itemVariants}
    >
      Technical <span className="text-[#713eeb]">Ecosystem</span>
    </motion.h2>
    <div className="mt-2 flex justify-center items-center gap-1.5">
      <span className="w-8 h-0.5 bg-[#713eeb] rounded-full"></span>
      <span className="w-2 h-0.5 bg-[#713eeb]/40 rounded-full"></span>
    </div>
  </div>

  {/* Tighter Skills Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
    {/* Category Cards */}
    {[
      { title: "Frontend", skills: frontendSkills, delay: 0.1 },
      { title: "Backend", skills: backendSkills, delay: 0.2 },
      { title: "Programming", skills: programmingLanguages, delay: 0.3 },
      { title: "Databases", skills: databaseSkills, delay: 0.4 },
      { title: "Tools", skills: toolSkills, delay: 0.5 },
    ].map((category, catIdx) => (
      <motion.div 
        key={catIdx}
        className="bg-[#f9fafb] rounded-xl p-5 border border-gray-100 hover:border-[#713eeb]/20 transition-all duration-300 group"
        variants={itemVariants}
      >
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-sm font-black text-gray-800 uppercase tracking-wider">{category.title}</h4>
          <div className="text-[#713eeb]/30 group-hover:text-[#713eeb] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </div>
        </div>

        <div className="space-y-4">
          {category.skills.map((skill, sIdx) => {
            const level = 85 - (sIdx * 5); 
            return (
              <div key={sIdx} className="relative">
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="text-lg transition-all duration-500">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] font-bold text-gray-600">{skill.name}</span>
                  </div>
                  <span className="text-[9px] font-black text-[#713eeb]">{level}%</span>
                </div>
                <div className="h-1 w-full bg-gray-200/50 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#713eeb] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: category.delay }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    ))}

    {/* Specialized Core Card - Matching Compact Style */}
    <motion.div 
      className="lg:col-span-1 md:col-span-2 bg-[#f9fafb] rounded-xl p-5 border-2 border-[#713eeb]/10 relative overflow-hidden group"
      variants={itemVariants}
    >
      <h3 className="text-sm font-black text-gray-900 mb-6 flex items-center gap-2 uppercase tracking-wider">
        <span className="text-base"><i className="fas fa-rocket" aria-hidden="true"></i></span>
        Specializations
      </h3>

      <div className="space-y-6">
        {[
          { name: "Agentic AI", percent: 85, icon: <i className="fas fa-robot" aria-hidden="true"></i> },
          { name: "Ethical Hacking", percent: 80, icon: <i className="fas fa-shield-halved" aria-hidden="true"></i> }
        ].map((spec, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest flex items-center gap-2">
                <span className="text-xs text-[#713eeb]">{spec.icon}</span>
                {spec.name}
              </span>
              <span className="text-base font-black text-[#713eeb]">{spec.percent}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#713eeb] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${spec.percent}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</motion.section>


      {/* --- Certifications & Courses Section --- */}
<motion.section 
  className="mt-8 mx-auto max-w-7xl px-6 bg-white/90 backdrop-blur-sm py-10 rounded-[2rem] shadow-[0_20px_60px_-40px_rgba(113,62,235,0.35)] border border-[#713eeb]/10"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Compact Centered Heading */}
  <motion.div className="mb-10 text-center" variants={sectionTitleVariants}>
    <h4 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase relative inline-block">
      Certifications
      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#713eeb] rounded-full"></span>
    </h4>
    <p className="text-gray-400 mt-2 font-bold uppercase tracking-widest text-[9px]">Verified Credentials</p>
  </motion.div>

  {/* Compact Grid */}
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    variants={containerVariants}
  >
    {certifications.map((cert, index) => (
      <div 
        key={index} 
        className="group relative flex flex-col p-5 bg-[#f9fafb] rounded-xl border border-gray-100 hover:border-[#713eeb]/20 hover:bg-white transition-all duration-300"
      >
        <div className="relative z-10">
          {/* Top Row: Mini Icon & Provider */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl text-[#713eeb]">
              {ICONS.certificate}
            </div>
            <span className="px-2 py-0.5 rounded-md bg-white border border-gray-100 text-[9px] font-black text-gray-500 uppercase tracking-tighter">
              {cert.provider}
            </span>
          </div>

          {/* Title & Short Description */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#713eeb] transition-colors">
              {cert.title}
            </h5>
            <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
              Issued by {cert.provider} • Verified achievement.
            </p>
          </div>

          {/* Slim Action Link */}
          <div className="pt-3 border-t border-gray-200/50">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full text-[9px] font-black uppercase tracking-widest text-gray-900 hover:text-[#713eeb] transition-colors no-underline"
            >
              <span>View Credential</span>
              <span className="text-xs transform group-hover:translate-x-0.5 transition-transform">
                {ICONS.externalLink}
              </span>
            </a>
          </div>
        </div>
      </div>
    ))}
  </motion.div>
</motion.section>


      {/* --- Experience Section --- */}
<InternshipTraining/>


{/* --- Education Qualifications Section --- */}
<motion.section 
  className="mt-16 mx-auto max-w-7xl px-6 bg-white/90 backdrop-blur-sm py-12 rounded-3xl shadow-[0_20px_60px_-40px_rgba(113,62,235,0.35)] border border-[#713eeb]/10" // Reduced outermost width
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Centered Main Title */}
  <motion.div className="mb-12 text-center" variants={sectionTitleVariants}>
    <h4 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase relative inline-block">
      Academic Foundation
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#713eeb] rounded-full"></span>
    </h4>
  </motion.div>

  {/* Compact & Focused Timeline Container */}
  <div className="relative border-l border-[#713eeb]/20 ml-4 md:ml-8 space-y-4"> 
    {education.map((edu, index) => (
      <motion.div 
        key={index} 
        className="relative pl-6 md:pl-10"
        variants={itemVariants}
      >
        {/* Minimal Timeline Dot */}
        <div className="absolute -left-[5.5px] top-6 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#713eeb] z-10" />
        
        {/* Full-Width Card within the narrowed container */}
        <motion.div 
          className="group relative bg-[#f9fafb] rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            {/* Small Icon */}
            <div className="shrink-0 w-9 h-9 flex items-center justify-center bg-white rounded-lg border border-gray-100 text-[#713eeb] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4 0h8" />
              </svg>
            </div>

            {/* Content Group */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-1">
                <div className="space-y-0.5">
                  {/* Line 1: Degree Title */}
                  <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                    {edu.title}
                  </h3>
                  
                  {/* Line 2: Institution Name */}
                  <div className="text-[10px] md:text-[11px] font-bold text-[#713eeb] uppercase tracking-wider">
                    {edu.institution}
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="shrink-0 mt-1 md:mt-0">
                  <span className="text-[9px] font-black text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                    {edu.duration}
                  </span>
                </div>
              </div>

              {/* Line 3: Description */}
              <p className="text-[11px] md:text-xs text-gray-500 mt-2 line-clamp-1 transition-all duration-300">
                {edu.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</motion.section>
      
    </div>
  );
};

export default About;
