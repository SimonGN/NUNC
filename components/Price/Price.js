import React from "react";
import { PriceStyle } from "./PriceStyle";

import {PriceBox} from "./PriceBox"
import {Boton} from "../../components/Botones/Boton"


import Fonth2 from "../../styles/pagesStyles/Fonth2";
import FontP from "../../styles/pagesStyles/Fontp";

const Price = props => {
    return (
        <PriceStyle>
            <Fonth2>Precios</Fonth2>
            <PriceBox/>
            <div>
             <FontP>Para más información o consulta contacta con nosotros</FontP>
             <Boton/>
            </div>
        </PriceStyle>
    )
}

export default Price;
