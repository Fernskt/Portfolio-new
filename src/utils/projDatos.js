import proyect2 from "../assets/img/projects/proyect2(2).png";
import proyect2alt from "../assets/img/projects/proyect2alt.png";
import proyect1 from "../assets/img/projects/proyect1.png";
import proyect3 from "../assets/img/projects/proyect3.png";
import proyect3alt from "../assets/img/projects/proyect3alt.png";
import proyect4 from "../assets/img/projects/proyect4.png";
import proyect4alt from "../assets/img/projects/proyect4alt.png";
import proyect6 from "../assets/img/projects/proyect6.png";
import proyect6alt from "../assets/img/projects/proyect6alt.png";
import proyect5 from "../assets/img/projects/proyect5.png";
import proyect5alt from "../assets/img/projects/proyect5alt.png";
import proyect7 from "../assets/img/projects/proyect7.png";
import proyect7alt from "../assets/img/projects/proyect7alt.png";
import proyect8 from "../assets/img/projects/proyect8.png";
import proyect8alt from "../assets/img/projects/proyect8alt.png";
import proyect4video from "../assets/vids/irish.mp4";
import project9 from "../assets/img/projects/proyect9.png";
import project9alt from "../assets/img/projects/proyect9alt.png";

export const getDatos = (t) => [
    {
    titulo: "Barber Shop",
    imagen: proyect7,
    imagenAlt: proyect7alt,
    iconos: ["reactjs", "css", "typescript"],
    impacto: t("projects.barber.impact"),
    descripcion: t("projects.barber.description"),
    linkRepo: "https://github.com/Fernskt/Barber-shop",
    linkProyecto: "https://barber-shop-gl99lz2j6-fernandos-projects-71799bf6.vercel.app/",
  },
  {
    titulo: "PaloGlow",
    imagen: proyect5,
    imagenAlt: proyect5alt,
    iconos: ["reactjs", "vite", "api-rest", "typescript", "supabase"],
    impacto: t("projects.paloglow.impact"),
    descripcion: t("projects.paloglow.description"),
    linkRepo: "https://github.com/Fernskt/Palo-Glow",
    linkProyecto: "https://paloglow.shop/",
  },
  {
    titulo: "Sabores Pupa",
    imagen: project9,
    imagenAlt: project9alt,
    iconos: ["html", "css", "javascript"],
    impacto: t("projects.food.impact"),
    descripcion: t("projects.food.description"),
    linkRepo: "https://github.com/Fernskt/Sabores-Pupa",
    linkProyecto: "https://saborespupa.online/",
  },
  {
    titulo: "Paraiso Tenis Club",
    imagen: proyect8,
    imagenAlt: proyect8alt,
    iconos: ["reactjs", "css", "typescript"],
    impacto: t("projects.paraiso.impact"),
    descripcion: t("projects.paraiso.description"),
    linkRepo: "https://github.com/Fernskt/paraiso-tenis-club",
    linkProyecto: "https://paraiso-tenis-club.vercel.app/",
  },
  {
    titulo: "Irish Backoffice",
    imagen: proyect4,
    imagenAlt: proyect4alt,
    iconos: [
      "reactjs",
      "bootstrap",
      "java",
      "spring-boot",
      "sql",
      "spring-security",
    ],
    impacto: t("projects.irish.impact"),
    descripcion: t("projects.irish.description"),
    linkRepo: "https://github.com/Fernskt/IrishBackOffice",
    video: proyect4video,
  },
  {
    titulo: "Movie App",
    imagen: proyect2,
    imagenAlt: proyect2alt,
    iconos: ["reactjs", "vite", "typescript", "rsuite", "api-rest"],
    impacto: t("projects.movie.impact"),
    descripcion: t("projects.movie.description"),
    linkRepo: "https://github.com/Fernskt/pelis-app",
    linkProyecto: "https://pelis-app-nine.vercel.app/",
  },
  {
    titulo: "Eluney",
    imagen: proyect3,
    imagenAlt: proyect3alt,
    iconos: ["reactjs", "css", "bootstrap"],
    impacto: t("projects.eluney.impact"),
    descripcion: t("projects.eluney.description"),
    linkRepo: "https://github.com/Fernskt/EluneyLandingPage",
    linkProyecto: "https://fernskt.github.io/EluneyLandingPage/",
  },
  {
    titulo: "Salary Calculator",
    imagen: proyect1,
    imagenAlt: proyect1,
    iconos: ["reactjs", "css", "bootstrap"],
    impacto: t("projects.salary.impact"),
    descripcion: t("projects.salary.description"),
    linkRepo: "https://github.com/Fernskt/Oca-React-App",
    linkProyecto: "https://fernskt.github.io/Oca-React-App/",
  },
  {
    titulo: "HawkByte",
    imagen: proyect6,
    imagenAlt: proyect6alt,
    iconos: ["html", "css", "javascript", "reactjs"],
    impacto: t("projects.hawkbyte.impact"),
    descripcion: t("projects.hawkbyte.description"),
    linkRepo: "https://github.com/Fernskt/Halcon-byte",
    linkProyecto: "https://fernskt.github.io/Halcon-byte/",
  },

];
