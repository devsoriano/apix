import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { IList } from './interface';
import './styles.scss';
import resorceListDetailCourses from '../../data/listDetailCourses';
import { Banner } from './components/Banner';
import { Statistics } from './components/Statistics';
import { Coach } from './components/Coach';
import { YouWillLearn } from './components/YouWillLearn';
import { Requirements } from './components/Requirements';
import { Computer } from './components/Computer';
import { Contact } from '../Home/components/Contact';
import { Temary } from './components/Temary';
import { BiSpreadsheet } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Course = (props: any, { listDetailCourses }: IList) => {
  window.scrollTo(0, 0);
  const { t } = useTranslation();
  const { id } = props.match.params;
  listDetailCourses = resorceListDetailCourses;
  const filterDetail = listDetailCourses.filter(
    (detail) => detail.id === parseInt(id),
  );

  const {
    detail: {
      coach: { coach, profil, workplace, workposition, photo, description },
      course: {
        nameCourse,
        litleDescription,
        startDate,
        endDate,
        startTime,
        endTime,
        weekday,
        hoursPerDay,
        totalHours,
        practices,
        projects,
        youllLearn,
        requirements,
        requirementsComputer,
        price,
      },
    },
  } = filterDetail[0];

  return (
    <div className="DetailCourse">
      <Banner {...{ nameCourse }} />
      <Statistics {...{ totalHours, practices, projects }} />
      <section className="DetailCourse--Details">
        <Trans
          i18nKey={t(`${litleDescription}`)}
          components={{ Divisor: <p />, Title: <h2 /> }}
        />
        <Link to={`/temary`} className="linkTemary">
          Temario detallado
        </Link>
      </section>
      <Coach
        {...{ photo, coach, profil, workposition, workplace, description }}
      />
      <YouWillLearn {...{ youllLearn }} />
      <Requirements {...{ requirements }} />
      <Computer {...{ requirementsComputer }} />
      <section className="DetailCourse--Info">
        <BiSpreadsheet color="#325288" size="82" />
        <h1>Próximo inicio {startDate}</h1>
        <div className="InfoItems">
          <ul>
            <li>
              El curso se realizará los días <b>{weekday}</b> comenzando el día{' '}
              <b>{startDate}</b> y terminando el día <b>{endDate}</b> con un
              horario de{' '}
              <b>
                {startTime} a {endTime}
              </b>
              , siendo <b>{hoursPerDay} horas por día</b> y{' '}
              <b> un total de {totalHours} de training</b>.
            </li>
            <li>
              La inversión por este curso es de <b>{price}</b> IVA incluido
            </li>
            <li>
              Reserva tu lugar con el 50% del costo total del curso. el resto
              hasta en 5 pagos durante el training.
            </li>
            <li>
              Puedes pagar por <b>Transferencia Bancaria.</b> o <b>efectivo</b>
            </li>
            <li>
              Nos reservamos el derecho de cancelar el curso si no se logra el
              mínimo de 6 inscritos al 14 de mayo para la generación del domingo
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  );
};
