import React from "react";
import "./about.css";
import Emoji from "./Emoji";
function About() {
  const text = `Hey There!\nI'm a Full Stack Web Developer with a focus in everything Javascript.\nI'm from Montreal, Quebec, Canada. Aside from my coding background, I also enjoy sports, movies and videogames as a pass time.\nI'm really easy-going and enjoy talking about science, history and politics.\nIf you're here to check out my projects, ask for consulting, or just want to talk, I'm here`;
  return (
    <>
      <h1 id="about_section" className="section-header">
        ABOUT
      </h1>
      <div className="about-container">
        <p className="about-text">
          {text}
          <Emoji symbol="😁" label="grin" />
          <Emoji symbol="😁" label="grin" />
          <Emoji symbol="😁" label="grin" />
        </p>
        <div className="image-container">
          <img className="image-style" src="/Headshot.JPG" alt="headshot"></img>
        </div>
      </div>
    </>
  );
}

export default About;
