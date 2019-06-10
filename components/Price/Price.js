import React from "react";

import { PriceStyle } from "./PriceStyle";

import Fonth1 from "../../styles/pagesStyles/Fonth1";
import Fontp from "../../styles/pagesStyles/Fontp";
import PriceBox from "./PriceBox";
import Boton from "../Botones/Boton";

const Price = props => {
    return ( 
        <PriceStyle>
            <div className="price">
                <div className="title">
                    <Fonth1 color="white">Precios</Fonth1>
                </div>
                <PriceBox/>
                <div className="contact">
                    <div className="contacText">     
                       <Fontp color="white">Para más información o consulta contacta con nosotros.</Fontp>
                    </div>
                    <Boton/>
                </div>
            </div>
           
        </PriceStyle>
    ); 
  };
  
  export default Price;