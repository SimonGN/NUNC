import React from "react";

import { PriceStyle } from "./PriceStyle";

import Fonth2 from "../../styles/pagesStyles/Fonth2";
import Fontp from "../../styles/pagesStyles/Fontp";
import PriceBox from "./PriceBox";
import Boton from "../Botones/Boton";

const Price = props => {
    return ( 
        <PriceStyle>
            <Fonth2>Precios</Fonth2>
            <PriceBox/>
            <div>
                <Fontp>Para más información o consulta contacta con nosotros</Fontp>
                <Boton/>
            </div>
        </PriceStyle>
    ); 
  };
  
  export default Price;