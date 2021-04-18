import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './styles.scss';

export const PrincipalBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="App__ContainerBanner">
      <div className="App__ContainerBanner--Message">
        <Trans i18nKey={t('title')} components={{ italic: <i /> }} />
      </div>
    </div>
  );
};
