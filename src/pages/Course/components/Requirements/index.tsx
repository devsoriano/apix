import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import './styles.scss';

export const Requirements = ({ requirements }: any) => {
  const { t } = useTranslation();

  return (
    <section className="ListRequirements">
      <BsPerson size={60} color="#fff" />
      <h1>Requisitos</h1>
      <div className="listItemsRequirements">
        <ul>
          <Trans i18nKey={t(`${requirements}`)} components={{ item: <li /> }} />
        </ul>
      </div>
    </section>
  );
};
