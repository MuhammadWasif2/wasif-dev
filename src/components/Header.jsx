// src/components/Header.jsx
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import "./Header.css";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header data-aos="fade-down" data-aos-duration="2000">
        <div className="left">
          <img src="/assets/images/miladicode.png" alt="logo" />
          <h2>
            <span style={{ color: "#72a1dea2" }}>WASIF</span>DEV
          </h2>
        </div>

        {/* Main Nav */}
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="box-icons">
          <a 
            href="https://www.fiverr.com/s/XLbYdj5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <SiFiverr size={22} color="#1DBF73" />
          </a>
          <a 
            href="https://github.com/MuhammadWasif2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/muhammad-wasif-160b6b262/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </div>
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="sidebar">
          <div className="close-icon" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </div>
          <ul>
            <li><a href="#home" onClick={() => setSidebarOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setSidebarOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setSidebarOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setSidebarOpen(false)}>Projects</a></li>
          </ul>
          <div className="social-sidebar">
            <a 
              href="https://www.fiverr.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <SiFiverr size={22} color="#1DBF73" />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
