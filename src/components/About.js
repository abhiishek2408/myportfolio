import React from "react";
import {
  SiJavascript, SiMongodb, SiMysql, SiPostman, SiFigma, SiGooglechrome,
  SiGit, SiDocker, SiGithub, SiInsomnia, SiKubernetes
} from "react-icons/si";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaCertificate, FaExternalLinkAlt
} from "react-icons/fa";

const skillsData = [
  { subject: "Frontend", A: 95 },
  { subject: "Backend", A: 85 },
  { subject: "Database", A: 80 },
  { subject: "API Integration", A: 90 },
  { subject: "Performance", A: 75 },
];

const programmingLanguages = [
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
];

const frontendSkills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiJavascript />, name: "JavaScript" },
];

const backendSkills = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

const databaseSkills = [
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

const toolSkills = [
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiInsomnia />, name: "Insomnia" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiGooglechrome />, name: "Chrome DevTools" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
];


const certifications = [
  { title: "Full-Stack Web Development", provider: "Coursera", link: "https://www.coursera.org" },
  { title: "Advanced React", provider: "Udemy", link: "https://www.udemy.com" },
  { title: "MongoDB Basics", provider: "MongoDB University", link: "https://university.mongodb.com" },
  { title: "Node.js, Express, and MongoDB", provider: "Coursera", link: "https://www.coursera.org/learn/nodejs-express-mongodb-web-development" },
];

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "XYZ Tech Solutions",
    duration: "Jan 2024 - Apr 2024",
    description: "Worked on building responsive UI using React.js, optimized components for performance, and collaborated with the backend team for REST API integration.",
    link: "https://xyztech.com"
  },
  {
    role: "Web Developer",
    company: "Freelance",
    duration: "May 2023 - Dec 2023",
    description: "Created websites for clients using HTML, CSS, JavaScript, and React. Delivered SEO-optimized, mobile-friendly designs.",
    link: "https://portfolio.com"
  },
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
  return (
    <div className="min-h-screen bg-[#1f141d] text-gray-300 font-poppins pt-8 md:pt-16 pb-8">
      {/* About & Radar Chart Section */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 p-5  md:p-10 lg:p-20 bg-gradient-to-r from-[#2c1f2d] to-[#1f141d] rounded-2xl mx-4 md:mx-10 lg:mx-20 shadow-lg">
        {/* Radar Chart Container */}
        <div className="flex-1 w-full lg:w-auto min-w-[300px] max-w-[550px] flex justify-center items-center **mx-4**">
          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-4">Skill Proficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart outerRadius={90} data={skillsData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" stroke="#fff" fontSize={14} />
                <Radar name="Skill" dataKey="A" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* About Content */}
        <div className="flex-2 w-full lg:w-auto min-w-[350px] flex flex-col gap-5 mt-8 lg:mt-0 **mx-4**">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">About</h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-400 text-justify">
            Hi, I'm Abhishek, a passionate full-stack developer with a strong focus on crafting beautiful and efficient web applications. I love solving real-world problems through clean code, scalable architectures, and interactive UI experiences. Over time, I've built solid expertise in React, Node.js, Express, and databases like MongoDB and MySQL.
            I thrive in collaborative environments, enjoy debugging as much as building, and constantly explore new technologies to elevate my development stack. Beyond coding, I'm a strong advocate of user-first design and lifelong learning.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#3a2a3e] to-[#2f1f2b] border border-[#0d3cd5] text-white shadow-xl min-w-[290px] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h4 className="text-xl font-bold mb-2">Skills</h4>
              <p className="text-sm text-gray-400">Frontend, Backend, APIs</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#3a2a3e] to-[#2f1f2b] border border-[#0d3cd5] text-white shadow-xl min-w-[290px] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h4 className="text-xl font-bold mb-2">Hobbies</h4>
              <p className="text-sm text-gray-400">Gaming, Music, Reading</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#3a2a3e] to-[#2f1f2b] border border-[#0d3cd5] text-white shadow-xl min-w-[290px] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h4 className="text-xl font-bold mb-2">Goal</h4>
              <p className="text-sm text-gray-400">To become a top software architect</p>
            </div>
          </div>
        </div>
      </div>
      
      
      
      {/* Skills & Technologies Section */}
      <div className="mt-16 mx-4 md:mx-10 lg:mx-20 font-lato">
  <h5 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-wide relative pb-2">
    Skills & Technologies
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full"></span>
  </h5>
  <div className="flex flex-wrap justify-center lg:flex-nowrap gap-4 mt-10 p-5 bg-[#2c1f2d] rounded-2xl shadow-lg">
    {[
      { title: "Programming Languages", skills: programmingLanguages },
      { title: "Frontend Skills", skills: frontendSkills },
      { title: "Backend Skills", skills: backendSkills },
      { title: "Database Skills", skills: databaseSkills },
      { title: "Other Skills", skills: toolSkills },
    ].map((group, groupIndex) => (
      <div key={groupIndex} className="flex flex-col gap-2 p-3 rounded-xl bg-gradient-to-br from-[#3a2a3e] to-[#2f1f2b] border border-[#0d3cd5] shadow-xl w-full lg:w-1/4 min-w-0 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-sm md:text-lg font-semibold text-center text-white uppercase">{group.title}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {group.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="p-2 rounded-lg bg-[#3a2a3e] text-lg md:text-xl text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg relative">
              <span title={skill.name}>
                {skill.icon}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
      

      {/* Tools & Technologies Section */}
  
<section className="mt-16 mx-4 md:mx-10 lg:mx-20 font-lato">
  <h4 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-wide relative pb-2">
    Tools & Technologies
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full"></span>
  </h4>
  <div className="mt-8 p-5 bg-[#2a1b2d] rounded-2xl shadow-lg flex flex-wrap justify-center gap-4">
    {toolSkills.map((tool, index) => (
      <div key={index} className="flex items-center gap-2 p-3 rounded-xl bg-[#3a2a3e] border border-[#0d3cd5] shadow-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer text-sm">
        {React.cloneElement(tool.icon, { className: 'text-lg md:text-xl' })}
        <span className="text-white">{tool.name}</span>
      </div>
    ))}
  </div>
</section>

      {/* Certifications & Courses Section */}
     <section className="mt-16 mx-4 md:mx-10 lg:mx-20">
  <h4 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-wide relative pb-2">
    🎓 Certifications & Courses
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full"></span>
  </h4>
  <div className="mt-8 p-3 bg-[#2a1b2d] rounded-2xl shadow-lg flex flex-wrap justify-center gap-6">
    {certifications.map((cert, index) => (
      <div key={index} className="flex items-start gap-3 px-4 py-5 bg-[#3a2a3e] border border-[#0d3cd5] shadow-xl rounded-2xl w-full md:w-[280px] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="text-3xl text-yellow-500 flex-shrink-0">
          <FaCertificate />
        </div>
        <div>
          <h5 className="text-lg font-semibold text-gray-100 mb-1">{cert.title}</h5>
          <p className="text-sm text-gray-400 mb-2">{cert.provider}</p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 text-sm font-medium hover:underline flex items-center gap-1">
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
      

      {/* Experience Section */}
      <section className="mt-16 mx-4 md:mx-10 lg:mx-20 font-lato">
  <h4 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-wide relative pb-2">
     Experience
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full"></span>
  </h4>
  <div className="flex flex-nowrap overflow-x-auto gap-8 mt-8 pb-4 scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-[#2c1f2d]">
    {experiences.map((exp, index) => (
      <div key={index} className="flex-none w-[700px] relative bg-[#3a2a3e] rounded-2xl shadow-2xl p-8 border-l-8 border-[#ec4899] text-gray-100">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-50">{exp.role}</h3>
          <span className="text-sm text-gray-400">{exp.duration}</span>
        </div>
        <h4 className="text-lg font-semibold text-indigo-300 mb-4">{exp.company}</h4>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">{exp.description}</p>
        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 font-semibold flex items-center gap-1">
          Learn more <FaExternalLinkAlt className="inline-block text-xs" />
        </a>
      </div>
    ))}
  </div>
</section>

      

{/* Education Qualifications Section */}
<section className="mt-16 mx-4 md:mx-10 lg:mx-20">
  <h4 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent tracking-wide relative pb-2">
    Education Qualifications
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full"></span>
  </h4>
  <div className="relative max-w-5xl mx-auto py-10 md:py-20">
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-[90%] bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full hidden md:block top-1/2 -translate-y-1/2"></div>
    <div className="flex flex-col space-y-12">
      {education.map((edu, index) => (
        <div
          key={index}
          className={`relative w-full md:w-1/2 ${
            index % 2 === 0 ? 'md:self-start md:pr-10' : 'md:self-end md:pl-10'
          }`}
        >
          <div className={`hidden md:block absolute w-5 h-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full border-4 border-[#291b2c] top-5 z-10 ${
            index % 2 === 0 ? 'right-0 -mr-2.5' : 'left-0 -ml-2.5'
          }`}></div>
          <div
            className={`bg-[#3a2a3e] p-6 rounded-2xl shadow-xl text-gray-100 transition-all duration-400 hover:scale-[1.02] hover:shadow-2xl`}
          >
            <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
            <h4 className="text-lg font-semibold text-indigo-200 mb-1">{edu.institution}</h4>
            <span className="text-sm text-gray-400">{edu.duration}</span>
            <p className="text-sm text-gray-300 mt-2">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default About;