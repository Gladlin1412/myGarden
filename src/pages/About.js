import React from "react";
import AboutImg from "../assets/aboutimg.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At myGarden, we are passionate about helping you grow and nurture your green space. Whether you're a beginner or a seasoned gardener, we provide expert tips, eco-friendly solutions, and creative ideas to transform your home into a lush haven. Our mission is to inspire a love for gardening, share knowledge, and build a vibrant community of plant enthusiasts.
        <span> </span>
        <em>Let’s grow together, one plant at a time!</em>
        </p>
      </div>
    </div>
  );
}

export default About;