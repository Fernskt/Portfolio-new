import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ─────────────────────────────────────────────
//  ENGLISH
// ─────────────────────────────────────────────
const en = {
  // Navigation
  nav: {
    experience: "Experience",
    projects:   "Projects",
    about:      "About me",
    contact:    "Contact",
  },

  // Section headings
  section: {
    experience: "Experience & Training",
    projects:   "Projects",
    about:      "About Me",
  },

  // Shared UI labels
  ui: {
    showMore:    "Show More",
    showLess:    "Show Less",
    showProject: "Show Project",
    showVideo:   "Show Video",
    showRepo:    "Repository",
  },

  // Skills section
  skills: {
    title:    "Skills",
    frontend: "Frontend",
    backend:  "Backend",
  },

  // Hero section
  hero: {
    welcome:     "Hi! I'm Fernando Hasperué <br> <span class='enfasis'>Full Stack Web Developer</span>",
    description: "I build fast, scalable web apps with React — clean component architecture, production-ready backends, and interfaces people actually enjoy using.",
  },

  // Work experience
  experience: {
    oca:       "Development and maintenance of the company's web applications, ensuring their functionality, performance, and evolution. Version control management and collaboration with Scrum teams to implement improvements and new features to the projects.",
    nocountry: "Design and creation of a gaming platform, including data management, business logic development, and REST services. Responsible for implementing the user interface and the interaction between the frontend and backend to ensure a smooth and efficient experience.",
    mobile:    "I have developed a career as a freelancer, providing specialized services to resolve incidents and repair software and hardware for various mobile devices.",
    computer:  "Diagnosis and troubleshooting of hardware and software issues, formatting storage units, installing operating systems, antivirus, drivers, etc. Assembling and maintaining equipment and cleaning components.",
  },

  // Education
  education: {
    egg:    "In my training as a FullStack web developer, I acquired skills in both Frontend: proficient in HTML, CSS, and JavaScript, as well as React JS; and Backend: object-oriented programming with JAVA, management of relational databases with MySQL, and use of JPA and JDBC. I have also worked on projects with Spring Boot.",
    teclab: "Software development on web platforms using HTML, CSS, and JavaScript. Configuration and implementation of databases using PostgreSQL. Creation of apps with Material Design and Responsive Design. Version Control: Git and GitHub. Soft skills: Teamwork and Leadership, among others.",
  },

  // Projects — description + one-line impact statement
  projects: {
    barber: {
      description: "Modern barber shop website built with React, TypeScript, and CSS. Features a responsive design showcasing services, pricing, and location information with a clean, professional aesthetic.",
      impact:      "Client-ready landing page for a modern barbershop.",
    },
    paloglow: {
      description: "E-commerce built with React and Tailwind, with animations via Framer Motion and routing using React Router. Dynamic catalog powered by Supabase (Postgres + Auth + Storage with RLS), a protected admin panel with full CRUD (featured/stock toggles), and image uploads with client-side compression. On-page SEO via react-helmet, plus store pagination, filtering, and sorting, and a WhatsApp checkout as the MVP. Deployed with the custom domain paloglow.shop.",
      impact:      "Live e-commerce with real customers, Supabase backend, and its own domain.",
    },
    food: {
      description: "Landing page built for a homemade preserves entrepreneur. Features a product catalog with pricing, a discounted combo offer, customer reviews, and a direct WhatsApp checkout. Built with vanilla HTML, CSS, and JavaScript, focused on conversion and fast load times.",
      impact:      "Live site for a real client, with active WhatsApp orders and nationwide shipping.",
    },
    paraiso: {
      description: "Landing page for Paraíso Tenis Club, built with React and TypeScript. A responsive and visually engaging site presenting the club's courts, memberships, and activities.",
      impact:      "Responsive landing page built for an active tennis club.",
    },
    irish: {
      description: "Irish Backoffice is a full-stack business application designed for comprehensive claims management. It is composed of a RESTful backend in Java Spring Boot with Spring Data JPA and MySQL, and a frontend built with React, React Router, React Query and Bootstrap.",
      impact:      "Full-stack system managing real claims in a live business environment.",
    },
    movie: {
      description: "Interactive web application to explore movie trailers, developed with React, Vite, Typescript, and Rsuite. Integrated with the TMDb API, it provides real-time access to titles, descriptions, ratings, and trailers.",
      impact:      "Browse 500k+ movies and trailers in real time via the TMDb API.",
    },
    eluney: {
      description: "'Eluney', a company dedicated to providing unforgettable experiences at events and parties. Developed with React and using native CSS code along with other libraries, I focused on delivering a perfect presentation of the various services offered by the company.",
      impact:      "Visually-driven landing page for an events and parties company.",
    },
    salary: {
      description: "This React application is an efficient solution to help workers estimate their salaries. With its user-friendly interface, users can obtain an estimated salary amount. It is important to note that the application is updated with the latest labor regulations.",
      impact:      "Practical tool updated with current labor regulations, used by real workers.",
    },
    hawkbyte: {
      description: "Technology solutions company focused on transforming business ideas into solid digital products. I led projects covering every stage from analysis and design to development and QA, delivering web applications, internal systems, and automated processes that optimize resources and boost business performance.",
      impact:      "Full-cycle tech company site: from analysis and design to development and QA.",
    },
  },

  // Contact section
  contact: {
    availability: "Available for work",
    title:        "Let's work together",
    subtitle:     "Open to freelance projects and full-time opportunities. If you have an idea, a problem to solve, or a role to fill — reach out.",
  },

  // About Me section
  about: {
    text: "I'm <span style='color: #4e57d2'><b>Fernando Hasperué</b></span>, a fullstack developer based in Argentina. Since 2023 I've been shipping production web apps — from full claims management systems (<b>Irish Backoffice</b>) to e-commerce platforms with admin panels and real-time data (<b>PaloGlow</b>). <br/><br/> My sweet spot is the <b>React ecosystem</b>: I'm comfortable on the backend too (Java Spring Boot, NestJS, C# .NET), but I pay special attention to frontend performance, component architecture, and making interfaces that feel right to use. <br/><br/> I'm currently working at <b>OCA log S.A.</b> maintaining and evolving internal web platforms. On the side, I keep building — because the best way to get better is to ship things. <br/><br/> If you're looking for someone who writes <b>clean code</b>, communicates clearly, and cares about the product — <a href='https://www.linkedin.com/in/hasperue/' target='_blank' style='color: #4e57d2'><b>let's connect on LinkedIn.</b></a>",
  },
};

