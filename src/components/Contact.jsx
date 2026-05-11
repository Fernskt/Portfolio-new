import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const validate = (data, t) => {
  const errs = {};
  if (!data.name.trim())
    errs.name = t('contact.form.errors.nameRequired');
  else if (data.name.trim().length < 2)
    errs.name = t('contact.form.errors.nameMin');

  if (!data.email.trim())
    errs.email = t('contact.form.errors.emailRequired');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = t('contact.form.errors.emailInvalid');

  if (!data.message.trim())
    errs.message = t('contact.form.errors.messageRequired');
  else if (data.message.trim().length < 10)
    errs.message = t('contact.form.errors.messageMin');

  return errs;
};

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) {
      const errs = validate(updated, t);
      setErrors(prev => {
        const next = { ...prev };
        if (errs[name]) next[name] = errs[name];
        else delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const errs = validate(formData, t);
    setErrors(prev => {
      const next = { ...prev };
      if (errs[name]) next[name] = errs[name];
      else delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(formData, t);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      await emailjs.send(
        'service_e9ex5yb',
        'template_w92atjl',
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        'ZhUKSxGyo2R-me_j0'
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

const handleReset = () => {
  setFormData({ name: '', email: '', message: '' });
  setErrors({});
  setTouched({});
  setStatus('idle');
};

const isLoading = status === 'loading';

return (
  <div className="section contact-section" id="contacto">
    <div className="contact-grid">
      <div className="contact-info">
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

      {status === 'success' ? (
        <div className="contact-success">
          <div className="contact-success-icon">✓</div>
          <h3 className="contact-success-title">{t('contact.form.successTitle')}</h3>
          <p className="contact-success-text">{t('contact.form.successText')}</p>
          <button className="btn" onClick={handleReset}>
            {t('contact.form.sendAnother')}
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <input
              id="cf-name"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('contact.form.namePlaceholder')}
              className={errors.name && touched.name ? 'input-error' : ''}
              disabled={isLoading}
            />
            {errors.name && touched.name && (
              <span className="field-error">{errors.name}</span>
            )}
          </div>

          <div className="form-field">
            <input
              id="cf-email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('contact.form.emailPlaceholder')}
              className={errors.email && touched.email ? 'input-error' : ''}
              disabled={isLoading}
            />
            {errors.email && touched.email && (
              <span className="field-error">{errors.email}</span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="cf-message">
              <span>{''}</span>
              <span className="char-count">
                {formData.message.length}&nbsp;/&nbsp;500
              </span>
            </label>
            <textarea
              id="cf-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('contact.form.messagePlaceholder')}
              className={errors.message && touched.message ? 'input-error' : ''}
              rows={5}
              maxLength={500}
              disabled={isLoading}
            />
            {errors.message && touched.message && (
              <span className="field-error">{errors.message}</span>
            )}
          </div>

          <div className="contact-form-footer">
            <button
              type="submit"
              className="btn contact-submit"
              disabled={isLoading}
            >
              {isLoading && <span className="btn-spinner" />}
              {isLoading ? t('contact.form.sending') : t('contact.form.send')}
            </button>
            {status === 'error' && (
              <span className="form-error-banner">{t('contact.form.errorText')}</span>
            )}
          </div>
        </form>
      )}
    </div>
  </div>
);
}
