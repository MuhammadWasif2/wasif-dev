// src/components/Hero.jsx
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="blackhole-box" data-aos="fade-down" data-aos-duration="2000">
        <video autoPlay loop muted playsInline src="/assets/videos/blackhole.mp4"></video>
      </div>

      <div className="hero-info autoBlur" data-aos="fade-right" data-aos-duration="1000">
        <div className="hero-info-title">
          <i className="bx bxl-sketch"></i> Full-Stack Developer Portfolio
        </div>
        <h1 data-aos="fade-right" data-aos-duration="3000">
          Providing <span className="gradient">the best</span> Project{" "}
          <span className="gradient">Experience</span>
        </h1>
        <p>
        💻 I’m a Front-End Developer with experience in Website, Mobile, and Software Development.
        ⚡ I also work as a Full-Stack Developer and have hands-on expertise in Shopify development & customization.
         Check out my projects and skills.
        </p>
        <button>
          <FaPaperPlane /> Contact Me
        </button>
      </div>

      <div className="skills-video-box">
        <video
          className="skills-video"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/videos/hero-video.mp4"
        ></video>
      </div>

      <div className="scroll-down"></div>
    </section>
  );
}

export default Hero;
