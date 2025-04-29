import React from "react";
import "./About.css";

import {
  SiJavascript, SiMongodb, SiMysql,
  SiPostman, SiFigma, SiGooglechrome
} from "react-icons/si";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
  FaCertificate, FaExternalLinkAlt
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
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiGooglechrome />, name: "Chrome DevTools" },
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

const About = () => {
  return (
    <div className="about-dark">
      <div className="about-inner-graph-layout">
        <div className="graph-container">
          <h3>Skill Proficiency</h3> {/* Title for radar chart */}
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart outerRadius={90} data={skillsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" stroke="#333" />
              <Radar name="Skill" dataKey="A" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="about-content">
          <h4>About</h4>
          <p>
          Hi, I'm Abhishek, a passionate full-stack developer with a strong focus on crafting beautiful and efficient web applications. I love solving real-world problems through clean code, scalable architectures, and interactive UI experiences. Over time, I've built solid expertise in React, Node.js, Express, and databases like MongoDB and MySQL.
          I thrive in collaborative environments, enjoy debugging as much as building, and constantly explore new technologies to elevate my development stack. Beyond coding, I'm a strong advocate of user-first design and lifelong learning.
          </p>
        </div>

        <div className="info-cards">
          <div className="skill-cards">
            <h4>Skills</h4>
            <p>Frontend, Backend, APIs</p>
          </div>
          <div className="skill-cards">
            <h4>Hobbies</h4>
            <p>Gaming, Music, Reading</p>
          </div>
          <div className="skill-cards">
            <h4>Goal</h4>
            <p>To become a top software architect</p>
          </div>
        </div>
      </div>

      <div className="skill"><h5>Skills & Technologies</h5></div>

      <div className="skills-icon-row">
        <div className="skill-group">
          <h3 className="skill-title">Programming Languages</h3>
          <div className="icon-grid">
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="icon-card" title={skill.name}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-title">Frontend Skills</h3>
          <div className="icon-grid">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="icon-card" title={skill.name}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-title">Backend Skills</h3>
          <div className="icon-grid">
            {backendSkills.map((skill, index) => (
              <div key={index} className="icon-card" title={skill.name}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-title">Database Skills</h3>
          <div className="icon-grid">
            {databaseSkills.map((skill, index) => (
              <div key={index} className="icon-card" title={skill.name}>
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

        <h4 className="tools-title">Tools & Technologies</h4>
      <section className="tools-tech-section">
        <div className="tools-grid">
          <div className="tool-card">
            <SiPostman style={{ color: '#FF6C37' }} />
            <span>Postman</span>
          </div>
          <div className="tool-card">
            <SiFigma style={{ color: '#F24E1E' }} />
            <span>Figma</span>
          </div>
          <div className="tool-card">
            <SiGooglechrome style={{ color: '#4285F4' }} />
            <span>Chrome DevTools</span>
          </div>
        </div>
      </section>


  <h4 className="cert-title">🎓 Certifications & Courses</h4>
      <section className="certifications-section">
  <div className="cert-grid">
    {[
      {
        title: "Full-Stack Web Development",
        provider: "Coursera",
        link: "https://www.coursera.org",
      },
      {
        title: "Advanced React",
        provider: "Udemy",
        link: "https://www.udemy.com",
      },
      {
        title: "MongoDB Basics",
        provider: "MongoDB University",
        link: "https://university.mongodb.com",
      },

    ].map((cert, index) => (
      <div key={index} className="cert-card">
        <div className="cert-icon">
          <FaCertificate />
        </div>
        <div className="cert-content">
          <h5>{cert.title}</h5>
          <p>{cert.provider}</p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer">
            View Certificate <FaExternalLinkAlt style={{ marginLeft: "4px" }} />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="experience-section">
      <h2 className="exp-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span>{exp.duration}</span>
            </div>
            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
            <a href={exp.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </section>





    <section className="edu-qualification-section">
  <h2 className="edu-qualification-title">Education Qualifications</h2>

  <div className="edu-timeline">

    {/* Left Side */}
    <div className="edu-timeline-item edu-left">
      <div className="edu-timeline-content">
        <h3>Bachelor of Technology (B.Tech)</h3>
        <h4>Lovely Professional University</h4>
        <span>2022 - 2026</span>
        <p>Major in Computer Science and Engineering</p>
      </div>
    </div>

    {/* Right Side */}
    <div className="edu-timeline-item edu-right">
      <div className="edu-timeline-content">
        <h3>Senior Secondary (12th Grade)</h3>
        <h4>Glenhill School</h4>
        <span>2019 - 2021</span>
        <p>Specialized in Physics, Chemistry, and Mathematics (PCM).</p>
      </div>
    </div>

    {/* Left Side */}
    <div className="edu-timeline-item edu-left">
      <div className="edu-timeline-content">
        <h3>Secondary (10th Grade)</h3>
        <h4>Glenhill School</h4>
        <span>2017 - 2019</span>
        <p>Completed with distinction in all major subjects.</p>
      </div>
    </div>

  </div>
</section>



    

    </div>
  );
};

export default About;
