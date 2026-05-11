/**
 * AGREGAR UN PROYECTO NUEVO:
 * 1. Copiá la imagen en src/assets/img/projects/
 * 2. Importala arriba (import miProyecto from '../assets/img/projects/mi-imagen.png')
 * 3. Copiá uno de los objetos de abajo, completá los campos y agregalo al array
 *
 * Campos obligatorios: id, title, image, icons, en, es, repo
 * Campos opcionales:   live (link al proyecto) | video (import del video)
 *
 * icons: usá los nombres del Icon.jsx (ej: 'reactjs', 'typescript', 'nodejs', etc.)
 */
import proyect9  from '../assets/img/projects/proyect9.png';
import proyect7  from '../assets/img/projects/proyect7.png';
import proyect5  from '../assets/img/projects/proyect5.png';
import proyect8  from '../assets/img/projects/proyect8.png';
import proyect4  from '../assets/img/projects/proyect4.png';
import proyect2  from '../assets/img/projects/proyect2(2).png';
import proyect3  from '../assets/img/projects/proyect3.png';
import proyect1  from '../assets/img/projects/proyect1.png';
import proyect6  from '../assets/img/projects/proyect6.png';
import irish_vid from '../assets/vids/irish.mp4';

export const projects = [
  {
    id: 'barber',
    title: 'Barber Shop',
    image: proyect7,
    icons: ['reactjs', 'css', 'typescript'],
    en: {
      impact: 'Client-ready landing page for a modern barbershop.',
      description: 'Modern barber shop website built with React, TypeScript, and CSS. Features a responsive design showcasing services, pricing, and location information with a clean, professional aesthetic.',
    },
    es: {
      impact: 'Landing lista para cliente de una barbería moderna.',
      description: 'Sitio web moderno para una barbería, desarrollado con React, TypeScript y CSS. Cuenta con un diseño responsivo que presenta los servicios, precios e información de ubicación con una estética limpia y profesional.',
    },
    repo: 'https://github.com/Fernskt/Barber-shop',
    live: 'https://barber-shop-gl99lz2j6-fernandos-projects-71799bf6.vercel.app/',
  },

  {
    id: 'paloglow',
    title: 'PaloGlow',
    image: proyect5,
    icons: ['reactjs', 'tailwind', 'supabase', 'vite'],
    en: {
      impact: 'Live e-commerce with real customers, Supabase backend, and its own domain.',
      description: 'E-commerce built with React and Tailwind, with animations via Framer Motion and routing using React Router. Dynamic catalog powered by Supabase (Postgres + Auth + Storage with RLS), a protected admin panel with full CRUD (featured/stock toggles), and image uploads with client-side compression. On-page SEO via react-helmet, plus store pagination, filtering, and sorting, and a WhatsApp checkout as the MVP. Deployed with the custom domain paloglow.shop.',
    },
    es: {
      impact: 'E-commerce en producción con clientes reales, backend en Supabase y dominio propio.',
      description: 'E-commerce hecho con React y Tailwind, animaciones con Framer Motion y ruteo con React Router. Catálogo dinámico desde Supabase (Postgres + Auth + Storage con RLS), panel admin protegido con CRUD completo y upload de imágenes con compresión en cliente. SEO on-page con react-helmet, paginado, filtros y orden en la tienda, y checkout por WhatsApp. Deploy con dominio propio paloglow.shop.',
    },
    repo: 'https://github.com/Fernskt/Palo-Glow',
    live: 'https://paloglow.shop/',
  },
  {
    id: 'food',
    title: 'Food Delivery',
    image: proyect9,
    icons: ['reactjs', 'css', 'typescript'],
    en: {
      impact: 'Responsive landing page for a trendy food delivery service.',
      description: "Landing page for a trendy food delivery service, built with React and TypeScript. A responsive and visually engaging site showcasing the menu, ordering process, and contact information.",
    },
    es: {
      impact: 'Landing responsiva para un servicio de comida a domicilio moderno.',
      description: 'Landing page para un servicio de comida a domicilio moderno, desarrollada con React y TypeScript. Un sitio responsivo y visualmente atractivo que presenta el menú, proceso de pedido e información de contacto.',
    },
    repo: '#',
    live: '#',
  },
  {
    id: 'paraiso',
    title: 'Paraiso Tenis Club',
    image: proyect8,
    icons: ['reactjs', 'css', 'typescript'],
    en: {
      impact: 'Responsive landing page built for an active tennis club.',
      description: "Landing page for Paraíso Tenis Club, built with React and TypeScript. A responsive and visually engaging site presenting the club's courts, memberships, and activities.",
    },
    es: {
      impact: 'Landing responsiva para un club de tenis activo.',
      description: 'Landing page para el Paraíso Tenis Club, desarrollada con React y TypeScript. Un sitio responsivo y visualmente atractivo que presenta las canchas, membresías y actividades del club.',
    },
    repo: 'https://github.com/Fernskt/paraiso-tenis-club',
    live: 'https://paraiso-tenis-club.vercel.app/',
  },

  {
    id: 'irish',
    title: 'Irish Backoffice',
    image: proyect4,
    icons: ['reactjs', 'bootstrap', 'java', 'spring-boot', 'sql', 'spring-security'],
    en: {
      impact: 'Full-stack system managing real claims in a live business environment.',
      description: 'Irish Backoffice is a full-stack business application designed for comprehensive claims management. It is composed of a RESTful backend in Java Spring Boot with Spring Data JPA and MySQL, and a frontend built with React, React Router, React Query and Bootstrap.',
    },
    es: {
      impact: 'Sistema full-stack gestionando siniestros reales en un entorno empresarial en producción.',
      description: 'Irish Backoffice es una aplicación empresarial full-stack diseñada para la gestión integral de siniestros. Está compuesta por: Backend RESTful en Java Spring Boot, con Spring Data JPA y MySQL. Frontend: React, React Router, React Query y Bootstrap.',
    },
    repo: 'https://github.com/Fernskt/IrishBackOffice',
    video: irish_vid,
  },

  {
    id: 'movie',
    title: 'Movie App',
    image: proyect2,
    icons: ['reactjs', 'vite', 'typescript', 'rsuite', 'api-rest'],
    en: {
      impact: 'Browse 500k+ movies and trailers in real time via the TMDb API.',
      description: 'Interactive web application to explore movie trailers, developed with React, Vite, Typescript, and Rsuite. Integrated with the TMDb API, it provides real-time access to titles, descriptions, ratings, and trailers.',
    },
    es: {
      impact: 'Explorá más de 500k películas y trailers en tiempo real con la API de TMDb.',
      description: 'Aplicación web interactiva para explorar trailers de películas, desarrollada con React, Vite, Typescript, y librerías como Rsuite. Integrada con la API de TMDb, ofrece acceso en tiempo real a títulos, descripciones, calificaciones y trailers.',
    },
    repo: 'https://github.com/Fernskt/pelis-app',
    live: 'https://pelis-app-nine.vercel.app/',
  },

  {
    id: 'eluney',
    title: 'Eluney',
    image: proyect3,
    icons: ['reactjs', 'css', 'bootstrap'],
    en: {
      impact: 'Visually-driven landing page for an events and parties company.',
      description: "'Eluney', a company dedicated to providing unforgettable experiences at events and parties. Developed with React and using native CSS code along with other libraries, I focused on delivering a perfect presentation of the various services offered by the company.",
    },
    es: {
      impact: 'Landing visualmente impactante para una empresa de eventos y fiestas.',
      description: "'Eluney', una empresa dedicada a brindar experiencias inolvidables en eventos y fiestas. Desarrollada con React y empleando código nativo de CSS junto con otras bibliotecas, me enfoqué en ofrecer una presentación perfecta de los diversos servicios que ofrece la empresa.",
    },
    repo: 'https://github.com/Fernskt/EluneyLandingPage',
    live: 'https://fernskt.github.io/EluneyLandingPage/',
  },

  {
    id: 'salary',
    title: 'Salary Calculator',
    image: proyect1,
    icons: ['reactjs', 'css', 'bootstrap'],
    en: {
      impact: 'Practical tool updated with current labor regulations, used by real workers.',
      description: 'This React application is an efficient solution to help workers estimate their salaries. With its user-friendly interface, users can obtain an estimated salary amount. It is important to note that the application is updated with the latest labor regulations.',
    },
    es: {
      impact: 'Herramienta práctica actualizada con las últimas regulaciones laborales.',
      description: 'Esta aplicación React es una solución eficiente para ayudar a los trabajadores a estimar su sueldo. Gracias a su interfaz de fácil uso, los usuarios pueden obtener una estimación de su sueldo a cobrar. Es importante destacar que la aplicación está actualizada con las últimas regulaciones laborales.',
    },
    repo: 'https://github.com/Fernskt/Oca-React-App',
    live: 'https://fernskt.github.io/Oca-React-App/',
  },

  {
    id: 'hawkbyte',
    title: 'HawkByte',
    image: proyect6,
    icons: ['html', 'css', 'javascript', 'reactjs'],
    en: {
      impact: 'Full-cycle tech company site: from analysis and design to development and QA.',
      description: 'Technology solutions company focused on transforming business ideas into solid digital products. I led projects covering every stage from analysis and design to development and QA, delivering web applications, internal systems, and automated processes that optimize resources and boost business performance.',
    },
    es: {
      impact: 'Sitio de empresa tecnológica con ciclo completo: análisis, diseño, desarrollo y QA.',
      description: 'Empresa de soluciones tecnológicas integrales, especializada en transformar ideas de negocio en productos digitales sólidos. Lideré proyectos que abarcaron desde el análisis y diseño hasta el desarrollo y QA, entregando aplicaciones web, sistemas internos y procesos automatizados que optimizan recursos y potencian el rendimiento de las empresas.',
    },
    repo: 'https://github.com/Fernskt/Halcon-byte',
    live: 'https://fernskt.github.io/Halcon-byte/',
  },
];
