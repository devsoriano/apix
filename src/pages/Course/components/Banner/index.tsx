import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

export const Banner = ({ nameCourse }: any) => {
  const { t } = useTranslation();

  return (
    <section className="DetailCourse--banner">
      <div className="DetailCourse--Title">{t(`${nameCourse}`)}</div>
    </section>
  );
};
