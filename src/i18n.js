// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome:
        "Hi! I'm Fernando Hasperué <br> <span class='enfasis'>Full Stack Web Developer</span>",
      description:
        "Results-driven web developer who designs and manages digital platforms to drive overall product success.</span>",
      "exp-oca":
        "Development and maintenance of the company's web applications, ensuring their functionality, performance, and evolution. Version control management and collaboration with Scrum teams to implement improvements and new features to the projects.",
      "exp-nocountry":
        "Design and creation of a gaming platform, including data management, business logic development, and REST services. Responsible for implementing the user interface and the interaction between the frontend and backend to ensure a smooth and efficient experience.",
      "edu-egg":
        "In my training as a FullStack web developer, I acquired skills in both Frontend: proficient in HTML, CSS, and JavaScript, as well as React JS; and Backend: object-oriented programming with JAVA, management of relational databases with MySQL, and use of JPA and JDBC. I have also worked on projects with Spring Boot.",
      "exp-mobile":
        "I have developed a career as a freelancer, providing specialized services to resolve incidents and repair software and hardware for various mobile devices.",
      "edu-teclab":
        "Software development on web platforms using HTML, CSS, and JavaScript. Configuration and implementation of databases using PostgreSQL. Creation of apps with Material Design and Responsive Design. Version Control: Git and GitHub. Soft skills: Teamwork and Leadership, among others.",
      "exp-computer":
        "Diagnosis and troubleshooting of hardware and software issues, formatting storage units, installing operating systems, antivirus, drivers, etc. Assembling and maintaining equipment and cleaning components.",
      "pjct-movie":
        "Interactive web application to explore movie trailers, developed with React, Vite, Typescript, and Rsuite. Integrated with the TMDb API, it provides real-time access to titles, descriptions, ratings, and trailers.",
      "pjct-salary":
        "This React application is an efficient solution to help workers estimate their salaries. With its user-friendly interface, users can obtain an estimated salary amount. It is important to note that the application is updated with the latest labor regulations.",
      "pjct-irish":
        "Irish Backoffice is a full-stack business application designed for comprehensive claims management. It is composed of a RESTful backend in Java Spring Boot with Spring Data JPA and MySQL, and a frontend built with React, React Router, React Query and Bootstrap.",
      "pjct-eluney":
        "'Eluney', a company dedicated to providing unforgettable experiences at events and parties. Developed with React and using native CSS code along with other libraries, I focused on delivering a perfect presentation of the various services offered by the company.",
      "pjct-hawkbyte":
        "Technology solutions company focused on transforming business ideas into solid digital products. I led projects covering every stage from analysis and design to development and QA, delivering web applications, internal systems, and automated processes that optimize resources and boost business performance.",
      "pjct-paloglow":
        "E-commerce built with React and Tailwind, with animations via Framer Motion and routing using React Router. Dynamic catalog powered by Supabase (Postgres + Auth + Storage with RLS), a protected admin panel with full CRUD (featured/stock toggles), and image uploads with client-side compression. On-page SEO via react-helmet, plus store pagination, filtering, and sorting, and a WhatsApp checkout as the MVP. Deployed with the custom domain paloglow.shop.",
      "about-me":
        "I am <span style='color: #4e57d2'><b>Fernando Hasperué</b></span>, a fullstack developer committed to excellence in every project. My passion lies in creating digital solutions where user experience and code quality are prioritized at every stage of development. <br/> I always strive to <b>optimize</b> every process and deliver <b>results that make a difference.</b> <br/><br/> I firmly believe in the importance of a well-designed software architecture and the application of <b>best practices</b> that ensure clean and efficient code. <br/> Every project is an opportunity to learn, improve, and add value, and I am motivated by challenges that allow me to <b>grow professionally.</b> <br/><br/> I am open to collaborations and opportunities that drive innovation and the development of technological solutions. <br/><br/> I invite you to explore my portfolio to see some of my work and to connect with me on <a href='https://www.linkedin.com/in/hasperue/' target='_blank'><b>LinkedIn.</b></a> <span style='color: #4e57d2'><b> I am always open to new challenges and opportunities for professional growth.</b></span>",
    },
  },
  es: {
    translation: {
      welcome:
        "¡Hola! Soy Fernando Hasperué <br> <span class='enfasis'>Desarrollador Web Full Stack</span>",
      description:
        " Soy un desarrollador web enfocado en resultados, que diseña y gestiona plataformas digitales para impulsar el éxito integral del producto.</span>",
      "exp-oca":
        "Desarrollo y mantenimiento de aplicaciones web de la empresa, asegurando su funcionalidad, rendimiento y evolución. Gestión del control de versiones y colaboración con equipos Scrum para implementar mejoras y nuevas funcionalidades a los proyectos.",
      "exp-nocountry":
        "Diseño y creación de plataforma de videojuegos, incluyendo la gestión de datos, desarrollo de lógica de negocio y servicios REST. Responsable de la implementación de la interfaz de usuario y la interacción entre el frontend y el backend para garantizar una experiencia fluida y eficiente.",
      "edu-egg":
        "En mi formación como desarrollador web FullStack, adquirí habilidades tanto en Frontend: domino HTML, CSS y JavaScript, además de React JS. como en Backend: programación orientada a objetos con JAVA, manejo de bases de datos relacionales con MySQL, y utilización de JPA y JDBC. También he trabajado en proyectos con Spring Boot.",
      "exp-mobile":
        "He desarrollado una trayectoria como independiente, brindando servicios especializados para resolver incidencias y reparar el software y el hardware de diversos dispositivos móviles.",
      "edu-teclab":
        "Desarrollo de software sobre plataformas web en HTML, CSS y Javascript. Configuración e implementación de bases de datos utilizando PostgreSQL. Creación de apps con Material Design y Responsive Design Control de Versiones: Git y GitHub Habilidades blandas: Trabajo en Equipo y Liderazgo, entre otras",
      "exp-computer":
        "Diagnóstico y solución de problemas de hardware y software, formateo unidades de almacenamiento, instalación de S.O, antivirus, drivers etc. Armado y mantenimiento de equipos y limpieza de componentes.",
      "pjct-movie":
        "Aplicación web interactiva para explorar trailers de películas, desarrollada con React, Vite, Typescript, y librerías como Rsuite. Integrada con la API de TMDb, ofrece acceso en tiempo real a títulos, descripciones, calificaciones y trailers",
      "pjct-salary":
        "Esta aplicación React es una solución eficiente para ayudar a los trabajadores a estimar su sueldo. Gracias a su interfaz de fácil uso, los usuarios pueden obtener una estimación de su sueldo a cobrar. Es importante destacar que la aplicación está actualizada con las últimas regulaciones laborales.",
      "pjct-irish":
        "Irish Backoffice Irish Backoffice es una aplicación empresarial full-stack diseñada para la gestión integral de siniestros. Está compuesta por: Backend RESTful en Java Spring Boot, con Spring Data JPA y MySQL. Frontend: React, React Router, React Query y Bootstrap",
      "pjct-eluney":
        "'Eluney', una empresa dedicada a brindar experiencias inolvidables en eventos y fiestas. Desarrollada con React y empleando código nativo de CSS junto con otras bibliotecas, me enfoqué en ofrecer una presentación perfecta de los diversos servicios que ofrece la empresa.",
      "pjct-hawkbyte":
        "Empresa de soluciones tecnológicas integrales, especializada en transformar ideas de negocio en productos digitales sólidos. Lideré proyectos que abarcaron desde el análisis y diseño hasta el desarrollo y QA, entregando aplicaciones web, sistemas internos y procesos automatizados que optimizan recursos y potencian el rendimiento de las empresas.",
      "pjct-paloglow":
        "E-commerce hecho con React y Tailwind, animaciones con Framer Motion y ruteo con React Router. Catálogo dinámico desde Supabase (Postgres + Auth + Storage con RLS), panel admin protegido con CRUD completo y upload de imágenes con compresión en cliente. SEO on-page con react-helmet, paginado, filtros y orden en la tienda, y checkout por WhatsApp. Deploy con dominio propio paloglow.shop.",
      "about-me":
        "Soy <span style='color: #4e57d2'><b>Fernando Hasperué</b></span> , desarrollador fullstack comprometido con la excelencia en cada proyecto. Mi pasión radica en crear soluciones digitales, donde la experiencia del usuario y la calidad del código son prioritarias en todas las etapas del desarrollo. <br/> Siempre busco <b>optimizar</b> cada proceso y entregar <b> resultados que marquen la diferencia.</b> <br/> <br/> Creo firmemente en la importancia de una arquitectura de software bien diseñada y en la aplicación de <b>buenas prácticas</b> que aseguren un código limpio y eficiente. <br/> Cada proyecto es una oportunidad para aprender, mejorar y aportar valor, y me motiva enfrentar desafíos que me permitan <b>crecer profesionalmente.</b> <br/><br/> Estoy abierto a colaboraciones y oportunidades que impulsen la innovación y el desarrollo de soluciones tecnológicas. <br/><br/> Te invito a explorar mi portafolio para conocer algunos de mis trabajos y a conectarte conmigo en <a href='https://www.linkedin.com/in/hasperue/' target='_blank'><b>LinkedIn.</b></a> <span style='color: #4e57d2'><b> Siempre estoy abierto a nuevos desafíos y oportunidades de crecimiento profesional.</b></span>",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma por defecto
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
