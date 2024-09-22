
import React from 'react'
import cert1 from '../assets/img/certificates/cert1.jpg';
import cert2 from '../assets/img/certificates/cert2.jpg';
import cert3 from '../assets/img/certificates/cert3.jpg';
import cert4 from '../assets/img/certificates/cert4.jpg';
import cert5 from '../assets/img/certificates/cert5.jpg';
import cert6 from '../assets/img/certificates/cert6.jpg';


export default function Certifications() {

    const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert1, cert2, cert3, cert4, cert5, cert6];


  return (
    <div className="section">
        <h2 className='titulo'>Certifications</h2>
  
    <div className="carousel-container">
        
  <div className="carousel">
  {certificates.map((cert, index) => (
        <img key={index} src={cert} alt={`Certificado ${index + 1}`} />
       
      ))}
     
  </div>
  </div>
</div>

  )
}
