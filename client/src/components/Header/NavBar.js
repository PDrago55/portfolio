import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <div className="nav-container">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
              <a href="#about_section">
                <li>About</li>
              </a>
              <a href="#education_section">
                <li>Education</li>
              </a>
              <a href="#languages_section">
                <li>What I Do</li>
              </a>
              <a href="#projects_section">
                <li>Projects</li>
              </a>
              <a href="#contact_section">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </nav>
        <li className="nav-list">
          <a className="ref-list" href="#about_section">
            About
          </a>
        </li>
        <li className="nav-list">
          <a className="ref-list" href="#education_section">
            Education
          </a>
        </li>
        <li className="nav-list">
          <a className="ref-list" href="#languages_section">
            What I do
          </a>
        </li>
        <li className="nav-list">
          <a className="ref-list" href="#projects_section">
            Projects
          </a>
        </li>
        <li className="nav-list">
          <a className="ref-list" href="#contact_section">
            Contact
          </a>
        </li>
      </div>
    </>
  );
}

export default NavBar;
