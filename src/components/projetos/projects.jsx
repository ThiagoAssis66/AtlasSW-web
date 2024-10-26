import React from "react"
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

import './projects.css';
import imgproject from '../../assets/B11.png';

const Projects = () => {
    // Define o observer para verificar se o componente está visível
    const { ref, inView } = useInView({
        triggerOnce: true, // Garante que a animação aconteça apenas uma vez
        threshold: 0.3, // 30% do componente precisa estar visível para acionar a animação
    });

    // Animação de opacidade e deslizamento
    const projectAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)', // Desliza para cima
        config: { duration: 500 }, // Duração da animação
    });

    return (
        <animated.div style={projectAnimation} className="project-container" ref={ref}>
            <div id="conceitos" className="container-pro">
                <div className="container-text">
                    <h1>Design Inovador</h1>
                    <p>Nossa equipe de designers talentosos criam uma interface intuitiva e cativante para garantir a melhor experiencia para seus usuarios.</p>

                    <h1>Planejamento</h1>
                    <p>Entendemos suas necessidades e objetivos para criar uma soluçao de software personalizada e alinhada com sua estrategia empresarial.</p>

                    <h1>Desenvolvimento Avançado</h1>
                    <p>Combinamos a expertise tecnica com as melhores praticas de 7 desenvolvimento para criar um software confiavel e eficiente para sua empresa.</p>
                </div>    
                <div className="container-img">       
            <img src={imgproject} alt="Projeto da Empresa" className="project-image" />
            </div>
            </div>
        </animated.div>
    );
};

export default Projects;
