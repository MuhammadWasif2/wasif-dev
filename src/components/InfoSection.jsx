// src/components/InfoSection.jsx
import React from "react";
import "./infoSection.css"
import { FaPaperPlane } from "react-icons/fa";

function InfoSection() {
  return (
    <section id="about" className="info-section">
      <h1 className="section-title autoDisplay">Hello, There 👋</h1>
      <div className="info-cards fadein-left">
        <div className="card autoDisplay">
          <h1>Hi there, I'm M.Wasif</h1>
          <p>
            With 1 year of experience, I have honed my skills in both frontend
            and backend dev, creating dynamic and responsive websites.
          </p>
          <img src="/assets/images/grid1.png" alt="" />
        </div>

        <div className="card autoDisplayBlur ">
          <h1>Tech Stack</h1>
          <p>
          Equipped with a versatile toolkit of languages, frameworks, and technologies, I craft applications that are not only scalable but also built to last.
          </p>
          <img src="/assets/images/grid2.png" alt="" />
        </div>

        <div className="card autoDisplay">
          <h1>I’m very flexible with time zone communications & locations</h1>
          <p>
            I'm based in Pakistan, Lahore and open to remote work worldwide.
          </p>
          <video src="/assets/videos/glob.mp4" autoPlay loop muted playsInline></video>
          <button>
            <FaPaperPlane /> Contact Me
          </button>
        </div>

        <div className="card autoDisplay">
          <h1>My Passion for Coding</h1>
          <p>
          I love solving problems and turning ideas into reality through code. Programming isn’t just my profession—it’s my passion, fueling both creativity and curiosity. 
          Every project is a chance to think critically, explore new technologies, and craft simple, scalable, and impactful solutions. 
          For me, the true joy lies not only in building software but also in continuously learning, growing, and pushing myself to become a better creator.
          </p>
          <img src="/assets/images/grid4.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
