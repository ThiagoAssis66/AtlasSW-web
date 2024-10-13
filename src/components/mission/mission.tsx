import React from "react";

import './mission.css';
import missionImage from '../../assets/logo.a.png' 



const Mission = () => {
    return (
        <div className="Mission">
            <section id="Mission">
            <img src={missionImage} alt="Missão da Empresa" className="mission-image" /> {/* Imagem importada */}
                <h2>
                    Conte com a Atlas Software work, uma Software House referência em desenvolvimento.
                    Softwares desenvolvidos para pequenas, médias e grandes empresas.
                </h2>
                
            </section>
        </div>
    );
};

export default Mission;
