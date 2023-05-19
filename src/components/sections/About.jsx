import React from "react";
import "./about.css";
import me from "../images/me.jpg";

const About = () => {
  return (
    <div className="about-main-body">
      <div className="head-about">
        <h2>
          <span className="highlight">01.</span>About_Me
        </h2>
        <hr />
      </div>
      <div className="about-body">
        <div className="body-content">
          <div className="intro-text">
            <p>              
              I'm Amith, a student at The College of Engineering Chengannur with
              expertise in web development, video editing, designing, and
              programming. With my skills, I can create exceptional digital
              experiences, including high-quality websites, mobile applications,
              videos, and software applications. I'm deeply passionate about
              using technology to solve problems and am always eager to expand
              my knowledge to enhance my abilities. I'm dedicated to delivering
              outstanding results and excited to make a significant impact in
              the digital technology field
            </p>
            <div className="skills">
              <h5>Here are some skills that I'm familiar with :</h5>
              <ul>
                <li><img src="https://img.icons8.com/ios-filled/50/64ffda/source-code.png"/>ReactJs</li>
                <li><img src="https://img.icons8.com/ios-filled/50/64ffda/source-code.png"/>JavaScript</li>
                <li><img src="https://img.icons8.com/ios-filled/50/64ffda/source-code.png"/>HTML</li>
                <li><img src="https://img.icons8.com/ios-filled/50/64ffda/source-code.png"/>CSS</li>
                <li><img src="https://img.icons8.com/ios-filled/50/64ffda/source-code.png"/>Game Development</li>
                <li><img src="https://img.icons8.com/ios-filled/50/64ffda/source-code.png"/>Blender</li>
                <li><img src="https://img.icons8.com/ios-filled/50/64ffda/source-code.png"/>Adobe Premiere Pro</li>
                <li><img src="https://img.icons8.com/ios-filled/50/64ffda/source-code.png"/>Figma </li>
              </ul>
            </div>
          </div>
          <img className="me" src={me} alt="img-here" />
        </div>
      </div>
    </div>
  );
};

export default About;
