import React from "react";

import { PriceBoxStyle } from "./PriceBoxStyle";
import NumberBoxStyle from "./NumberBoxStyle";

import Fonth2 from "../../styles/pagesStyles/Fonth2"
import Fontp from "../../styles/pagesStyles/Fontp"

const PriceBox = props => {
    return (
        
        <PriceBoxStyle>
            <div>
                <NumberBoxStyle>01</NumberBoxStyle>
                <div>
                    <Fonth2>FÁCIL</Fonth2>
                    <Fontp>para tus empleados</Fontp>
                </div>
            </div>

        </PriceBoxStyle>
    )
}

export default PriceBox;
