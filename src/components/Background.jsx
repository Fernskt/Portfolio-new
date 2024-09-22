import React, { useState, useEffect } from 'react'

export default function Background() {

    const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
   
  }, []);

  const backgroundStyle = {
    
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 255, 0.10), transparent 30%)`,
  };

  return <div className="background" style={backgroundStyle}></div>;
}
