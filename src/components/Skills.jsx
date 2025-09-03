// src/components/Skills.jsx
import React from "react";
import "./Skills.css"; // your custom CSS
import { FaLaptopCode, FaCode } from "react-icons/fa";

function Skills() {
  const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // ✅ moved here

  return (
    <section id="skills" className="skills-section">
      {/* Section Title */}
      <h1 className="section-title autoDisplay">💪 My Skills</h1>

      <div className="skills-box autoDisplay">
        {/* Left Image */}
        <img
          className="skills-image"
          src="/assets/images/digital-brain.png"
          alt="skills"
        />

        {/* Designer Section */}
        <div className="designer">
          <h1 className="gradient">
            Designer <span>🎨</span> <FaLaptopCode />
          </h1>
          <p>
          I have expertise in <b>HTML, CSS, JavaScript, and Tailwind CSS</b>, along with experience in building <b>3D and animated websites</b> 
          that bring ideas to life. I also work with design tools like <b>Figma, and Canva</b>,
           enabling me to blend aesthetics with functionality and craft seamless, engaging user experiences.
          </p>
        </div>

        {/* Coder Section */}
        <div className="coder">
          <h1 className="gradient">
            Coder <FaCode />
          </h1>
          <p>
          I’m skilled in <b>React</b>, <b>React Native</b>, <b>Next.js</b>, <b>Node.js</b>, <b>Shopify</b>, and databases like <b>MongoDB</b> and <b>MySQL</b>.  
I also work with <b>JavaScript</b>, <b>CSS</b>, <b>Tailwind CSS</b>, <b>C</b>, and <b>Python</b> to craft modern, responsive, and efficient solutions.  
Always eager to learn, I strive to deliver scalable applications that make a real impact.

          </p>
        </div>

        {/* Skills Logos Slider */}
        <div
          className="slider"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": skills.length,
          }}
        >
          <div className="list">
            {skills.map((i) => (
              <div className="item" style={{ "--position": i }} key={i}>
                <img src={`/assets/images/${i}.png`} alt={`skill${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
