import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="section contact-section" id="contacto">
      <span className="availability-badge">
        <span className="availability-dot" />
        {t('contact.availability')}
      </span>
      <h2 className="titulo contact-title">{t('contact.title')}</h2>
      <p className="contact-subtitle">{t('contact.subtitle')}</p>
      <div className="contact-ctas">
        <a
          href="https://www.linkedin.com/in/hasperue/"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Fernskt"
          className="btn2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
