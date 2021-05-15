import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { IList } from './interface';
import './styles.scss';
import reactImg from '../../../../assets/img/courses/mini/react.png';
import apigeeImg from '../../../../assets/img/courses/mini/apigee.jpg';

export const CoursesSection = ({ listCourses }: IList) => {
  const { t } = useTranslation();
  const T_ROOT = 'courses';

  listCourses = [
    {
      id: 1,
      title: 'Arquitecto de APIs con Apigee y Microservicios Cloud Native',
      description:
        'Aprende a diseñar y desarrollar Web APIs con los estándares OPENAPI Spec 2.0 y 3.0, usaremos estrategias como API First y Contract First',
      miniLogo: apigeeImg,
    },
    {
      id: 2,
      title: 'React básico para desarrolladores frontend',
      description:
        'Aprenderás las bases para ser un Frontend React Profesional, conocerás el camino desde cero hasta el contexto general para crear aplicaciones y soluciones con ésta tecnología',
      miniLogo: reactImg,
    },
    {
      id: 3,
      title: 'Bootcamp APIgee Developer',
      description:
        'Es un entrenamiento práctico para que aprendas a diseñar y desarrollar APIs bajo estrategias como Contract First y API First Development donde conocerás la importancia de la APIficación de los activos de las empresas.',
      miniLogo: apigeeImg,
    },
  ];

  return (
    <section className="Courses" id="training">
      <h1>{t(`${T_ROOT}.title`)}</h1>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {listCourses.map((course) => (
          <div className="col" key={course.id}>
            <div className="card h-100">
              <img src={course.miniLogo} className="card-img-top" alt="" />
              <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p className="card-text">{course.description}</p>
              </div>
              <div className="card-footer">
                <Link to={`course/${course.id}`} className="btn btn-primary">
                  más detalles del curso...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
