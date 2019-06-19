import React from "react";
import { BotonLlamarStyle } from "./BotonLlamarStyle";
import IconLLamar from "../../static/svg/phone-call.svg";


const BotonLlamar = props => {
    return (
        <BotonLlamarStyle>
            <a className="Llamar" href="tel:+34644564713"><img className="llamarIcon" src={`${process.env.ASSET_PREFIX}/static/svg/phone-call.svg`}></img></a>
            <div>
            </div>
        </BotonLlamarStyle>
    ); 
  };
  
  export default BotonLlamar;