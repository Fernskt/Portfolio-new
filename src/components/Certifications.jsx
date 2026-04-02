import cert1 from '../assets/img/certificates/cert1.jpg';
import cert2 from '../assets/img/certificates/cert2.jpg';
import cert3 from '../assets/img/certificates/cert3.jpg';
import cert4 from '../assets/img/certificates/cert4.jpg';
import cert5 from '../assets/img/certificates/cert5.jpg';
import cert6 from '../assets/img/certificates/cert6.jpg';
import cert7 from '../assets/img/certificates/cert7.jpg';
import cert8 from '../assets/img/certificates/cert8.png';

const BASE_CERTS = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8];
// Duplicated for seamless infinite CSS carousel loop
const certificates = [...BASE_CERTS, ...BASE_CERTS];

export default function Certifications() {
  return (
    <div className="section">
      <h2 className='titulo'>Certifications</h2>
      <div className="carousel-container">
        <div className="carousel">
          {certificates.map((cert, index) => (
            <img key={index} src={cert} alt={`Certificate ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
