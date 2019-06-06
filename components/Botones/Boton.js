import React from "react";
import { BotonStyle } from "./BotonStyle";

import Fontp from "../../styles/pagesStyles/Fontp";


const Boton = props => {
    return (
        
        <BotonStyle>
            <div className="Boton">
                <Fontp>NUNC está aquí para ayudarte. Tus empleados ficharán sus horas de trabajo sin que esto suponga una tarea extra en la jornada laboral.</Fontp>
            </div>
        </BotonStyle>

    ); 
  };
  
  export default Boton;