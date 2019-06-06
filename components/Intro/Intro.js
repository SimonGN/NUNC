import React from "react";
import { IntroStyle } from "./IntroStyle";

import logoNunc from "../../static/svg/Logo.svg";
import FontpHome from "../../pagesStyles/fontStyle/pHome";

const Intro = props => {
    return (
        
        <IntroStyle>
            <div className="homeBack">
                <img className="logoNUNC" src={logoNunc}></img>
                <FontpHome color="white">Creating meaningful products</FontpHome>
            </div>
        </IntroStyle>

    ); 
  };
  
  export default Intro;