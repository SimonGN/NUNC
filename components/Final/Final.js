import React from "react";
import { FinalStyle } from "./FinalStyle";


import Fontp from "../../styles/pagesStyles/Fontp";



const Intro = props => {
    return (
        
        <FinalStyle>
            <div className="final">
                <div className="text">
                    <Fontp className="parraf">Cumplir con el marcaje horario en tu empresa de la forma más sencilla es posible, y lo harás de la mano de los profesionales de NUNC. Consigue que tu y tus empleados estéis centrados en vuestra actividad. </Fontp>

                    <Fontp>Hacer el marcaje simple, rápido y sencillo es nuestra tarea.</Fontp>
                </div>
                <div className="logo">
                    <img className="animation"src={`${process.env.ASSET_PREFIX}/static/img/animationNunc.gif`}></img>
                </div>
            </div>
        </FinalStyle>

    ); 
  };
  
  export default Intro;