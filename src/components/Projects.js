// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { TbWorldWww } from "react-icons/tb";
// import News from "../image/NewsWeb.png";
// import Restro from "../image/RestroWeb.jpg";
// import "./Projects.css";

// const projects = [
//   {
//     title: "Restaurant Management System",
//     description:
//       "The Restaurant Management System is a web application designed to manage restaurant operations like orders, menus, billing, and reservations. It allows restaurant staff to manage customer orders, track inventory, update menu items, and handle reservations. The system provides an easy interface for both admins and staff, improving efficiency and customer service.",
//     techStack: ["React js", "PHP", "MySQL", "Bootstrap"],
//     image: "/images/restaurant-management-preview.png", // place your image in /public/images/
//     github: "https://github.com/yourusername/restaurant-management-system",
//     live: "https://restaurant-management-system.vercel.app",
//   },
//   {
//     title: "Digital News Platform",
//     description:
//       "The Digital News Platform is a web application that allows users to read, comment on, and share news articles. The platform supports features such as user registration, article categorization, search functionality, and comment threads. Admins can manage news articles, approve or reject comments, and handle the overall content. The platform provides a seamless reading experience and a dynamic content feed.",
//     techStack: ["HTML", "CSS", "Node.js", "MongoDB"],
//     image: "/images/news-platform-preview.png", // place your image in /public/images/
//     github: "https://github.com/yourusername/digital-news-platform",
//     live: "https://digital-news-platform.vercel.app",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="projects-page">
//       <h2 className="projects-title">My Projects</h2>
//       {projects.map((project, index) => (
//         <div className="project-card-large" key={index}>
//           <div className="project-image">
//             <img src={Restro} alt={project.title} />
//           </div>
//           <div className="project-details">
//             <h3>{project.title}</h3>
//             <div className="tech-badges">
//               {project.techStack.map((tech, i) => (
//                 <span className="badge" key={i}>
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <p>{project.description}</p>
//             <div className="project-links">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="project-icon-link"
//               >
//                 <FaGithub className="icon" />
//                 <span>Source Code</span>
//               </a>
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="project-icon-link"
//               >
//                 <TbWorldWww className="icon" />
//                 <span>Live Project</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;



import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import News from "../image/NewsWeb.png";
import Restro from "../image/RestroWeb.jpg";
import "./Projects.css";

const projects = [
  {
    title: "Restaurant Management System",
    description:
      "The Restaurant Management System is a web application designed to manage restaurant operations like orders, menus, billing, and reservations. It allows restaurant staff to manage customer orders, track inventory, update menu items, and handle reservations. The system provides an easy interface for both admins and staff, improving efficiency and customer service.",
    techStack: ["React js", "PHP", "MySQL", "Bootstrap"],
    image: Restro, // Correctly use imported image
    github: "https://github.com/yourusername/restaurant-management-system",
    live: "https://restaurant-management-system.vercel.app",
  },
  {
    title: "Digital News Platform",
    description:
      "The Digital News Platform is a web application that allows users to read, comment on, and share news articles. The platform supports features such as user registration, article categorization, search functionality, and comment threads. Admins can manage news articles, approve or reject comments, and handle the overall content. The platform provides a seamless reading experience and a dynamic content feed.",
    techStack: ["HTML", "CSS", "Node.js", "MongoDB"],
    image: News, // Correctly use imported image
    github: "https://github.com/yourusername/digital-news-platform",
    live: "https://digital-news-platform.vercel.app",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-title">My Projects</h2>
      {projects.map((project, index) => (
        <div className="project-card-large" key={index}>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <div className="tech-badges">
              {project.techStack.map((tech, i) => (
                <span className="badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
              >
                <FaGithub className="icon" />
                <span>Source Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
              >
                <TbWorldWww className="icon" />
                <span>Live Project</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
