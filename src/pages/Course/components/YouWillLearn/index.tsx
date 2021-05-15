import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './styles.scss';
import { GiBrain } from 'react-icons/gi';

export const YouWillLearn = ({ youllLearn }: any) => {
  const { t } = useTranslation();

  return (
    <section className="ListToLearn">
      <GiBrain size={124} color="#009970" />
      <h1>En este training aprenderás a:</h1>
      <div className="listItemsToLearn">
        <ul>
          <Trans i18nKey={t(`${youllLearn}`)} components={{ item: <li /> }} />
        </ul>
      </div>
    </section>
  );
};
