import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


import logo from '../../assets/logo.atl.png';
import './header.css'

const Header = () => {
  return (
    <div>

      <div className="social-bar">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>
      
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#projetos">Quem Somos</a></li>
            <li className="nav-item"><a href="#contato">Missão</a></li>
            <li className="nav-item logo-item">
              <img src={logo} alt="Logo" style={{ width: '350px', height: 'auto', /* boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' */  }} className="logo" />
            </li>
            <li className="nav-item"><a href="#quem-somos">Skills</a></li>
            <li className="nav-item"><a href="#skills">Projetos</a></li>
            <li className="nav-item"><a href="#skills">Contato</a></li>
          </ul>
        </nav>
      </header>
      <div className="full-screen-image">
        <img src="https://images7.alphacoders.com/133/1330715.png" alt="Descrição da imagem" />
        <div className="overlay-text">
          <h1 style={{ fontSize: 30 }}>DESENVOLVENDO</h1>
          <h2 style={{ fontSize: 70 }}>Idéias do Amanhã</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
