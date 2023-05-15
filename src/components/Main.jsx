import React from 'react'
import Intro from './sections/Intro';
import Navbar from './sections/Navbar';
import About from './sections/About';

const Main = () => {
    return (  
        <div className='main-main'>
            <Navbar />
            <Intro />
            <About />
        </div>
    );
}
 
export default Main;