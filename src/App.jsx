
import './App.css'
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Experiencia from './components/Experiencia';
import Background from './components/Background';
import Certifications from './components/Certifications';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';
import LineScroll from './components/LineScroll';
import React, { useState, useEffect } from 'react';

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; 
      const targetPosition = 100; 

      if (scrollPosition >= targetPosition) {
        setShowNav(true); 
      } else {
        setShowNav(false); 
      }
    };

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <div className='app'>
      <LineScroll></LineScroll>
      <NavBar showNav={showNav}></NavBar>
      
      <Background></Background>
      <div className="main-container">
      <Hero></Hero>
      <Experiencia></Experiencia>
      <Certifications></Certifications>
      <Proyectos></Proyectos>
      <Footer></Footer>
      
      </div>
    </div>
  )
}

export default App
