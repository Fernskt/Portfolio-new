import React from "react";
import '../i18n';
import { useTranslation } from 'react-i18next';
import proyect2 from "../assets/img/projects/proyect2(2).png";
import proyect1 from "../assets/img/projects/proyect1.png";
import proyect3 from "../assets/img/projects/proyect3.png";
import proyect4 from "../assets/img/projects/proyect4.png";
import proyect6 from "../assets/img/projects/proyect6.png";
import Icon from "./Icon";


export default function Proyectos() {
  const {t, i18n} = useTranslation();
  return (
    <div id="proyectos" className="section">
      <h2 className="titulo">Projects</h2>
      <div className="card">
        <div className="img">
          <h2 className="title-responsive">Movie App</h2>
          <img src={proyect2} alt="proyecto1" />
          <div className="tecnologies">
          <Icon className="icono" name="html" width={25} height={25} />
          <Icon className="icono" name="css" width={25} height={25} />
          <Icon className="icono" name="javascript" width={25} height={25} />
          <Icon className="icono" name="bootstrap" width={25} height={25} />
          </div>
        </div>
        <div className="info">
          <h2>Movie App</h2>
          <p>
          {t('pjct-movie')}
          </p>
          <div className="botones">
            <a
              href="https://fernskt.github.io/Pelis-Codo-A-Codo/"
              className="btn"
              target="_blank"
            >
              Show Projects
            </a>
            <a href="#" className="btn">
              Repository
            </a>
          </div>
        </div>
      </div> {/* Fin Card */}
      <div className="card">
        <div className="img">
          <h2 className="title-responsive">Salary Calculator</h2>
          <img src={proyect1} alt="proyecto1" />
          <div className="tecnologies">
          <Icon className="icono" name="reactjs" width={25} height={25} />
          <Icon className="icono" name="css" width={25} height={25} />
          <Icon className="icono" name="bootstrap" width={25} height={25} />
          </div>
        </div>
        <div className="info">
          <h2>Salary Calculator</h2>
          <p>
          {t('pjct-salary')}
          </p>
          <div className="botones">
            <a
              href="https://fernskt.github.io/Oca-React-App/"
              className="btn"
              target="_blank"
            >
              Show Projects
            </a>
            <a href="https://github.com/Fernskt/Oca-React-App" className="btn">
              Repository
            </a>
          </div>
        </div>
      </div> {/* Fin Card */}
      <div className="card">
        <div className="img">
          <h2 className="title-responsive">Gamestopia</h2>
          <img src={proyect4} alt="proyecto1" />
          <div className="tecnologies">
          <Icon className="icono" name="reactjs" width={25} height={25} />
          <Icon className="icono" name="bootstrap" width={25} height={25} />
          <Icon className="icono" name="java" width={25} height={25} />
          <Icon className="icono" name="spring-boot" width={25} height={25} />
          <Icon className="icono" name="sql" width={25} height={25} />
          <Icon className="icono" name="spring-security" width={25} height={25} />
          </div>
        </div>
        <div className="info">
          <h2>Gamestopia</h2>
          <p>
          {t('pjct-gamestopia')}
          
          </p>
          <div className="botones">
            <a
              href="https://fernskt.github.io/Pelis-Codo-A-Codo/"
              className="btn"
              target="_blank"
            >
              Show Projects
            </a>
            <a href="#" className="btn">
              Repository
            </a>
          </div>
        </div>
      </div> {/* Fin Card */}
      <div className="card">
        <div className="img">
          <h2 className="title-responsive">Eluney Eventos</h2>
          <img src={proyect3} alt="proyecto1" />
          <div className="tecnologies">
          <Icon className="icono" name="reactjs" width={25} height={25} />
          <Icon className="icono" name="css" width={25} height={25} />
          <Icon className="icono" name="bootstrap" width={25} height={25} />
         
          </div>
        </div>
        <div className="info">
          <h2>Eluney Eventos</h2>
          <p>
          {t('pjct-eluney')}
          </p>
          <div className="botones">
            <a
              href="https://fernskt.github.io/EluneyLandingPage/"
              className="btn"
              target="_blank"
            >
              Show Projects
            </a>
            <a href="https://github.com/Fernskt/EluneyLandingPage" className="btn">
              Repository
            </a>
          </div>
        </div>
      </div> {/* Fin Card */}
      <div className="card">
        <div className="img">
          <h2 className="title-responsive">Biblioteca Virtual</h2>
          <img src={proyect6} alt="proyecto1" />
          <div className="tecnologies">
          <Icon className="icono" name="html" width={25} height={25} />
          <Icon className="icono" name="css" width={25} height={25} />
          <Icon className="icono" name="bootstrap" width={25} height={25} />
          <Icon className="icono" name="java" width={25} height={25} />
          <Icon className="icono" name="spring-boot" width={25} height={25} />
          <Icon className="icono" name="sql" width={25} height={25} />
         
          </div>
        </div>
        <div className="info">
          <h2>Virtual Library</h2>
          <p>
          {t('pjct-library')}
          </p>
          <div className="botones">
            
            <a href="https://github.com/Fernskt/Biblioteca" className="btn">
              Repository
            </a>
          </div>
        </div>
      </div> {/* Fin Card */}
    </div>
  );
}
