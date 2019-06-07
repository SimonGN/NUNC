import React from "react";
import { FooterStyle } from "./FooterStyle";


import Fontp from "../../styles/pagesStyles/Fontp";

import LogoTylor from "../../static/svg/LogoTylor.svg";
import GoogleWhite from "../../static/svg/IconGooleplayWhite.svg";
import AppleWHite from "../../static/svg/IconAppstoreWhite.svg";

const Footer = props => {
    return (
        
        <FooterStyle>
            <div className="">
                <Fontp>Un producto de </Fontp>
                <img src={ LogoTylor }></img>       
            </div>
            <div>
                <img src={ GoogleWhite }></img>
                <img src={ AppleWHite }></img>

            </div>

        </FooterStyle>

    ); 
  };
  
  export default Footer;