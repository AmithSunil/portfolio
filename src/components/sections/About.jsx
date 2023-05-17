import React from "react";
import "./about.css";
import me from "../images/me.jpg";

const About = () => {
  return (
    <div className="about-main-body">
      <div className="head">
        <h2>
          <span className="highlight">01.</span>About_Me
        </h2>
        <hr />
      </div>
      <div className="about-body">
        <div className="body-content">
          <div>
            I'm Amith, a student at the College of Engineering Chengannur with
            expertise in web development, video editing, designing, and
            programming. With my skills, I can create exceptional digital
            experiences, including high-quality websites, mobile applications,
            videos, and software applications. I'm deeply passionate about using
            technology to solve problems and am always eager to expand my
            knowledge to enhance my abilities. I'm dedicated to delivering
            outstanding results and excited to make a significant impact in the
            digital technology field
          </div>
          <img src={me} alt="img-here" />
        </div>
      </div>
    </div>
  );
};

export default About;
