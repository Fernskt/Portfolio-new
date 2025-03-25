import React from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';


const AboutMe = () => {
    const {t, i18n} = useTranslation();
    
    return (
        <>
            <div className="section" id="experiencia">
                <h2 className="titulo" id='aboutMe'>About Me</h2>
                <p className="description">
                    <span dangerouslySetInnerHTML={{ __html: t('about-me') }}></span>
                </p>
            </div>
        </>
    );
};

export default AboutMe;