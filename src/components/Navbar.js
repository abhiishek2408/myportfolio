import React, { useState } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { BsMoonStarsFill } from 'react-icons/bs';
import './Navbar.css';  // Make sure to import the CSS file

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode); // For dark mode functionality
  };

  return (
    // <nav className={`navbar navbar-expand-lg navbar-light bg-light sticky-top ${darkMode ? 'navbar-dark bg-dark' : ''}`}>
    <nav className={`navbar navbar-expand-lg sticky-top`}>

      <div className="container-fluid">
        <a className="navbar-brand" href="/">Abhishek</a>
        
        

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 ml-5">
            <li className="nav-item">
              <a className="nav-link small" href="/">Home</a>
            </li>
            <li className="nav-item"> 
              <a className="nav-link small" href="/about">About</a>
            </li>
            <li className="nav-item">  
              <a className="nav-link small" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link small" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link small" href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
