import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './styles.scss';
import { MdAttachMoney } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlineCloudServer } from 'react-icons/ai';

export const Objetives = () => {
  const { t } = useTranslation();

  const T_ROOT = 'objetives';

  return (
    <section className="Objetives">
      <h1>
        <Trans i18nKey={t(`${T_ROOT}.title`)} components={{ Span: <span /> }} />
      </h1>
      <div className="Objetives--Description">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <MdAttachMoney size={54} color="#3369e8" className="icon-custom" />
            <div>
              Reducir costos a través de la adopción de nuevas tecnologías de
              nube que les permitan reinvertir en proyectos innovadores.
            </div>
          </li>
          <li className="list-group-item">
            <BsGraphUp size={54} color="#3369e8" className="icon-custom" />
            <div>
              En proveer los elementos de infraestructura y las mejores
              prácticas de operación que habilitan las aplicaciones que
              automatizan los procesos críticos de negocio de nuestros clientes.
            </div>
          </li>
          <li className="list-group-item">
            <AiOutlineCloudServer
              size={54}
              color="#3369e8"
              className="icon-custom"
            />
            <div>
              Los apoyamos en el proceso de adopción y dominio del modelo de
              operación en la Nube.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
