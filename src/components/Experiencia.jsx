import React from "react";
import { useState } from "react";
import '../i18n';
import { useTranslation } from 'react-i18next';

export default function Experiencia() {
  const {t, i18n} = useTranslation();

  const [verMas, setVerMas] = useState(false);

  const handleButton = ()=>{
    setVerMas(!verMas);
  }

  const experienceIco = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#FFF"
      class="bi bi-briefcase-fill"
      viewBox="0 0 16 16"
    >
      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
      <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
    </svg>
  );

  const educationIco = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#FFF"
      class="bi bi-mortarboard-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
    </svg>
  );

  return (
    <div className="section" id="experiencia">
      <h2 className="titulo">Experience & Training</h2>
      <ol class="relative border-s border-blue-200 border-blue-700">
        <li class="mb-6 ms-6 experiencia-list">
          <div class="absolute w-7 h-7 bg-blue-200 rounded-full mt-1.5 -start-3.5 border-blue-900 bg-blue-700 flex justify-center items-center">
            {experienceIco}
          </div>

          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
            May 2024 - Present
          </time>
          <h3 class="text-lg font-semibold text-white">
            Frontend Web Developer - <a href="https://www.oca.com.ar/">OCA log S.A.</a>
          </h3>
          <p class="mb-4 text-sm font-normal text-gray-500 text-gray-400">
          {t('exp-oca')}
          </p>
        </li>
        <li class="mb-6 ms-6 experiencia-list">
          <div class="absolute w-7 h-7 bg-blue-200 rounded-full mt-1.5 -start-3.5 border  border-blue-900 bg-blue-700 flex justify-center items-center">
            {experienceIco}
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
          January 2024 - April 2024
          </time>
          <h3 class="text-lg font-semibold text-white">
            FullStack developer - <a href="https://www.nocountry.tech/">NoCountry</a>
          </h3>
          <p class="text-sm font-normal text-gray-500 text-gray-400">
          {t('exp-nocountry')}
          </p>
        </li>
        <li class="mb-6 ms-6 experiencia-list">
          <div class="absolute w-7 h-7 bg-blue-200 rounded-full mt-1.5 -start-3.5 border  border-blue-900 bg-blue-700 flex justify-center items-center">
            {educationIco}
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
          March 2023 - December 2023
          </time>
          <h3 class="text-lg font-semibold text-white">
             Fullstack Developer - <a href="https://egg.live/es/home">Egg Cooperation</a>
          </h3>
          <p class="text-sm font-normal text-gray-500 text-gray-400">
          {t('edu-egg')}
          </p>
        </li>
        <li class="mb-6 ms-6 experiencia-list">
          <div class="absolute w-7 h-7 bg-blue-200 rounded-full mt-1.5 -start-3.5 border  border-blue-900 bg-blue-700 flex justify-center items-center">
            {experienceIco}
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
          March 2021 - May 2023
          </time>
          <h3 class="text-lg font-semibold text-white">
            Mobile Device Repair Technician - Freelance
          </h3>
          <p class="text-sm font-normal text-gray-500 text-gray-400">
          {t('exp-mobile')}
          </p>
        </li>
        <li class="mb-6 ms-6 experiencia-list" hidden={!verMas}>
          <div class="absolute w-7 h-7 bg-blue-200 rounded-full mt-1.5 -start-3.5 border  border-blue-900 bg-blue-700 flex justify-center items-center">
            {educationIco}
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
            Febrero 2020
          </time>
          <h3 class="text-lg font-semibold text-white">
            Tecnicatura superior en Programación - <a href="https://teclab.edu.ar/">Teclab</a> 
          </h3>
          <p class="text-sm font-normal text-gray-500 text-gray-400">
          {t('edu-teclab')}
          </p>
        </li>

        <li class="mb-6 ms-6 experiencia-list" hidden={!verMas}>
          <div class="absolute w-7 h-7 bg-blue-200 rounded-full mt-1.5 -start-3.5 border  border-blue-900 bg-blue-700 flex justify-center items-center">
            {experienceIco}
          </div>
          <time class="mb-1 text-sm font-normal leading-none text-blue-400 text-blue-500">
            January 2010
          </time>
          <h3 class="text-lg font-semibold text-white">
            Computer Repair Technician - Freelance
          </h3>
          <p class="text-sm font-normal text-gray-500 text-gray-400">
          {t('exp-computer')}
          </p>
        </li>
      </ol>
      <button onClick={handleButton}>{verMas?"Show Less":"Show More"}</button>
    </div>
  );
}
