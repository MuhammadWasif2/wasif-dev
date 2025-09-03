import React, { useRef, useEffect } from "react";
import "./Project.css";

function Projects() {
  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  const video4 = useRef(null); // new ref for project 4
  const hoverSign = useRef(null);

  // ⏩ Make Project 2 video play at 2x speed
  useEffect(() => {
    if (video2.current) {
      video2.current.playbackRate = 2.0;
    }
  }, []);

  const handleMouseOver = (videoRef) => {
    videoRef.current.play();
    hoverSign.current.classList.add("active");
  };

  const handleMouseOut = (videoRef) => {
    videoRef.current.pause();
    hoverSign.current.classList.remove("active");
  };

  return (
    <section id="projects" className="my-projects">
      <div className="hover-sign" ref={hoverSign}></div>
      <h1 className="autoDisplay">My Projects 👨‍💻</h1>

      {/* Project 1 */}
      <div className="project-card autoDisplay" data-aos="fade-up">
        <div className="project-vidbox">
          <video
            src="/assets/videos/project1.mp4"
            ref={video1}
            onMouseOver={() => handleMouseOver(video1)}
            onMouseOut={() => handleMouseOut(video1)}
            muted
            loop
          ></video>
        </div>
        <div className="project-info">
          <h1>
            MovieReviwerApp<span className="gradient"> 🎬Only Movie </span>
          </h1>
          <p>
            This app is designed as a complete movie discovery platform. It
            covers the latest movies and provides in-depth details such as
            budget, cast, and trailers. Users can stay updated with what’s
            trending, explore the most reviewed films, and even watch trailers
            directly within the app. A powerful search option makes it easy to
            find any movie, while the save feature allows users to bookmark
            their favorites. To maintain privacy, the app includes a secure
            account system where users can sign up and log in to manage their
            personal watchlist.
          </p>
          <button>
            <i className="bx bx-link-external"></i> Website
          </button>
        </div>
      </div>

      {/* Project 2 (2x speed) */}
      <div
        className="project-card autoDisplay"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="project-vidbox">
          <video
            src="/assets/videos/project2.mp4"
            ref={video2}
            onMouseOver={() => handleMouseOver(video2)}
            onMouseOut={() => handleMouseOut(video2)}
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="project-info">
          <h1>
            TravelingWebsite
            <span className="gradient">:🌍 Safa-Marwah Travel</span>
          </h1>
          <p>
            Safa-Marwah Travel is a professional travel agency website designed
            to showcase and manage the services of a trusted agency in Pakistan.
            The platform highlights their expertise in providing visa services
            from Pakistan to Saudi Arabia, with the agency’s dedicated team
            handling the entire process for customers. The website presents
            their offerings clearly, making it easier for clients to understand
            the services, connect with the team, and begin their travel journey
            with confidence.
          </p>
          <button>
            <i className="bx bx-link-external"></i> Website
          </button>
        </div>
      </div>

      {/* Project 3 */}
      <div
        className="project-card autoDisplay"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="project-vidbox">
          <video
            src="/assets/videos/project3.mp4"
            ref={video3}
            onMouseOver={() => handleMouseOver(video3)}
            onMouseOut={() => handleMouseOut(video3)}
            muted
            loop
          ></video>
        </div>
        <div className="project-info">
          <h1>
            Netflix Like <span className="gradient"> 🎥 Wasflflix</span> Website
          </h1>
          <p>
            Wasflflix is a front-end clone of Netflix created entirely with HTML
            and CSS to demonstrate clean, structured code and strong design
            skills. The project replicates Netflix’s look and feel with sections
            for movies, TV shows, and featured banners. It includes video
            previews, image displays, and a layout that closely mirrors the
            original platform, providing a professional showcase of responsive
            design and pixel-perfect styling without the use of JavaScript or
            frameworks.
          </p>
          <button>
            <i className="bx bx-link-external"></i> Website
          </button>
        </div>
      </div>

      {/* Project 4 (fixed ref) */}
      <div
        className="project-card autoDisplay"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="project-vidbox">
          <video
            src="/assets/videos/project4.mp4"
            ref={video4}
            onMouseOver={() => handleMouseOver(video4)}
            onMouseOut={() => handleMouseOut(video4)}
            muted
            loop
          ></video>
        </div>
        <div className="project-info">
          <h1>
            ShopifyWebsite
            <span className="gradient">:💄 Glowzam–Beauty&Skincare</span>
          </h1>
          <p>
            Glowzam is a Shopify-based eCommerce website built for selling
            beauty and skincare products, including haircare items, masks, and
            more. The store is designed with a modern, user-friendly layout that
            enhances the shopping experience while showcasing products in an
            elegant way. With proper research and design considerations, Glowzam
            ensures smooth navigation, secure checkout, and a professional look
            that reflects the brand’s identity in the beauty industry.
          </p>
          <button>
            <i className="bx bx-link-external"></i> Website
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
