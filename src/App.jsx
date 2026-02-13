import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Booking from './components/Booking';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    const watermarkStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        opacity: 0.15,
        pointerEvents: 'none',
        fontFamily: 'monospace'
    };

    return (
        <main>
            <div style={watermarkStyle}>Made by Juan</div>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Booking />
            <Contact />
        </main>
    );
};

export default App;