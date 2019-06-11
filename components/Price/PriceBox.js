import React from "react";

import { PriceBoxStyle } from "./PriceBoxStyle";
import { NumberBoxStyle }from "./NumberBoxStyle";

import Fonth3 from "../../styles/pagesStyles/Fonth3"
import Fontp2 from "../../styles/pagesStyles/Fontp2"

const PriceBox = props => {
    return (
        
        <PriceBoxStyle>
            <div className="priceBox">
                <div>
                    <div className="number">01</div>
                    <div>
                        <Fonth3>MICRO</Fonth3>
                        <Fontp2>de 01 a 20 empelados</Fontp2>
                    </div>
                    <Fonth3>500€</Fonth3>
                </div>
                <div className="textNumber">
                    <div className="number">02</div>
                    <div>
                        <Fonth3>PYME</Fonth3>
                        <Fontp2>21 a 100 empelados</Fontp2>
                    </div>
                    <Fonth3>2500€</Fonth3>
                </div>
                <div className="textNumber">
                    <div className="number">02</div>
                    <div>
                        <Fonth3>MEDIUM</Fonth3>
                        <Fontp2>101 a 500 empelados</Fontp2>
                    </div>
                    <Fonth3>7500€</Fonth3>
                </div>
                <div className="textNumber">
                    <div className="number">04</div>
                    <div>
                        <Fonth3>MULTI</Fonth3>
                        <Fontp2>más de 1000 empelados</Fontp2>
                    </div>
                    <a className="enlace" href="https://tailor-hub.com/">Contactar</a>
                </div>
            </div>

        </PriceBoxStyle>
    )
}

export default PriceBox;
