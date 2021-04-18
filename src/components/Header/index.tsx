import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/img/logos/apix-color.png';

export const Header = () => {
  return (
    <header className="Layout__Header">
      <nav className="Layout__Nav">
        <Link to="/" className="Layout__Nav--Logo">
          <img src={logo} alt="" />
        </Link>
        <div className="Layout__Nav--Item">
          <Link to="/courses">Capacitación</Link>
        </div>
      </nav>
    </header>
  );
};
