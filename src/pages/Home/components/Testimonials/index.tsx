import React from 'react';
import './styles.scss';
import franklinImg from '../../../../assets/img/testimonials/franklin.jpeg';
import ricardoImg from '../../../../assets/img/testimonials/ricardo.jpeg';
import minervaImg from '../../../../assets/img/testimonials/minerva.jpeg';

export const Testimonials = () => {
  return (
    <section className="Testimonials">
      <div className="wrapper">
        <div
          className="carousel slide"
          id="mySlider"
          data-ride="carousel"
          data-interval="4000"
          data-pause="hover"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#mySlider"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#mySlider" data-slide-to="1"></li>
            <li data-target="#mySlider" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner text-white">
            <div className="carousel-item active">
              <div className="content">
                <div className="employee">
                  <img src={franklinImg} alt="" className="img-profile" />
                  <div className="h3 text-uppercase">Franklin</div>
                  <div className="h6 text-mute">Desarrollador Sr</div>
                </div>
                <div className="testimonial bg-white text-dark">
                  {' '}
                  <span className="fas fa-quote-left"></span>
                  <div className="text-justify">
                    Mis jefes directos me pidieron hacer Openbanking de la
                    empresa, no sabia realmente como poder hacerlo hasta qué
                    conocí a APIX & CLOUD - Services, ellos me capacitacion para
                    poder crear el API Factory o centro de excelencia para poder
                    crear las APIs de la empresa.
                  </div>{' '}
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                <div className="employee">
                  <img src={ricardoImg} alt="" className="img-profile" />
                  <div className="h3 text-uppercase">Ricardo Bautista</div>
                  <div className="h6 text-mute">Arquitecto de Software</div>
                </div>
                <div className="testimonial bg-white text-dark">
                  {' '}
                  <span className="fas fa-quote-left"></span>
                  <div className="text-justify">
                    Tome el curso de microservicios y fue lo que buscaba, ya he
                    tomado varios cursos pero siempre ha sido con gente que se
                    dedica al traning y no están como tal ejecutando en la
                    industria, eso hace un gran diferente muy significativa.
                  </div>{' '}
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                <div className="employee">
                  <img src={minervaImg} alt="" className="img-profile" />
                  <div className="h3 text-uppercase">Minershka Atam</div>
                  <div className="h6 text-mute">Backend Developer</div>
                </div>
                <div className="testimonial bg-white text-dark">
                  {' '}
                  <span className="fas fa-quote-left"></span>
                  <div className="text-justify">
                    Los perfiles de desarrollo cambian constantemente, tome el
                    curso de API Developer y me encanto la forma de ahora crear
                    y exponer los activos de una empresa con la mayor seguridad
                    y con API Proxies que ayudan a gobernar totalmente la
                    exposición de las APIs.
                  </div>{' '}
                  <span className="fas fa-quote-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
