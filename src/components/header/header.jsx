import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo from '../../assets/AtlasV1.png';
import banner1 from '../../assets/SLIDE1.jpg';
import banner2 from '../../assets/SLIDE2.jpg';
import banner3 from '../../assets/SLIDE3.jpg';
import './header.css';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
              <img src={logo} alt="Logo" style={{ width: '350px', height: 'auto' }} className="logo" />
            </li>
            <li className="nav-item"><a href="#quem-somos">Skills</a></li>
            <li className="nav-item"><a href="#skills">Projetos</a></li>
            <li className="nav-item"><a href="#skills">Contato</a></li>
          </ul>
        </nav>
      </header>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={banner1} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={banner2} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={banner3} alt="Slide 3" className="slider-image" />
          </div>
        </Slider>
      
      </div>
    </div>
  );
};

export default Header;
