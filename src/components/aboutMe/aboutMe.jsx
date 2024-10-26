import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

import banner from '../../assets/software.png'
import './aboutme.css'

function AboutMe() {
  // Define o observer para o texto e imagem
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  // Animação para o texto
  const textAnimation = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 500 },
  })

  // Animação para a imagem
  const imageAnimation = useSpring({
    opacity: imageInView ? 1 : 0,
    transform: imageInView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 500 },
  })

  return (
    <div className="AboutMe">
      <section id="quemsomos" className="content">
      
        <animated.div style={textAnimation} className="left-text" ref={textRef}>
          <p>"A primeira regra de qualquer tecnologia utilizada nos negócios é que a automação aplicada a uma operação eficiente aumentará a eficiência"</p>
          <p>Bill Gates</p>
        </animated.div>

     
        <animated.div style={imageAnimation} className="center-image" ref={imageRef}>
          <img src={banner} alt="Descrição da imagem" />
        </animated.div>

       
        <animated.div style={textAnimation} className="right-text" ref={textRef}>
          <p>Nos vemos o mundo através de lentes diferentes, 
            aquelas da lógica, da eficiência e da precisão. Nos obriga a pensar de maneira estruturada, a
            decompor problemas grandes em partes menores e mais manejáveis.</p>
        </animated.div>
      </section>
    </div>
  )
}

export default AboutMe
