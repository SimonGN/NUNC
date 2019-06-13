import React from "react";
import { LogoStyle } from "./LogoStyle";

import logoNunc from "../../static/svg/Logo.svg";

const Logo = props => {
    return (
        <LogoStyle>
            <img className="logoNUNC" src={logoNunc}></img>        
        </LogoStyle>
    )
}

export default Logo;
