import React from 'react';
import './styles.scss';

export const WhatDoWeDo = () => {
  return (
    <section className="WhatDoWeDo">
      <h1>¿Qué hacemos?</h1>
      <div className="container-fluid container-fluid-max">
        <div className="row text-center py-5">
          <div className="col-12 col-sm-6 col-lg-6 WhatDoWeDo__item">
            <span>1. Levantamiento de Requerimiento</span>
            <h3 className="mt-3 h4">
              Adecuar y rediseñar aplicaciones que pueden explotar las bondades
              de la nube pública
            </h3>
          </div>
          <div className="col-12 col-sm-6 col-lg-6 WhatDoWeDo__item">
            <span>2. Migración de datos</span>
            <h3 className="mt-3 h4">
              Garantizamos el mejor esquema para optimizar tus actuales motores
              de bases de datos para que ahorres más
            </h3>
          </div>
        </div>
        <div className="row text-center py-5">
          <div className="col-12 col-sm-6 col-lg-6 WhatDoWeDo__item">
            <span>3. Migracion de aplicaciones</span>
            <h3 className="mt-3 h4">
              Cloud Native, no es donde se ejecuta, si no como es diseñada la
              aplicación, te indicamos el major esquema, lifth and shift, cloud
              ready o reescribe a cloud native
            </h3>
          </div>
          <div className="col-12 col-sm-6 col-lg-6 WhatDoWeDo__item">
            <span>4. Cómputo elastic y automatización de servicios</span>
            <h3 className="mt-3 h4">
              Automatizamos la escalabilidad que tiene tu negocio con cómputo a
              demanda, el uso de contenedores y serverless te ayudarán a tener
              altos ingresos.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
