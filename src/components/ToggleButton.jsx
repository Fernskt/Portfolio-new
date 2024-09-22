import React, { useState, useCallback } from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';
import '../assets/styles/toggle.css';

//Manejar cambio de idioma, Ingles - Español

const ToggleButton = ({ onChange }) => {
  const [isOn, setIsOn] = useState(true);
  const { i18n } = useTranslation();

  // Manejador de clics que cambia el estado y el idioma
  const handleClick = useCallback(() => {
    const newState = !isOn;
    setIsOn(newState);

    // Cambiar el idioma basado en el nuevo estado
    if (newState) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }

    // Llamar a la función onChange con el nuevo estado
    if (onChange) {
      onChange(newState);
    }
  }, [isOn, i18n, onChange]);

  return (
    <button
      className={`toggle-button ${isOn ? 'on' : 'off'}`}
      onClick={handleClick}
    >
      <span className="slider"></span>
    </button>
  );
};

export default ToggleButton;
