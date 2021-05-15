import React from 'react';
import './styles.scss';
import { DiGoogleCloudPlatform } from 'react-icons/di';

export const ListServices = () => {
  return (
    <section className="ListServices">
      <DiGoogleCloudPlatform size={124} color="#02475e" />
      <h1>Nuestros servicios</h1>
      <div className="container-fluid container-fluid-max list-services">
        <ul>
          <li>Diseño de arquitectura</li>
          <li>Implementación con nuestros expertos certificados</li>
          <li>
            Gestión de infraestructura por medio de practices de alto
            rendimiento
          </li>
          <li>
            Optimización con herramientas para mejorar facturas mes con mes
          </li>
          <li>
            Cloud Management, somos los responsables por el diseño,
            implementación, configuración, mantenimiento, seguridad de la
            plataforma y monitoreo de la solución bajo las mejores practices en
            la nube
          </li>
        </ul>
      </div>
    </section>
  );
};
