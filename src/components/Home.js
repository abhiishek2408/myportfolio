// import React, { useState, useEffect } from 'react';
// import './Home.css';

// // React Icons Imports
// import { FaReact, FaNodeJs, FaGitAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { SiJavascript, SiMongodb, SiCss3 } from 'react-icons/si';

// // Profile Data
// const profile = {
//   name: "Abhishek",
//   titleOptions: ["Full Stack Developer", "Front End Developer", "Back End Developer"],
//   bio: "Passionate about building web apps with React, Node, and MongoDB.",
//   skills: [
//     { name: "React", icon: <FaReact style={{ color: '#61DBFB' }} /> },
//     { name: "JavaScript", icon: <SiJavascript style={{ color: '#F0DB4F' }} /> },
//     { name: "Node.js", icon: <FaNodeJs style={{ color: '#68A063' }} /> },
//     { name: "MongoDB", icon: <SiMongodb style={{ color: '#4DB33D' }} /> },
//     { name: "CSS", icon: <SiCss3 style={{ color: '#2965f1' }} /> },
//     { name: "Git", icon: <FaGitAlt style={{ color: '#F1502F' }} /> }
//   ],
//   contact: [
//     { name: "Phone", icon: <FaPhone style={{ color: '#3f51b5' }} />, link: "tel:+919876543210" },
//     { name: "Email", icon: <FaEnvelope style={{ color: '#ff4081' }} />, link: "mailto:abhishek@example.com" },
//     { name: "LinkedIn", icon: <FaLinkedin style={{ color: '#0077b5' }} />, link: "https://linkedin.com/in/abhishek" },
//     { name: "GitHub", icon: <FaGithub style={{ color: '#333' }} />, link: "https://github.com/abhi" }
//   ]
// };

// const Home = () => {
//   const [typedText, setTypedText] = useState('');
//   const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
//   const [currentCharIndex, setCurrentCharIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentTitle = profile.titleOptions[currentTitleIndex];
//       if (currentCharIndex < currentTitle.length) {
//         setTypedText(prev => prev + currentTitle[currentCharIndex]);
//         setCurrentCharIndex(prev => prev + 1);
//       } else {
//         setTimeout(() => {
//           setTypedText('');
//           setCurrentCharIndex(0);
//           setCurrentTitleIndex((prev) => (prev + 1) % profile.titleOptions.length);
//         }, 1500); // After full text display, wait 1.5s before changing
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [currentCharIndex, currentTitleIndex]);

//   return (
//     <div className="home">
//       {/* Stars background */}
//       <div className="stars"></div>
//   <div className="stars2"></div>
//   <div className="stars3"></div>

//       <div className="home-left animated-fade-in">
//         <img src="/profile-pic.jpg" alt="Profile" className="profile-pic" />
//       </div>

//       <div className="home-right animated-fade-in">
//         <h1 className="name">Hi, I'm {profile.name}</h1>
//         <h3 className="typewriter">{typedText}<span className="cursor">|</span></h3>
//         <p className="bio">{profile.bio}</p>

//         <div className="contact-info">
//           <div className="contact-icons">
//             {profile.contact.map((item, i) => (
//               <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>
//                 <span className="icon">{item.icon}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

import { FaReact, FaNodeJs, FaGitAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiCss3 } from 'react-icons/si';
import image from "../image/portfolioImg.png";
 import './Home.css';
      // <img src={image} alt="bootsrap" height="600" width="600"></img>

