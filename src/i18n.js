// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Hi! I'm Fernando Hasperué <br> <span class='enfasis'>Full Stack Web Developer</span>",
      "description": "I specialize in technologies such as JavaScript, React, Java, Spring Boot, JPA, Hibernate, MySQL, Git, GitHub, and more.<span class='frase'> My focus is on creating efficient, high-quality solutions by combining technical expertise with a strong commitment to continuous learning and teamwork.</span>",
      "exp-oca": "Development and maintenance of the company's web applications, ensuring their functionality, performance, and evolution. Version control management and collaboration with Scrum teams to implement improvements and new features to the projects.",
      "exp-nocountry": "Design and creation of a gaming platform, including data management, business logic development, and REST services. Responsible for implementing the user interface and the interaction between the frontend and backend to ensure a smooth and efficient experience.",
      "edu-egg": "In my training as a FullStack web developer, I acquired skills in both Frontend: proficient in HTML, CSS, and JavaScript, as well as React JS; and Backend: object-oriented programming with JAVA, management of relational databases with MySQL, and use of JPA and JDBC. I have also worked on projects with Spring Boot.",
      "exp-mobile": "I have developed a career as a freelancer, providing specialized services to resolve incidents and repair software and hardware for various mobile devices.",
      "edu-teclab": "Software development on web platforms using HTML, CSS, and JavaScript. Configuration and implementation of databases using PostgreSQL. Creation of apps with Material Design and Responsive Design. Version Control: Git and GitHub. Soft skills: Teamwork and Leadership, among others.",
      "exp-computer": "Diagnosis and troubleshooting of hardware and software issues, formatting storage units, installing operating systems, antivirus, drivers, etc. Assembling and maintaining equipment and cleaning components.",
      "pjct-movie": "Interactive web application to explore movie trailers, developed with HTML, CSS, Bootstrap, and JavaScript. Integrated with the TMDb API, it provides real-time access to titles, descriptions, ratings, and trailers.",
      "pjct-salary": "This React application is an efficient solution to help workers estimate their salaries. With its user-friendly interface, users can obtain an estimated salary amount. It is important to note that the application is updated with the latest labor regulations.",
      "pjct-gamestopia": "'GamesTopia' is a gaming platform whose main objective is to offer users a wide selection of digital games, both popular and retro, and to purchase them conveniently and securely.",
      "pjct-eluney": "'Eluney', a company dedicated to providing unforgettable experiences at events and parties. Developed with React and using native CSS code along with other libraries, I focused on delivering a perfect presentation of the various services offered by the company.",
      "pjct-library": "Library management system implemented with Java Spring Boot. As an administrator, I designed and developed key functionalities that allow adding, querying, editing, and deleting books, establishing a smooth connection with the database."
    }
  },
  es: {
    translation: {
      "welcome": "¡Hola! Soy Fernando Hasperué <br> <span class='enfasis'>Desarrollador Web Full Stack</span>",
      "description": " Me especializo en desarrollo de apps web, utilizando tecnologías como JavaScript, React, Java, Spring Boot, JPA, Hibernate, MySQL, Git, GitHub, entre otras. <span class='frase'>Mi enfoque está en crear soluciones de calidad, combinando conocimientos técnicos con un fuerte compromiso hacia el aprendizaje continuo y el trabajo en equipo.</span>",
      "exp-oca": "Desarrollo y mantenimiento de aplicaciones web de la empresa, asegurando su funcionalidad, rendimiento y evolución. Gestión del control de versiones y colaboración con equipos Scrum para implementar mejoras y nuevas funcionalidades a los proyectos.",
      "exp-nocountry": "Diseño y creación de plataforma de videojuegos, incluyendo la gestión de datos, desarrollo de lógica de negocio y servicios REST. Responsable de la implementación de la interfaz de usuario y la interacción entre el frontend y el backend para garantizar una experiencia fluida y eficiente.",
      "edu-egg": "En mi formación como desarrollador web FullStack, adquirí habilidades tanto en Frontend: domino HTML, CSS y JavaScript, además de React JS. como en Backend: programación orientada a objetos con JAVA, manejo de bases de datos relacionales con MySQL, y utilización de JPA y JDBC. También he trabajado en proyectos con Spring Boot.",
      "exp-mobile": "He desarrollado una trayectoria como independiente, brindando servicios especializados para resolver incidencias y reparar el software y el hardware de diversos dispositivos móviles.",
      "edu-teclab": "Desarrollo de software sobre plataformas web en HTML, CSS y Javascript. Configuración e implementación de bases de datos utilizando PostgreSQL. Creación de apps con Material Design y Responsive Design Control de Versiones: Git y GitHub Habilidades blandas: Trabajo en Equipo y Liderazgo, entre otras",
      "exp-computer": "Diagnóstico y solución de problemas de hardware y software, formateo unidades de almacenamiento, instalación de S.O, antivirus, drivers etc. Armado y mantenimiento de equipos y limpieza de componentes.",
      "pjct-movie": "Aplicación web interactiva para explorar trailers de películas, desarrollada con HTML, CSS, Bootstrap y JavaScript. Integrada con la API de TMDb, ofrece acceso en tiempo real a títulos, descripciones, calificaciones y trailers",
      "pjct-salary": "Esta aplicación React es una solución eficiente para ayudar a los trabajadores a estimar su sueldo. Gracias a su interfaz de fácil uso, los usuarios pueden obtener una estimación de su sueldo a cobrar. Es importante destacar que la aplicación está actualizada con las últimas regulaciones laborales.",
      "pjct-gamestopia": "GamesTopia es una plataforma de videojuegos cuyo objetivo principal es ofrecer a los usuarios una amplia selección de juegos digitales, tanto populares como retro y adquirirlos de manera conveniente y segura.</span>",
      "pjct-eluney": "'Eluney', una empresa dedicada a brindar experiencias inolvidables en eventos y fiestas. Desarrollada con React y empleando código nativo de CSS junto con otras bibliotecas, me enfoqué en ofrecer una presentación perfecta de los diversos servicios que ofrece la empresa.",
      "pjct-library": "Sistema de gestión para una biblioteca, implementado con Java Spring Boot. Como administrador, diseñé y desarrollé funcionalidades clave que permiten agregar, consultar, editar y eliminar libros, estableciendo una conexión fluida con la base de datos."
      
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
