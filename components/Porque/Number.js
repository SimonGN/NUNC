import React from "react";

import { NumberStyle } from "./NumberStyle";

import Fonth2 from "../../styles/pagesStyles/Fonth2";
import Fontp2 from "../../styles/pagesStyles/Fontp2";


const Number = props => {
    return (

        <NumberStyle>
            <div>
                <div className="number">01</div>
                <div>
                    <Fonth2 color="white">FÁCIL</Fonth2>
                    <Fontp2 color="white">para tus empleados</Fontp2>
                </div>
            </div>
            <div className="textNumber">
                <div className="number">02</div>
                <div>
                    <Fonth2 color="white">SENCILLO</Fonth2>
                    <Fontp2 color="white">para tu empresa</Fontp2>
                </div>
            </div>
            <div className="textNumber">
                <div className="number">03</div>
                <div>
                    <Fonth2 color="white">CONECTADO</Fonth2>
                    <Fontp2 color="white">a cualquier ERP</Fontp2>
                </div>
            </div>
            <div className="textNumber">
                <div className="number">04</div>
                <div>
                    <Fonth2 color="white">RESUELVE</Fonth2>
                    <Fontp2 color="white">Cumple con la ley 8/2019 sin afectar el ritmo de tu empresa</Fontp2>
                </div>
            </div>

        </NumberStyle>

    );
};

export default Number;