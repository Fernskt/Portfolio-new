import React from "react";
import '../i18n';
import { useTranslation } from 'react-i18next';
import Icon from "./Icon";
import { getDatos } from "../utils/projDatos";


export default function Proyectos() {
  const {t, i18n} = useTranslation();
  const datos = getDatos(t);
  
  return (
    <div id="proyectos" className="section">
      <h2 className="titulo">Projects</h2>

      {datos.map((proyecto) => (
        <div className="card">
        <div className="img">
          <h2 className="title-responsive">{proyecto.titulo}</h2>
          <img src={proyecto.imagen} alt="proyecto1" />
          <div className="tecnologies">
            {proyecto.iconos.map((icono) => (
              <Icon className="icono" name={icono} width={25} height={25} />
            ))}
          </div>
        </div>
        <div className="info">
          <h2>{proyecto.titulo}</h2>
          <p>
            {proyecto.descripcion}
          </p>
          <div className="botones">
           {proyecto.linkProyecto && <a
              href={proyecto.linkProyecto}
              className="btn2"
              target="_blank"
            >
              Show Projects
            </a>}
            <a href={proyecto.linkRepo} 
               className="btn"
               target="_blank">
              Repository
            </a>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
}
