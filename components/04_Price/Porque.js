import React from "react";

import { PorqueStyle } from "./PorqueStyle";

import Fonth1 from "../../styles/pagesStyles/Fonth1";

import Number from "./Number";


const Porque = props => {
    return (
        
        <PorqueStyle>
            <div className="porque">
                <div className="title">
                    <Fonth1 color="white" textAlign="center">¿POR QUÉ NU:NC? </Fonth1>
                </div>
                <div className="numbers">
                    <Number/>
                </div>
            </div>


        </PorqueStyle>

    ); 
  };
  
  export default Porque;