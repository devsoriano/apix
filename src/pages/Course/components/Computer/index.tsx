import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { RiComputerLine } from 'react-icons/ri';
import './styles.scss';

export const Computer = ({ requirementsComputer }: any) => {
  const { t } = useTranslation();

  return (
    <section className="ListComputer">
      <RiComputerLine size={60} color="#325288" />
      <h1>Equipo de cómputo</h1>
      <div className="listItemsComputer">
        <ul>
          <Trans
            i18nKey={t(`${requirementsComputer}`)}
            components={{ item: <li /> }}
          />
        </ul>
      </div>
    </section>
  );
};
