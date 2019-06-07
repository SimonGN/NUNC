import React from "react";

import { PorqueStyle } from "./PorqueStyle";

import Fonth2 from "../../styles/pagesStyles/Fonth2";

import Number from "./Number";


const Porque = props => {
    return (
        
        <PorqueStyle>
            <div className="porque">
                <div className="title">
                    <Fonth2 color="white">¿POR QUÉ NU:NC? </Fonth2>
                </div>
                <div className="numbers">
                    <Number/>
                </div>
            </div>


        </PorqueStyle>

    ); 
  };
  
  export default Porque;