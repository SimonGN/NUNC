import React from "react";
import { FooterStyle } from "./FooterStyle";


import Fontp from "../../styles/pagesStyles/Fontp";

import LogoTylor from "../../static/svg/LogoTylor.svg";
import GoogleWhite from "../../static/svg/IconGooleplayWhite.svg";
import AppleWHite from "../../static/svg/IconAppstoreWhite.svg";

const Footer = props => {
    return (
        
        <FooterStyle>
            <div className="footer">
                <div className="intro">
                    <Fontp color="white">Un producto de </Fontp>
                    <a title="logo" href="http://www.tailor-hub.com" target="_blank"><img className="logo" src={ LogoTylor } alt="logo NU:NC" /></a>       
                </div>
                <div className="store">
                    <img className="google"src={ GoogleWhite }></img>
                    <img className="apple"src={ AppleWHite }></img>
                </div>
            </div>
        </FooterStyle>

    ); 
  };
  
  export default Footer;