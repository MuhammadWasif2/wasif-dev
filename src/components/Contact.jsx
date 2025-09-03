import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./Earth";
import "./Contact.css"; 
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current,
        "your_public_key"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <div id="contacts" className="full">
      <div className="contact-container autoDisplay">
        {/* Contact Form */}
        <div
          className="contact-form-container"
          data-aos="fade-right"
        >
          <p className="section-sub-text">Get in Touch</p>
          <h3 className="section-head-text">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label className="form-label">
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="form-input"
              />
            </label>

            <label className="form-label">
              <span>Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="form-input"
              />
            </label>

            <label className="form-label">
              <span>Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="form-textarea"
              />
            </label>

            <button type="submit" className="form-button">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        {/* Earth 3D Canvas */}
        <div
          className="contact-canvas-container"
        >
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default Contact;
