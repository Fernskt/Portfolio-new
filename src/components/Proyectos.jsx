import { useState } from "react";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import { getDatos } from "../utils/projDatos";
import ModalProyectVideo from "./ModalProyectVideo";
import { TECH_META } from "../utils/techMeta";

export default function Proyectos() {
  const { t } = useTranslation();
  const datos = getDatos(t);

  const [modalVideoUrl, setModalVideoUrl] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleModal = (videoUrl) => {
    setModalVideoUrl(videoUrl);
  };

  const visibleDatos = showAll ? datos : datos.slice(0, 6);

  return (
    <div id="proyectos" className="section">
      <h2 className="titulo">{t('section.projects')}</h2>

      {visibleDatos.map((proyecto, idx) => (
        <div className="card" key={idx}>
          <div className="img">
            <h2 className="title-responsive">{proyecto.titulo}</h2>
            <div className="project-image-wrapper">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                loading="lazy"
                className="project-image project-image-main"
              />
              {proyecto.imagenAlt ? (
                <img
                  src={proyecto.imagenAlt}
                  alt={`${proyecto.titulo} preview alternativo`}
                  loading="lazy"
                  className="project-image project-image-alt"
                />
              ) : null}
            </div>
            <div className="tecnologies">
              {proyecto.iconos.map((icono, i) => {
                const meta = TECH_META[icono] || { label: icono, color: '#535efe' };
                return (
                  <span
                    key={i}
                    className="tech-badge"
                    style={{
                      '--badge-bg':     `${meta.color}18`,
                      '--badge-border': `${meta.color}55`,
                    }}
                  >
                    <Icon name={icono} width={13} height={13} />
                    {meta.label}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="info">
            <h2>{proyecto.titulo}</h2>
            <p className="project-impact">{proyecto.impacto}</p>
            <p>{proyecto.descripcion}</p>
            <div className="botones">
              {proyecto.linkProyecto ? (
                <a
                  href={proyecto.linkProyecto}
                  className="btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('ui.showProject')}
                </a>
              ) : proyecto.video ? (
                <button
                  onClick={() => handleModal(proyecto.video)}
                  className="btn2"
                >
                  {t('ui.showVideo')}
                </button>
              ) : null}
              <a href={proyecto.linkRepo} className="btn" target="_blank" rel="noopener noreferrer">
                {t('ui.showRepo')}
              </a>
            </div>
          </div>
        </div>
      ))}

      {!showAll && datos.length > 6 && (
        <div className="ver-mas-wrapper">
          <button className="btn2 ver-mas-btn" onClick={() => setShowAll(true)}>
            {t('ui.showMore')}
          </button>
        </div>
      )}
      {modalVideoUrl && (
        <ModalProyectVideo modalVideoUrl={modalVideoUrl} setModalVideoUrl={setModalVideoUrl} />
      )}
    </div>
  );
}
