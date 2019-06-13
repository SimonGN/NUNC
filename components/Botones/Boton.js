import React from "react";
import { BotonStyle } from "./BotonStyle";

import Fontp from "../../styles/pagesStyles/Fontp";


const Boton = props => {
    return (
        
        <BotonStyle>
            <div >
                <a className="Boton" href="mailto:ines.guerra@tailor-hub.com?Subject=⏰%20NU:NC%20información%20⏰">Contactar</a>
            </div>
        </BotonStyle>

    ); 
  };
  
  export default Boton;