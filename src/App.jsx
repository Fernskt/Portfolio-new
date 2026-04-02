import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LineScroll from './components/LineScroll';
import Background from './components/Background';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experiencia from './components/Experiencia';
import Certifications from './components/Certifications';
import Proyectos from './components/Proyectos';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app'>
      <NavBar showNav={showNav} />
      <LineScroll />
      <Background />
      <div className="main-container">
        <Hero />
        <Experiencia />
        <Skills />
        <Certifications />
        <Proyectos />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
