// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "nav-experience": "Experience",
      "nav-projects": "Projects",
      "nav-about": "About me",
      "nav-contact": "Contact",
      "section-experience": "Experience & Training",
      "section-projects": "Projects",
      "section-about": "About Me",
      "show-more": "Show More",
      "show-less": "Show Less",
      "show-project": "Show Project",
      "show-video": "Show Video",
      "show-repo": "Repository",
      "skills-title": "Skills",
      "skills-frontend": "Frontend",
      "skills-backend": "Backend",
      welcome:
        "Hi! I'm Fernando Hasperué <br> <span class='enfasis'>Full Stack Web Developer</span>",
      description:
        "I build fast, scalable web apps with React — clean component architecture, production-ready backends, and interfaces people actually enjoy using.",
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
      "pjct-barber":
        "Modern barber shop website built with React, TypeScript, and CSS. Features a responsive design showcasing services, pricing, and location information with a clean, professional aesthetic.",
      "pjct-paraiso":
        "Landing page for Paraíso Tenis Club, built with React and TypeScript. A responsive and visually engaging site presenting the club's courts, memberships, and activities.",
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
      "contact-availability": "Available for work",
      "contact-title": "Let's work together",
      "contact-subtitle": "Open to freelance projects and full-time opportunities. If you have an idea, a problem to solve, or a role to fill — reach out.",
      "impact-barber": "Client-ready landing page for a modern barbershop.",
      "impact-paloglow": "Live e-commerce with real customers, Supabase backend, and its own domain.",
      "impact-paraiso": "Responsive landing page built for an active tennis club.",
      "impact-irish": "Full-stack system managing real claims in a live business environment.",
      "impact-movie": "Browse 500k+ movies and trailers in real time via the TMDb API.",
      "impact-eluney": "Visually-driven landing page for an events and parties company.",
      "impact-salary": "Practical tool updated with current labor regulations, used by real workers.",
      "impact-hawkbyte": "Full-cycle tech company site: from analysis and design to development and QA.",
      "about-me":
        "I'm <span style='color: #4e57d2'><b>Fernando Hasperué</b></span>, a fullstack developer based in Argentina. Since 2023 I've been shipping production web apps — from full claims management systems (<b>Irish Backoffice</b>) to e-commerce platforms with admin panels and real-time data (<b>PaloGlow</b>). <br/><br/> My sweet spot is the <b>React ecosystem</b>: I'm comfortable on the backend too (Java Spring Boot, NestJS, C# .NET), but I pay special attention to frontend performance, component architecture, and making interfaces that feel right to use. <br/><br/> I'm currently working at <b>OCA log S.A.</b> maintaining and evolving internal web platforms. On the side, I keep building — because the best way to get better is to ship things. <br/><br/> If you're looking for someone who writes <b>clean code</b>, communicates clearly, and cares about the product — <a href='https://www.linkedin.com/in/hasperue/' target='_blank' style='color: #4e57d2'><b>let's connect on LinkedIn.</b></a>",
    },
  },
  es: {
    translation: {
      "nav-experience": "Experiencia",
      "nav-projects": "Proyectos",
      "nav-about": "Sobre mí",
      "nav-contact": "Contacto",
      "section-experience": "Experiencia y Formación",
      "section-projects": "Proyectos",
      "section-about": "Sobre mí",
      "show-more": "Ver más",
      "show-less": "Ver menos",
      "show-project": "Ver proyecto",
      "show-video": "Ver video",
      "show-repo": "Repositorio",
      "skills-title": "Habilidades",
      "skills-frontend": "Frontend",
      "skills-backend": "Backend",
      welcome:
        "¡Hola! Soy Fernando Hasperué <br> <span class='enfasis'>Desarrollador Web Full Stack</span>",
      description:
        "Construyo aplicaciones web rápidas y escalables con React — arquitectura de componentes limpia, backends listos para producción e interfaces que la gente disfruta usar.",
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
      "pjct-barber":
        "Sitio web moderno para una barbería, desarrollado con React, TypeScript y CSS. Cuenta con un diseño responsivo que presenta los servicios, precios e información de ubicación con una estética limpia y profesional.",
      "pjct-paraiso":
        "Landing page para el Paraíso Tenis Club, desarrollada con React y TypeScript. Un sitio responsivo y visualmente atractivo que presenta las canchas, membresías y actividades del club.",
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
      "contact-availability": "Disponible para trabajar",
      "contact-title": "Trabajemos juntos",
      "contact-subtitle": "Abierto a proyectos freelance y oportunidades de tiempo completo. Si tenés una idea, un problema a resolver o un rol para cubrir — escribime.",
      "impact-barber": "Landing lista para cliente de una barbería moderna.",
      "impact-paloglow": "E-commerce en producción con clientes reales, backend en Supabase y dominio propio.",
      "impact-paraiso": "Landing responsiva para un club de tenis activo.",
      "impact-irish": "Sistema full-stack gestionando siniestros reales en un entorno empresarial en producción.",
      "impact-movie": "Explorá más de 500k películas y trailers en tiempo real con la API de TMDb.",
      "impact-eluney": "Landing visualmente impactante para una empresa de eventos y fiestas.",
      "impact-salary": "Herramienta práctica actualizada con las últimas regulaciones laborales.",
      "impact-hawkbyte": "Sitio de empresa tecnológica con ciclo completo: análisis, diseño, desarrollo y QA.",
      "about-me":
        "Soy <span style='color: #4e57d2'><b>Fernando Hasperué</b></span>, desarrollador fullstack radicado en Argentina. Desde 2023 construyo aplicaciones web en producción — desde sistemas completos de gestión de siniestros (<b>Irish Backoffice</b>) hasta e-commerce con panel de administración y datos en tiempo real (<b>PaloGlow</b>). <br/><br/> Mi zona es el <b>ecosistema React</b>: me manejo también en el backend (Java Spring Boot, NestJS, C# .NET), pero pongo especial atención en el rendimiento del frontend, la arquitectura de componentes y las interfaces que se sienten bien al usarlas. <br/><br/> Actualmente trabajo en <b>OCA log S.A.</b> manteniendo y haciendo evolucionar plataformas web internas. En paralelo, sigo construyendo proyectos propios — porque la mejor manera de mejorar es publicar cosas. <br/><br/> Si buscás a alguien que escriba <b>código limpio</b>, se comunique con claridad y le importe el producto — <a href='https://www.linkedin.com/in/hasperue/' target='_blank' style='color: #4e57d2'><b>conectémonos en LinkedIn.</b></a>",
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
