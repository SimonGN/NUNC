import React from "react";

import { PriceBoxStyle } from "./PriceBoxStyle";
import { NumberBoxStyle }from "./NumberBoxStyle";

import Fonth2 from "../../styles/pagesStyles/Fonth2"
import Fontp from "../../styles/pagesStyles/Fontp"

const PriceBox = props => {
    return (
        
        <PriceBoxStyle>
            <div>
                <NumberBoxStyle>01</NumberBoxStyle>
                <div>
                    <Fonth2>MICRO</Fonth2>
                    <Fontp>de 1 a 20 trabajadores</Fontp>
                </div>
                <Fonth2>500€</Fonth2>
            </div>
            <div>
                <NumberBoxStyle>02</NumberBoxStyle>
                <div>
                    <Fonth2>PYME</Fonth2>
                    <Fontp>21 a 100 empleados</Fontp>
                </div>
                <Fonth2>2500€</Fonth2>
            </div>
            <div>
                <NumberBoxStyle>02</NumberBoxStyle>
                <div>
                    <Fonth2>MEDIUM</Fonth2>
                    <Fontp>101 a 500 empleados</Fontp>
                </div>
                <Fonth2>7500€</Fonth2>
            </div>
            <div>
                <NumberBoxStyle>04</NumberBoxStyle>
                <div>
                    <Fonth2>MULTI</Fonth2>
                    <Fontp>más de 1000 empleados</Fontp>
                </div>
                <a className="enlace" href="https://tailor-hub.com/">Contactar</a>
            </div>

        </PriceBoxStyle>
    )
}

export default PriceBox;
