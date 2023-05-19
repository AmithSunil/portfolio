import React from "react";
import './navbar.css';

const Navbar = () => {
  return <div className="main robo-font">
    <div className="nav-div">
        <div class="home a"><a href="#home">Home</a></div>
       <a href="#about">
        <div class="list-item "><span class="highlight">01.</span>About</div>
        </a> 
        <a href="#experience">
        <div class="list-item"><span class="highlight">02.</span>Experience</div>
          </a>
        <a href="#contact">
          <div class="list-item"><span class="highlight">03.</span>Contact</div>
          </a>

    </div>
  </div>;
};

export default Navbar;
