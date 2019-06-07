import React from "react";
import { InfoStyle } from "./InfoStyle";


import Fonth2 from "../../styles/pagesStyles/Fonth2";
import Fontp from "../../styles/pagesStyles/Fontp";
import Boton from "../Botones/Boton";

const Info = props => {
    return (
        
        <InfoStyle>
            <div className="intro">
                <div className="text">
                    <Fonth2>Tu empresa tiene que cumplir con la Ley 8/2019 ¿no quieres que ello implique supervisar los horarios de tus empleados? </Fonth2>
                    <Fontp>NUNC está aquí para ayudarte. Tus empleados ficharán sus horas de trabajo sin que esto suponga una tarea extra en la jornada laboral.</Fontp>
                    <Boton/>
                </div>
                <div className="iphone">
                    <img className="movil"src="../../static/img/movilNunc.png"></img>
                </div>
            </div>

        </InfoStyle>

    ); 
  };
  
  export default Info;