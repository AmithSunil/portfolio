import React from "react";
import "./contact.css";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <div className="contact-main-body">
      <IconContext.Provider
        value={{ color: "gray", className: "global-class-name" }}
      >
        <div className="head">
          <h2>
            <span className="highlight">03.</span>Contact
          </h2>
          <hr />
        </div>
        <div className="contact-body">
          <h1>Get In Touch With Me</h1>
          <p>
            I'm currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll get
            back to you!
          </p>
          <div className="contacts">
            <a href="https://github.com/AmithSunil">
              <div className="contact-text-c">
                <span>Github</span>
                <BsGithub />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/amith-sunil-a59167229/">
              <div className="contact-text-c">
                <span>Linkedin</span>
                <BsLinkedin />
              </div>
            </a>

            <a href="mailto:amithsunil.1303@gmail.com">
              <div className="contact-text-c">
                <span>Mail</span>
                <SiGmail />
              </div>
            </a>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Contact;
