import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/img/logos/apix-color.png';

export const Header = () => {
  return (
    <header className="fixed-top page-header">
      <div className="container-fluid container-fluid-max">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
          <Link to="/" className="Layout__Nav--Logo">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#training">
                  Training
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
