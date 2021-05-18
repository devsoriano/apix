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
import { DetailCourse } from './components/DetailCourse';
import { ApiGee } from './components/Views/01ApiGee';
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

  const ID = filterDetail[0].id;

  return (
    <div className="DetailCourse">
      <Banner {...{ nameCourse }} />
      <Statistics {...{ totalHours, practices, projects }} />
      <section className="DetailCourse--Details">
        <Trans
          i18nKey={t(`${litleDescription}`)}
          components={{ Divisor: <p />, Title: <h2 /> }}
        />
        {ID === 1 ? (
          <Link to={`/temary`} className="linkTemary">
            Temario detallado
          </Link>
        ) : (
          ''
        )}
      </section>
      <Coach
        {...{ photo, coach, profil, workposition, workplace, description }}
      />
      <YouWillLearn {...{ youllLearn }} />
      {ID === 1 ? <ApiGee /> : ''}
      <Requirements {...{ requirements }} />
      <Computer {...{ requirementsComputer }} />
      <DetailCourse
        {...{
          startDate,
          weekday,
          startTime,
          endDate,
          endTime,
          hoursPerDay,
          totalHours,
          price,
        }}
      />
      <Contact />
    </div>
  );
};
