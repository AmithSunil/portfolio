import React from "react";
import Intro from "./sections/Intro";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import "./main.css";
import Footer from "./sections/Footer";

const Main = () => {
  return (
    <div className="main-main">
      <Navbar />
      <a name="home"/><Intro />
      <a name="about"/><About />
      <a name="experience"></a><Experience />
      <a name="contact"></a><Contact />
      <Footer />
    </div>
  );
};

export default Main;
