import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

export const About = () => {
  const { t } = useTranslation();

  const T_ROOT = 'about';

  return (
    <section className="App__About">
      <h1>{t(`${T_ROOT}.title`)}</h1>
      <div>{t(`${T_ROOT}.description`)}</div>
    </section>
  );
};
