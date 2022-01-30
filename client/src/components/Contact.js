import React from "react";
import "./contact.css";
import ModalContact from "./ModalContact";
import Emoji from "./Emoji";
function Contact() {
  return (
    <>
      <h1 id="contact_section" className="section-header">
        Contact
      </h1>
      <div className="contact-container">
        <div className="contact-desc">
          Click the contact button below if you'd like to get into contact with
          me! I'm open to any and every request, even if its just to chat!
          <Emoji symbol="👨‍💻" label="man technologist" />
          <Emoji symbol="👨‍💻" label="man technologist" />
          <Emoji symbol="👨‍💻" label="man technologist" />
        </div>
      </div>
      <div className="button-container">
        <ModalContact />
      </div>
    </>
  );
}

export default Contact;
