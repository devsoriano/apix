import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './styles.scss';

export const Banner = () => {
  const { t } = useTranslation();
  const T_ROOT = 'services';

  return (
    <section className="Services--banner">
      <div className="Services--Title">
        {t(`${T_ROOT}.title`)}
        <div className="Services--Subtitle">
          <Trans
            i18nKey={t(`${T_ROOT}.subtitle`)}
            components={{ italic: <i /> }}
          />
        </div>
      </div>
    </section>
  );
};
