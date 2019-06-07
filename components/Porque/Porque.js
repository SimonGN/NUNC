import React from "react";

import { PorqueStyle } from "./PorqueStyle";
import { NumberStyle } from "./NumberStyle";

import Fonth2 from "../../styles/pagesStyles/Fonth2";
import Fontp from "../../styles/pagesStyles/Fontp";


const Porque = props => {
    return (
        
        <PorqueStyle>
            <div className="">
                <Fonth2>¿Por qué NUNC? </Fonth2>
            </div>
            <div>
                <div>
                    <NumberStyle>01</NumberStyle>
                    <div>
                        <Fonth2>FÁCIL</Fonth2>
                        <Fontp>para tus empleados</Fontp>
                    </div>
                </div>
                <div>
                    <NumberStyle>02</NumberStyle>
                    <div>
                        <Fonth2>SENCILLO</Fonth2>
                        <Fontp>para tu empresa</Fontp>
                    </div>
                </div>
                <div>
                    <NumberStyle>03</NumberStyle>
                    <div>
                        <Fonth2>CONECTADO</Fonth2>
                        <Fontp>a cualquier ERP</Fontp>
                    </div>
                </div>
                <div>
                    <NumberStyle>04</NumberStyle>
                    <div>
                        <Fonth2>RESUELVE</Fonth2>
                        <Fontp>Cumple con la ley 8/2019 sin afectar el ritmo de tu empresa</Fontp>
                    </div>
                </div>
            </div>


        </PorqueStyle>

    ); 
  };
  
  export default Porque;