// ─────────────────────────────────────────────
//  SPANISH
// ─────────────────────────────────────────────
const es = {
  nav: {
    experience: "Experiencia",
    projects:   "Proyectos",
    about:      "Sobre mí",
    contact:    "Contacto",
  },

  section: {
    experience: "Experiencia y Formación",
    projects:   "Proyectos",
    about:      "Sobre mí",
  },

  ui: {
    showMore:    "Ver más",
    showLess:    "Ver menos",
    showProject: "Ver proyecto",
    showVideo:   "Ver video",
    showRepo:    "Repositorio",
  },

  skills: {
    title:    "Habilidades",
    frontend: "Frontend",
    backend:  "Backend",
  },

  hero: {
    welcome:     "¡Hola! Soy Fernando Hasperué <br> <span class='enfasis'>Desarrollador Web Full Stack</span>",
    description: "Construyo aplicaciones web rápidas y escalables con React — arquitectura de componentes limpia, backends listos para producción e interfaces que la gente disfruta usar.",
  },

  experience: {
    oca:       "Desarrollo y mantenimiento de aplicaciones web de la empresa, asegurando su funcionalidad, rendimiento y evolución. Gestión del control de versiones y colaboración con equipos Scrum para implementar mejoras y nuevas funcionalidades a los proyectos.",
    nocountry: "Diseño y creación de plataforma de videojuegos, incluyendo la gestión de datos, desarrollo de lógica de negocio y servicios REST. Responsable de la implementación de la interfaz de usuario y la interacción entre el frontend y el backend para garantizar una experiencia fluida y eficiente.",
    mobile:    "He desarrollado una trayectoria como independiente, brindando servicios especializados para resolver incidencias y reparar el software y el hardware de diversos dispositivos móviles.",
    computer:  "Diagnóstico y solución de problemas de hardware y software, formateo unidades de almacenamiento, instalación de S.O, antivirus, drivers etc. Armado y mantenimiento de equipos y limpieza de componentes.",
  },

  education: {
    egg:    "En mi formación como desarrollador web FullStack, adquirí habilidades tanto en Frontend: domino HTML, CSS y JavaScript, además de React JS. como en Backend: programación orientada a objetos con JAVA, manejo de bases de datos relacionales con MySQL, y utilización de JPA y JDBC. También he trabajado en proyectos con Spring Boot.",
    teclab: "Desarrollo de software sobre plataformas web en HTML, CSS y Javascript. Configuración e implementación de bases de datos utilizando PostgreSQL. Creación de apps con Material Design y Responsive Design Control de Versiones: Git y GitHub Habilidades blandas: Trabajo en Equipo y Liderazgo, entre otras",
  },

  projects: {
    barber: {
      description: "Sitio web moderno para una barbería, desarrollado con React, TypeScript y CSS. Cuenta con un diseño responsivo que presenta los servicios, precios e información de ubicación con una estética limpia y profesional.",
      impact:      "Landing lista para cliente de una barbería moderna.",
    },
    paloglow: {
      description: "E-commerce hecho con React y Tailwind, animaciones con Framer Motion y ruteo con React Router. Catálogo dinámico desde Supabase (Postgres + Auth + Storage con RLS), panel admin protegido con CRUD completo y upload de imágenes con compresión en cliente. SEO on-page con react-helmet, paginado, filtros y orden en la tienda, y checkout por WhatsApp. Deploy con dominio propio paloglow.shop.",
      impact:      "E-commerce en producción con clientes reales, backend en Supabase y dominio propio.",
    },
    food: {
      description: "Landing page desarrollada para una emprendedora de conservas artesanales. Incluye catálogo de productos con precios, combo con descuento, reseñas de clientes y checkout directo por WhatsApp. Desarrollada con HTML, CSS y JavaScript puro, con foco en conversión y velocidad de carga.",
      impact:      "Sitio en producción para una clienta real, con pedidos activos por WhatsApp y envíos a todo el país.",
    },
    paraiso: {
      description: "Landing page para el Paraíso Tenis Club, desarrollada con React y TypeScript. Un sitio responsivo y visualmente atractivo que presenta las canchas, membresías y actividades del club.",
      impact:      "Landing responsiva para un club de tenis activo.",
    },
    irish: {
      description: "Irish Backoffice es una aplicación empresarial full-stack diseñada para la gestión integral de siniestros. Está compuesta por: Backend RESTful en Java Spring Boot, con Spring Data JPA y MySQL. Frontend: React, React Router, React Query y Bootstrap",
      impact:      "Sistema full-stack gestionando siniestros reales en un entorno empresarial en producción.",
    },
    movie: {
      description: "Aplicación web interactiva para explorar trailers de películas, desarrollada con React, Vite, Typescript, y librerías como Rsuite. Integrada con la API de TMDb, ofrece acceso en tiempo real a títulos, descripciones, calificaciones y trailers",
      impact:      "Explorá más de 500k películas y trailers en tiempo real con la API de TMDb.",
    },
    eluney: {
      description: "'Eluney', una empresa dedicada a brindar experiencias inolvidables en eventos y fiestas. Desarrollada con React y empleando código nativo de CSS junto con otras bibliotecas, me enfoqué en ofrecer una presentación perfecta de los diversos servicios que ofrece la empresa.",
      impact:      "Landing visualmente impactante para una empresa de eventos y fiestas.",
    },
    salary: {
      description: "Esta aplicación React es una solución eficiente para ayudar a los trabajadores a estimar su sueldo. Gracias a su interfaz de fácil uso, los usuarios pueden obtener una estimación de su sueldo a cobrar. Es importante destacar que la aplicación está actualizada con las últimas regulaciones laborales.",
      impact:      "Herramienta práctica actualizada con las últimas regulaciones laborales.",
    },
    hawkbyte: {
      description: "Empresa de soluciones tecnológicas integrales, especializada en transformar ideas de negocio en productos digitales sólidos. Lideré proyectos que abarcaron desde el análisis y diseño hasta el desarrollo y QA, entregando aplicaciones web, sistemas internos y procesos automatizados que optimizan recursos y potencian el rendimiento de las empresas.",
      impact:      "Sitio de empresa tecnológica con ciclo completo: análisis, diseño, desarrollo y QA.",
    },
  },

  contact: {
    availability: "Disponible para trabajar",
    title:        "Trabajemos juntos",
    subtitle:     "Abierto a proyectos freelance y oportunidades de tiempo completo. Si tenés una idea, un problema a resolver o un rol para cubrir — escribime.",
  },

  about: {
    text: "Soy <span style='color: #4e57d2'><b>Fernando Hasperué</b></span>, desarrollador fullstack radicado en Argentina. Desde 2023 construyo aplicaciones web en producción — desde sistemas completos de gestión de siniestros (<b>Irish Backoffice</b>) hasta e-commerce con panel de administración y datos en tiempo real (<b>PaloGlow</b>). <br/><br/> Mi zona es el <b>ecosistema React</b>: me manejo también en el backend (Java Spring Boot, NestJS, C# .NET), pero pongo especial atención en el rendimiento del frontend, la arquitectura de componentes y las interfaces que se sienten bien al usarlas. <br/><br/> Actualmente trabajo en <b>OCA log S.A.</b> manteniendo y haciendo evolucionar plataformas web internas. En paralelo, sigo construyendo proyectos propios — porque la mejor manera de mejorar es publicar cosas. <br/><br/> Si buscás a alguien que escriba <b>código limpio</b>, se comunique con claridad y le importe el producto — <a href='https://www.linkedin.com/in/hasperue/' target='_blank' style='color: #4e57d2'><b>conectémonos en LinkedIn.</b></a>",
  },
};

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
