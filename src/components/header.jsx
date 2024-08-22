import React from 'react';

import logo from '../assets/logo.atl.png';
import '../style/header.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#projetos">Quem Somos</a></li>
            <li className="nav-item"><a href="#contato">Missao</a></li>
            <li className="nav-item logo-item">
              <img src={logo} alt="Logo" style={{ width: '350px', height: 'auto', /*boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)'*/  }} className="logo" />
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
    <h1>Título Principal</h1>
    <h2>Subtítulo</h2>
  </div>
</div>
     
    </div>
  );
};

export default Header;
