import React from 'react';
import './styles.scss';

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>APIX&CLOUD</h3>
              <p>
                Tu futuro profesional o de tu compañia lo puedes construir con
                nosotros.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contactanos</h4>
              <p>
                Avenida castillo de chapultepec, <br />
                Cuernavaca Morelos.
                <br />
                México <br />
                <strong>Telefono:</strong> +55 80975755
                <br />
                <strong>Email:</strong> contacto@apixcloudservice.com
                <br />
              </p>

              <div className="social-lin|s">
                <a href="#" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>Hecho con Amor en México</strong>. Todos los
          derechos reservados
        </div>
        <div className="credits">
          Diseñada por{' '}
          <a href="index.html" className="link">
            APIX & CLOUD - MX
          </a>
        </div>
      </div>
    </footer>
  );
};
