import React, { useState, useEffect } from "react";
import '../i18n';
import { useTranslation } from 'react-i18next';
import { getDatos  } from '../utils/expDatos';

export default function Experiencia() {
  const { t } = useTranslation();
  const allDatos = getDatos(t);
  const [datos, setDatos] = useState(allDatos.slice(0, 4));
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    setDatos(verMas ? allDatos : allDatos.slice(0, 4));
  }, [verMas, t]);

  const handleButton = () => {
    setVerMas(prev => !prev);
  };

  return (
    <div className="section" id="experiencia">
      <h2 className="titulo">Experience & Training</h2>
      <ol class="relative border-s border-blue-200 border-blue-700">

        {datos.map((exp) => (
          <li class="mb-6 ms-6 experiencia-list">
          <div class="absolute w-7 h-7 bg-blue-200 rounded-full mt-1.5 -start-3.5 border-blue-900 bg-blue-700 flex justify-center items-center">
            <img src={exp.icon} alt="experienceIco" />
          </div>

          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
            {exp.fecha}
          </time>
          <h3 class="text-lg font-semibold text-white">
            {exp.puesto} - <a href={exp.link} target="_blank">{exp.empresa}</a>
          </h3>
          <p class="mb-4 text-sm font-normal description">
          {exp.descripcion}
          </p>
        </li>
        ))}

      </ol>
      <button onClick={handleButton}>{verMas?"":"Show More"}</button>
    </div>
  );
}
