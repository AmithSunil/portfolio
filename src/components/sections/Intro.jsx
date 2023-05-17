import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-main-body">
      <div className="bodycontent">
        <p className="p1 ">Hi,my name is</p>
        <p className="p2">Amith Sunil</p>
        <p className="p3">I build things for the Web</p>
        <p className="p4">
          I'm a dedicated<span className="highlight-text"> Full-Stack Web developer</span> with a passion for creating engaging and
          user-friendly experiences on the web. With a strong foundation in
          coding and a knack for problem-solving, I bring creativity and
          dedication to every project. Take a look around to explore my work and
          see how I can bring your web development needs to life
        </p>

        <button className="btn">Download CV</button>
      </div>
    </div>
  );
};
export default Intro;
