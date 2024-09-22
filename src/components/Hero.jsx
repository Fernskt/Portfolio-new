import React from 'react'
import '../i18n';
import { useTranslation } from 'react-i18next';
import foto from '../assets/img/foto.jpg';
import Redes from './Redes';



export default function Hero() {
    const {t, i18n} = useTranslation();

  return (
    <div className='hero'>
     
    <div className='contenido-hero'>
        <div className="image">
            <img src={foto} alt="foto-perfil"/>
        </div>

      <h1 className='text' dangerouslySetInnerHTML={{ __html:t('welcome')}}/>
      <p className='description' dangerouslySetInnerHTML={{ __html: t('description') }}/>
      <Redes></Redes>
    </div>
    </div>
  )
}
