import proyect2 from "../assets/img/projects/proyect2(2).png";
import proyect1 from "../assets/img/projects/proyect1.png";
import proyect3 from "../assets/img/projects/proyect3.png";
import proyect4 from "../assets/img/projects/proyect4.png";
import proyect6 from "../assets/img/projects/proyect6.png";
import proyect5 from "../assets/img/projects/proyect5.png";
import proyect4video from "../assets/vids/irish.mp4";

export const getDatos = (t) => [
  
  {
    titulo: "PaloGlow",
    imagen: proyect5,
    iconos: ["reactjs", "vite", "api-rest"],
    descripcion: t("pjct-paloglow"),
    linkRepo: "https://github.com/Fernskt/Palo-Glow",
    linkProyecto: "https://paloglow.shop/",
  },
  {
    titulo: "Irish Backoffice",
    imagen: proyect4,
    iconos: [
      "reactjs",
      "bootstrap",
      "java",
      "spring-boot",
      "sql",
      "spring-security",
    ],
    descripcion: t("pjct-irish"),
    linkRepo: "https://github.com/Fernskt/IrishBackOffice",
    video: proyect4video,
  },
  {
    titulo: "Movie App",
    imagen: proyect2,
    iconos: ["reactjs", "vite", "typescript", "rsuite", "api-rest"],
    descripcion: t("pjct-movie"),
    linkRepo: "https://github.com/Fernskt/pelis-app",
    linkProyecto: "https://pelis-app-nine.vercel.app/",
  },
  {
    titulo: "Eluney",
    imagen: proyect3,
    iconos: ["reactjs", "css", "bootstrap"],
    descripcion: t("pjct-eluney"),
    linkRepo: "https://github.com/Fernskt/EluneyLandingPage",
    linkProyecto: "https://fernskt.github.io/EluneyLandingPage/",
  },
  {
    titulo: "Salary Calculator",
    imagen: proyect1,
    iconos: ["reactjs", "css", "bootstrap"],
    descripcion: t("pjct-salary"),
    linkRepo: "https://github.com/Fernskt/Oca-React-App",
    linkProyecto: "https://fernskt.github.io/Oca-React-App/",
  },
  {
    titulo: "HawkByte",
    imagen: proyect6,
    iconos: ["html", "css", "javascript", "reactjs"],
    descripcion: t("pjct-hawkbyte"),
    linkRepo: "https://github.com/Fernskt/Halcon-byte",
    linkProyecto: "https://fernskt.github.io/Halcon-byte/",
  },
];
