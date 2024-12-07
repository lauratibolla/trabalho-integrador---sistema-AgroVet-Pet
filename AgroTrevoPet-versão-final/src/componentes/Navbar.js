import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOptions = [
    { text: 'Home', page: 'home' },
    { text: 'Cad.Animal', page: 'cadastroAnimal' }, // Corrigido para corresponder ao App.js
    { text: 'Cad.Tutor', page: 'cadastroTutor' },
    { text: 'Contrato', page: 'contrato' },
    { text: 'Registro', page: 'registro' },
    { text: 'Calendário', page: 'calendario' },
    { text: 'Financeiro', page: 'financeiro' },
    { text: 'Consulta', page: 'consulta' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className="nav-logo" />
      </div>

      <div className={`navbar-links-container ${isMenuOpen ? 'active' : ''}`}>
        {menuOptions.map((option, index) => (
          <button
            key={index}
            className="nav-link"
            onClick={() => onNavigate(option.page)} 
          >
            {option.text}
          </button>
        ))}
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
