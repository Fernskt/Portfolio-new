import React from "react";

export default function Experiencia() {
  return (
    <div className="experiencia">
      <h2 className="titulo">Experiencia Laboral</h2>
      <ol class="relative border-s border-blue-200 border-blue-700">
        <li class="mb-6 ms-4 experiencia-list">
          <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white border-blue-900 bg-blue-700"></div>

          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
            Mayo 2024
          </time>
          <h3 class="text-lg font-semibold text-white">
            Frontend Web Developer - OCA log S.A.
          </h3>
          <p class="mb-4 text-sm font-normal text-gray-500 text-gray-400">
            Participación en equipos Scrum, colaborando en sprints. Desarrollo y
            mantenimiento de aplicaciones web utilizando React.js JavaScript,
            Git y Bitbucket para control de versiones, etc.
          </p>
        </li>
        <li class="mb-6 ms-4 experiencia-list">
          <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white border-blue-900 bg-blue-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
            Enero 2024
          </time>
          <h3 class="text-lg font-semibold text-white">
            FullStack developer - NoCountry
          </h3>
          <p class="text-sm font-normal text-gray-500 text-gray-400">
            Creación de plataforma de videojuegos con Java, integrando MySQL,
            JPA, JDBC, y Hibernate para la gestión de datos. Desarrollo de
            lógica de negocio y APIs REST con Spring Boot. Frontend con HTML,
            CSS, JavaScript, y React.
          </p>
        </li>
        <li class="mb-6 ms-4 experiencia-list">
          <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white border-blue-900 bg-blue-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
            Marzo 2020
          </time>
          <h3 class="text-lg font-semibold text-white">
            Mobile Device Repair Technician
          </h3>
          <p class="text-sm font-normal text-gray-500 text-gray-400">
            He desarrollado una trayectoria como independiente, brindando
            servicios especializados para resolver incidencias y reparar el
            software y el hardware de diversos dispositivos móviles.
          </p>
        </li>

        <li class="mb-6 ms-4 experiencia-list">
          <div class="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -start-1.5 border border-white border-blue-900 bg-blue-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
            Enero 2008
          </time>
          <h3 class="text-lg font-semibold text-white">
            Computer Repair Technician
          </h3>
          <p class="text-sm font-normal text-gray-500 text-gray-400">
            Diagnóstico y solución de problemas de hardware y software, formateo
            unidades de almacenamiento, instalación de S.O, antivirus, drivers
            etc. Armado y mantenimiento de equipos y limpieza de componentes.
          </p>
        </li>
      </ol>
    </div>
  );
}
