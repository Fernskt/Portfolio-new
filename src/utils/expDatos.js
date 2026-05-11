
import experienceIco from '../assets/experiencia/experienceIco.svg';
import educationIco from '../assets/experiencia/educationIco.svg'; 

export const getDatos  = (t) => [
    {
      fecha: "May 2024 - Present",
      puesto: "Frontend Web Developer",
      empresa: "OCA log S.A.",
      descripcion: t('experience.oca'),
      link: "https://www.oca.com.ar/",
      icon: experienceIco
    },
    {
      fecha: "January 2024 - April 2024",
      puesto: "FullStack developer",
      empresa: "NoCountry",
      descripcion: t('experience.nocountry'),
      link: "https://www.nocountry.tech/",
      icon: experienceIco
    },
    {
      fecha: "March 2023 - December 2023",
      puesto: "Fullstack Developer",
      empresa: "Egg Cooperation",
      descripcion: t('education.egg'),
      link: "https://egg.live/es/home",
      icon: educationIco
    },
    {
      fecha: "March 2021 - May 2023",
      puesto: "Mobile Device Repair Technician",
      empresa: "Freelance",
      descripcion: t('experience.mobile'),
      link: "http://www.centroeducativoalem.com/",
      icon: experienceIco
    },
    {
      fecha: "February 2020",
      puesto: "Tecnicatura superior en Programación",
      empresa: "Teclab",
      descripcion: t('education.teclab'),
      link: "https://teclab.edu.ar/",
      icon: educationIco
    },
    {
      fecha: "January 2010",
      puesto: "Computer Repair Technician",
      empresa: "Freelance",
      descripcion: t('experience.computer'),
      link: "https://www.computer.com.ar/",
      icon: experienceIco
    },
];
