import React from "react";
import { BotonLlamarStyle } from "./BotonLlamarStyle";


const BotonLlamar = props => {
    return (
        <BotonLlamarStyle>
            <a className="Llamar" href="tel:+34644564713">Llamar</a>
        </BotonLlamarStyle>
    ); 
  };
  
  export default BotonLlamar;