import React from "react"
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import Slider from "react-slick"


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './skills.css'
import skills1 from '../../assets/skillsv1.jpg'

const Skills = () => {
    // Define o observer para verificar se o componente está visível
    const { ref, inView } = useInView({
        triggerOnce: true, // Garante que a animação aconteça apenas uma vez
        threshold: 0.3, // 30% do componente precisa estar visível para acionar a animação
    });

    // Animação de opacidade e deslizamento
    const skillsAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)', // Desliza para cima
        config: { duration: 500 }, // Duração da animação
    })

    // Configurações do slider
    const settings = {
        dots: false, // Remove os pontos de navegação
        infinite: true, // Faz o carrossel rolar sempre
        speed: 20000, // velocidade
        slidesToShow: 1, // Mostra apenas uma imagem por cada vez
        slidesToScroll: 1, // Move uma imagem por vez
        autoplay: true, // Ativa o movimento automático
        autoplaySpeed: 0, // Remove pausas entre as animações
        cssEase: "linear", // Movimento contínuo
        arrows: false // tira as setas 
    }
  
    return (
        <animated.div style={skillsAnimation} className="skills-container" ref={ref}>
            
            <h1 id="tecnologias"  className="skills-title">Nossas principais tecnologias</h1>        
            <p className="skills-text">
                Somos uma empresa especializada em diversas linguagens de programação, como JavaScript, SQL, NodeJs.
                Temos experiência no desenvolvimento de aplicações WEB e MOBILE utilizando frameworks como React, React Native e Node.js.
            </p>         
            <Slider {...settings}>
                <div className="skills-image-container">
                    <img src={skills1} alt="Imagem 1" className="skills-image" />
                </div>
             
                <div className="skills-image-container">
                    <img src={skills1} alt="Imagem 1" className="skills-image" />
                </div>
            </Slider>
            
        </animated.div>
    )
}

export default Skills
