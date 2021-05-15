import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import afiliacare from '../../../../assets/img/companies/afiliacare.png';
import viveplus from '../../../../assets/img/companies/viveplus.png';
import './styles.scss';

export const Companies = () => {
  const { t } = useTranslation();
  const T_ROOT = 'companies';

  return (
    <section className="Companies">
      <h1>
        <Trans i18nKey={t(`${T_ROOT}.title`)} components={{ Span: <span /> }} />
      </h1>
      <div className="container">
        <div className="row">
          <div className="col center-items">
            <img src={viveplus} alt="" />
          </div>
          <div className="col center-items">
            <img src={afiliacare} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
