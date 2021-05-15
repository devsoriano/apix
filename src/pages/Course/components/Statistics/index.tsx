import React from 'react';
import './styles.scss';

export const Statistics = ({ totalHours, practices, projects }: any) => {
  return (
    <section className="StatisticsCourse">
      <div className="container-fluid container-fluid-max">
        <div className="row text-center py-5">
          <div className="col-12 col-sm-6 col-lg-4 StatisticsCourse__item">
            <span>{totalHours}</span>
            <h3 className="mt-3 text-red h4">Horas de curso</h3>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 StatisticsCourse__item">
            <span>+ {practices}</span>
            <h3 className="mt-3 text-red h4">Prácticas</h3>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 StatisticsCourse__item">
            <span>+ {projects}</span>
            <h3 className="mt-3 text-red h4">Proyectos</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
