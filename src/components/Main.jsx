import React from 'react'
import Intro from './sections/Intro';
import Navbar from './sections/Navbar';
import About from './sections/About';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './main.css'
 

const Main = () => {
    return (  
        <div className='main-main'>
            <Navbar />
            <Intro />
            <About />
            <Experience />
            <Contact />
        </div>
    );
}
 
export default Main;