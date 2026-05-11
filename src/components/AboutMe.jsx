import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className="section" id="aboutMe">
            <h2 className="titulo">{t('section.about')}</h2>
            <p className="description" dangerouslySetInnerHTML={{ __html: t('about.text') }} />
        </div>
    );
};

export default AboutMe;