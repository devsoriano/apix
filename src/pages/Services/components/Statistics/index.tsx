import React from 'react';
import './styles.scss';

export const Statistics = () => {
  return (
    <section className="Statistics">
      <div className="container-fluid container-fluid-max">
        <div className="row text-center py-5">
          <div className="col-12 col-sm-6 col-lg-4 Statistics__item">
            <span>+ 5 años</span>
            <h3 className="mt-3 text-red h4">
              en administración y operación de Tecnologías de Información
            </h3>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 Statistics__item">
            <span>+7 años</span>
            <h3 className="mt-3 text-red h4">
              en administración y operación de Tecnologías de Información
            </h3>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 Statistics__item">
            <span>+7 años</span>
            <h3 className="mt-3 text-red h4">
              de experiencia en corporativos trasnacionales
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
