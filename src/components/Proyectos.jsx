import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import { getDatos } from "../utils/projDatos";
import ModalProyectVideo from "./ModalProyectVideo";

export default function Proyectos() {
  const { t } = useTranslation();
  const datos = getDatos(t);

  const [modalVideoUrl, setModalVideoUrl] = useState(null);

  const handleModal = (videoUrl) => {
    setModalVideoUrl(videoUrl);
  };

  return (
    <div id="proyectos" className="section">
      <h2 className="titulo">Projects</h2>

      {datos.map((proyecto, idx) => (
        <div className="card" key={idx}>
          <div className="img">
            <h2 className="title-responsive">{proyecto.titulo}</h2>
            <img src={proyecto.imagen} alt="proyecto1" />
            <div className="tecnologies">
              {proyecto.iconos.map((icono, i) => (
                <Icon className="icono" name={icono} width={25} height={25} key={i} />
              ))}
            </div>
          </div>
          <div className="info">
            <h2>{proyecto.titulo}</h2>
            <p>{proyecto.descripcion}</p>
            <div className="botones">
              {proyecto.linkProyecto ? (
                <a
                  href={proyecto.linkProyecto}
                  className="btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show Project
                </a>
              ) : proyecto.video ? (
                <button
                  onClick={() => handleModal(proyecto.video)}
                  className="btn2"
                >
                  Show Video
                </button>
              ) : null}
              <a href={proyecto.linkRepo} className="btn" target="_blank" rel="noopener noreferrer">
                Repository
              </a>
            </div>
          </div>
        </div>
      ))}

      {modalVideoUrl && (
        <ModalProyectVideo modalVideoUrl={modalVideoUrl} setModalVideoUrl={setModalVideoUrl} />
      )}
    </div>
  );
}
