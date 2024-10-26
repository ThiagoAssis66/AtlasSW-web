import React from "react"
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

import './mission.css';
import missionImage from '../../assets/logo.a.png';

const Mission = () => {
  // Define o observer para verificar se o componente está visível
  const { ref, inView } = useInView({
    triggerOnce: true, // Garante que a animação aconteça apenas uma vez
    threshold: 0.3, 
  })

  // Animação de opacidade e deslizamento aplicadas
  const missionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 500 },
  })

  return (
    // Aplica a animação
    <animated.div style={missionAnimation} className="Mission" ref={ref}>
      <section id="Mission">
        <img src={missionImage} alt="Missão da Empresa" className="mission-image" />
        <h2>
          Conte com a Atlas Software work, uma Software House referência em desenvolvimento.
          Softwares desenvolvidos para pequenas, médias e grandes empresas.
        </h2>
      </section>
    </animated.div>
  )
}

export default Mission
