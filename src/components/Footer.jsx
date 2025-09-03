// src/components/Footer.jsx
import React from "react";
import "./Footer.css"
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <h1>©️ 2025, Made BY WasifCode</h1>

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
    </footer>
  );
}

export default Footer;
