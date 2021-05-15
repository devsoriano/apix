import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './styles.scss';

export const About = () => {
  const { t } = useTranslation();

  const T_ROOT = 'about';

  return (
    <section className="About">
      <h1>
        <Trans i18nKey={t(`${T_ROOT}.title`)} components={{ Span: <span /> }} />
      </h1>
      <div className="About--Description">
        <Trans
          i18nKey={t(`${T_ROOT}.description`)}
          components={{ Divisor: <div /> }}
        />
      </div>
    </section>
  );
};