const Home = () => {
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const starsRef = useRef([]);
    const containerRef = useRef(null); // Ref for the container div

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x1f141d);


        // **Important:** Append the renderer's DOM element to the container
        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
            rendererRef.current = renderer;
        }


        // Create stars
        const starGeometry = new THREE.SphereGeometry(0.6, 24, 24);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const stars = [];
        for (let i = 0; i < 2000; i++) {
            const star = new THREE.Mesh(starGeometry, starMaterial);
            star.position.set(
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000
            );
            stars.push(star);
            scene.add(star);
        }
        starsRef.current = stars;

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);

        // Set up the camera position
        camera.position.z = 500;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            stars.forEach((star) => {
                star.rotation.x += 0.001;
                star.rotation.y += 0.001;
                star.rotation.z += 0.001;
            });

            renderer.render(scene, camera);
        };
        animate();

        // Adjust camera on window resize
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
                rendererRef.current.domElement.remove();
            }
            if (sceneRef.current) {
                while (sceneRef.current.children.length > 0) {
                    const obj = sceneRef.current.children[0];
                    if (obj.geometry) obj.geometry.dispose();
                    if (obj.material) {
                        if (obj.material.map) obj.material.map.dispose();
                        obj.material.dispose();
                    }
                    sceneRef.current.remove(obj);
                }
            }
        };
    }, []);

    // Animation variants
    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.3 } },
    };

    const profile = {
        name: "Abhishek",
        titleOptions: ["Full Stack Developer", "Front End Developer", "Back End Developer"],
        bio: "Passionate about building web apps with React, Node, and MongoDB.",
        skills: [
          { name: "React", icon: <FaReact style={{ color: '#61DBFB' }} /> },
          { name: "JavaScript", icon: <SiJavascript style={{ color: '#F0DB4F' }} /> },
          { name: "Node.js", icon: <FaNodeJs style={{ color: '#68A063' }} /> },
          { name: "MongoDB", icon: <SiMongodb style={{ color: '#4DB33D' }} /> },
          { name: "CSS", icon: <SiCss3 style={{ color: '#2965f1' }} /> },
          { name: "Git", icon: <FaGitAlt style={{ color: '#F1502F' }} /> }
        ],
        contact: [
          { name: "Phone", icon: <FaPhone style={{ color: '#3f51b5' }} />, link: "tel:+919876543210" },
          { name: "Email", icon: <FaEnvelope style={{ color: '#ff4081' }} />, link: "mailto:abhishek@example.com" },
          { name: "LinkedIn", icon: <FaLinkedin style={{ color: '#0077b5' }} />, link: "https://linkedin.com/in/abhishek" },
          { name: "GitHub", icon: <FaGithub style={{ color: '#333' }} />, link: "https://github.com/abhi" }
        ]
      };
      
  
        const [typedText, setTypedText] = useState('');
        const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
        const [currentCharIndex, setCurrentCharIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            const currentTitle = profile.titleOptions[currentTitleIndex];
            if (currentCharIndex < currentTitle.length) {
              setTypedText(prev => prev + currentTitle[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            } else {
              setTimeout(() => {
                setTypedText('');
                setCurrentCharIndex(0);
                setCurrentTitleIndex((prev) => (prev + 1) % profile.titleOptions.length);
              }, 150); // After full text display, wait 1.5s before changing
            }
          }, 100);
      
          return () => clearInterval(interval);
        }, [currentCharIndex, currentTitleIndex]);




    return (
        <div className="home">
            {/* Starfield is now directly the background */}
            <div
                className="starfield-container"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    pointerEvents: 'none',
                    // background: ' linear-gradient(90deg, #2c1f2d, #1f141d)',
                }}
                ref={containerRef} // Attach the ref here
            >
            </div>

   

   <div className="container-fluid home">
  <div className="row justify-content-center align-items-center w-100">

    {/* Profile Picture Section */}
    <div className="col-12 col-md-4 text-center home-left animated-fade-in">
      <img src={image} alt="Profile" className="profile-pic"></img>
    </div>

    {/* Content Section */}
    <div className="col-12 col-md-6 home-right animated-fade-in">
      <h1 className="name">Hi, I'm {profile.name}</h1>
      <h3 className="typewriter">{typedText}<span className="cursor">|</span></h3>
      <p className="bio">{profile.bio}</p>

      {/* Contact Section */}
      <div className="contact-info">
        <div className="contact-icons">
          {profile.contact.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>
              <span className="icon">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Attractive Buttons */}
      <div className="buttons mt-4">
        {/* Download CV Button */}
        <a href="https://drive.google.com/uc?export=download&id=1Mz2hkCFiFqYezTqDJV-T842xU_CKU5vi" class="btn btn-download" download="cv.pdf">
  Download CV
</a>

        {/* Hire Me Button */}
        <a href="mailto:your-email@example.com" className="btn btn-hire ms-3">
          Hire Me
        </a>
      </div>

    </div>

  </div>
</div>




         
            <style jsx global>{`
               
           


                .starfield-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    pointer-events: none;
                }
            `}</style>

        </div>
    );
};

export default Home;
