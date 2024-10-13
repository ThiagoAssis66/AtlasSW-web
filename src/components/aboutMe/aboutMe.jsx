import React from 'react';



import banner from '../../assets/software.png'
import './aboutme.css';



function AboutMe() {
  return (
    <div className="AboutMe">
      <section id="aboutme" className="content">
        <div className="left-text">
        <p>"A primeira regra de qualquer tecnologia utilizada nos negócios é que a automação aplicada a uma operação eficiente aumentará a eficiência" </p> 
        <p>Bill Gates</p>
        </div>
        <div className="center-image">
          <img src={banner} alt="Descrição da imagem" />
        </div>
        <div className="right-text">
         <p>Nos vemos o mundo através de lentes diferentes, 
            aquelas da lógica, da eficiência e da precisão. Nos obriga a pensar de maneira estruturada, a
            decompor problemas grandes em partes menores e mais manejáveis.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
