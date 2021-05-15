import React from 'react';
import './styles.scss';

export const Statistics = () => {
  return (
    <section className="Statistics">
      <div className="container-fluid container-fluid-max">
        <div className="row text-center py-5">
          <div className="col-12 col-sm-6 col-lg-4 Statistics__item">
            <span>+ 1,400</span>
            <h3 className="mt-3 text-red h4">Alumnos capacitados</h3>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 Statistics__item">
            <span>3</span>
            <h3 className="mt-3 text-red h4">Empresas partners</h3>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 Statistics__item">
            <span>1</span>
            <h3 className="mt-3 text-red h4">País</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
