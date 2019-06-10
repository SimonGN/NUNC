import React from "react";

import { PriceBoxStyle } from "./PriceBoxStyle";
import { NumberBoxStyle }from "./NumberBoxStyle";

import Fonth2 from "../../styles/pagesStyles/Fonth2"
import Fontp2 from "../../styles/pagesStyles/Fontp2"

const PriceBox = props => {
    return (
        
        <PriceBoxStyle>
            <div className="priceBox">
                <div>
                    <div className="number">01</div>
                    <div>
                        <Fonth2>MICRO</Fonth2>
                        <Fontp2>1 a 20 empelados</Fontp2>
                    </div>
                    <Fonth2>500€</Fonth2>
                </div>
                <div className="textNumber">
                    <div className="number">02</div>
                    <div>
                        <Fonth2>PYME</Fonth2>
                        <Fontp2>21 a 100 empelados</Fontp2>
                    </div>
                    <Fonth2>2500€</Fonth2>
                </div>
                <div className="textNumber">
                    <div className="number">02</div>
                    <div>
                        <Fonth2>MEDIUM</Fonth2>
                        <Fontp2>101 a 500 empelados</Fontp2>
                    </div>
                    <Fonth2>7500€</Fonth2>
                </div>
                <div className="textNumber">
                    <div className="number">04</div>
                    <div>
                        <Fonth2>MULTI</Fonth2>
                        <Fontp2>más de 1000 empelados</Fontp2>
                    </div>
                    <a className="enlace" href="https://tailor-hub.com/">Contactar</a>
                </div>
            </div>

        </PriceBoxStyle>
    )
}

export default PriceBox;
