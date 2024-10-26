import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Slider from 'react-slick'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-scroll'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import logo from '../../assets/AtlasV1.png'
import banner1 from '../../assets/SLIDE1.jpg'
import banner2 from '../../assets/SLIDE2.jpg'
import banner3 from '../../assets/SLIDE3.jpg'
import './header.css';

const Header = () => {
  const [active, setActive] = useState('home'); // Estado para rastrear o item ativo

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const socialBarAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 200,
  });

  const headerAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 400,
  });

  const sliderAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 600,
  });

  return (
    <div>
      <animated.div style={socialBarAnimation} className="social-bar">
        <a href="https://www.instagram.com/atlassw.io/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
      </animated.div>

      <animated.header style={headerAnimation} className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
              <a href="/" onClick={() => setActive('home')}>Home</a>
            </li>
            <li className={`nav-item ${active === 'quemsomos' ? 'active' : ''}`}>
              <Link
                to="quemsomos"
                smooth={true}
                duration={500}
                onClick={() => setActive('quemsomos')}
              >
                Quem Somos
              </Link>
            </li>
            <li className={`nav-item ${active === 'missao' ? 'active' : ''}`}>
              <Link
                to="Mission"
                smooth={true}
                duration={500}
                onClick={() => setActive('missao')}
              >
                Missão
              </Link>
            </li>
            <li className="nav-item logo-item">
              <img src={logo} alt="Logo" style={{ width: '350px', height: 'auto' }} className="logo" />
            </li>
            <li className={`nav-item ${active === 'tecnologias' ? 'active' : ''}`}>
              <Link
                to="tecnologias"
                smooth={true}
                duration={500}
                onClick={() => setActive('tecnologias')}
              >
                Tecnologias
              </Link>
            </li>
            <li className={`nav-item ${active === 'conceitos' ? 'active' : ''}`}>
              <Link
                to="conceitos"
                smooth={true}
                duration={500}
                onClick={() => setActive('conceitos')}
              >
                Conceitos
              </Link>
            </li>
            <li className={`nav-item ${active === 'contato' ? 'active' : ''}`}>
              <Link
                to="contato"
                smooth={true}
                duration={500}
                onClick={() => setActive('contato')}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </animated.header>

      <animated.div style={sliderAnimation} className="slider-container">
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
      </animated.div>
    </div>
  );
};

export default Header;
