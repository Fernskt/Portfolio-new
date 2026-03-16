import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/toggle.css';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(true);
  const { i18n } = useTranslation();

  const handleClick = () => {
    const next = !isOn;
    setIsOn(next);
    i18n.changeLanguage(next ? 'en' : 'es');
  };

  return (
    <button
      className={`toggle-button ${isOn ? 'on' : 'off'}`}
      onClick={handleClick}
      aria-label={isOn ? 'Switch to Spanish' : 'Switch to English'}
    >
      <span className="slider" />
    </button>
  );
};

export default ToggleButton;
