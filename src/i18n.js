// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Hello! 👋 Welcome to my <span class='enfasis'>Portfolio</span>",
      "description": "I'm <span class='enfasis'>Fernando Hasperué</span>, a Full Stack Web Developer. I specialize in technologies such as JavaScript, React, Java, Spring Boot, JPA, Hibernate, MySQL, Git, GitHub, and more.<span class='frase'> My focus is on creating efficient, high-quality solutions by combining technical expertise with a strong commitment to continuous learning and teamwork.</span>"
    }
  },
  es: {
    translation: {
      "welcome": "Hola! 👋 Bienvenido a mi <span class='enfasis'>Portafolio</span>",
      "description": "Soy <span class='enfasis'>Fernando Hasperué</span>, Desarrollador Web Full Stack. Me especializo en desarrollo de apps web, utilizando tecnologías como JavaScript, React, Java, Spring Boot, JPA, Hibernate, MySQL, Git, GitHub, entre otras. <span class='frase'>Mi enfoque está en crear soluciones eficientes y de alta calidad, combinando conocimientos técnicos con un fuerte compromiso hacia el aprendizaje continuo y el trabajo en equipo.</span>"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
