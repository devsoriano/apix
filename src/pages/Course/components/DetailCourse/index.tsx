import React from 'react';
import { BiSpreadsheet } from 'react-icons/bi';
import './styles.scss';

export const DetailCourse = ({
  startDate,
  weekday,
  startTime,
  endDate,
  endTime,
  hoursPerDay,
  totalHours,
  price,
}: any) => {
  return (
    <section className="Info">
      <BiSpreadsheet color="#325288" size="82" />
      <h1>Próximo inicio {startDate}</h1>
      <div className="InfoItems">
        <ul>
          <li>
            El curso se realizará los días <b>{weekday}</b> comenzando el día{' '}
            <b>{startDate}</b> y terminando el día <b>{endDate}</b> con un
            horario de{' '}
            <b>
              {startTime} a {endTime}
            </b>
            , siendo <b>{hoursPerDay} horas por día</b> y{' '}
            <b> un total de {totalHours} de training</b>.
          </li>
          <li>
            La inversión por este curso es de <b>{price}</b> IVA incluido
          </li>
          <li>
            Reserva tu lugar con el 50% del costo total del curso. el resto
            hasta en 5 pagos durante el training.
          </li>
          <li>
            Puedes pagar por <b>Transferencia Bancaria.</b> o <b>efectivo</b>
          </li>
          <li>
            Nos reservamos el derecho de cancelar el curso si no se logra el
            mínimo de 6 inscritos al 14 de mayo para la generación del domingo
          </li>
        </ul>
      </div>
    </section>
  );
};
