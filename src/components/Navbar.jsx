// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'
import oscarinLogo from '../assets/images/logos/Oscarin_Logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={oscarinLogo} alt="Oscar Icon" />
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Mi Quiniela</Link></li>
        <li><Link to="/ranking">Ranking</Link></li>
        <li><Link to="/rules">Reglas</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link to="/compartir">
          <img src="share_icon.png" alt="Compartir" />
        </Link>
        <Link to="/login">
          <img src="twitter_icon.png" alt="Iniciar Sesión" />
          Iniciar Sesión
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
