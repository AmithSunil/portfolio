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
    <div className="small-nav"> 
      <a  href="#home"> <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/64ffda/home.png" alt="home"/></a>  
      <img width="32" height="32" src="https://img.icons8.com/windows/32/64ffda/menu--v1.png" alt="menu--v1"/>
    </div>
  </div>;
};

export default Navbar;
