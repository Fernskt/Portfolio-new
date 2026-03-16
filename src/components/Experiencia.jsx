import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { getDatos } from '../utils/expDatos';

export default function Experiencia() {
  const { t } = useTranslation();
  const [verMas, setVerMas] = useState(false);

  const allDatos = getDatos(t);
  const datos = verMas ? allDatos : allDatos.slice(0, 4);

  return (
    <div className="section" id="experiencia">
      <h2 className="titulo">Experience & Training</h2>
      <ol className="relative border-s border-blue-700">

        {datos.map((exp, idx) => (
          <li key={idx} className="mb-6 ms-6 experiencia-list">
            <div className="absolute w-7 h-7 rounded-full mt-1.5 -start-3.5 bg-blue-700 flex justify-center items-center">
              <img src={exp.icon} alt="" aria-hidden="true" />
            </div>

            <time className="mb-1 text-sm font-normal leading-none text-blue-500">
              {exp.fecha}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {exp.puesto} -{" "}
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                {exp.empresa}
              </a>
            </h3>
            <p className="mb-4 text-sm font-normal description">
              {exp.descripcion}
            </p>
          </li>
        ))}

      </ol>
      <button onClick={() => setVerMas(prev => !prev)}>
        {verMas ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
