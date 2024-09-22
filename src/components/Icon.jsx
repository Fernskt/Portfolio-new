import React from 'react';
import { SpringBootIcon, JavaIcon, Html, Css, Javascript, Bootstrap, SpringSecurity, Hibernate, Sql, Reactjs } from '../icons.jsx';

// Mapea los nombres de iconos a los componentes correspondientes
const iconComponents = {
  'spring-boot': SpringBootIcon,
  'java': JavaIcon,
  'html': Html,
  'css': Css,
  'javascript': Javascript,
  'bootstrap': Bootstrap,
  'spring-security': SpringSecurity,
  'hibernate': Hibernate,
  'sql': Sql,
  'reactjs': Reactjs
  
  // Añade más iconos aquí
};

const Icon = ({ name, width = 24, height = 24, ...props }) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return (
    <IconComponent width={width} height={height} {...props} />
  );
};

export default Icon;
