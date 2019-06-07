import React from "react";
import { PanleControlStyle } from "./PanelControlStyle";

import FontP from "../../styles/pagesStyles/Fontp";

const PanelControl = props => {
    return (
        
        <PanleControlStyle>
            <div className="panelcontrol">
                <div className="ipadSpace">
                    <img className="ipad" src="../../static/img/iPadNunc.png"></img>
                </div>
                <div className="text">
                    <FontP className="parraf">Gracias a NUNC podrás cumplir con el sistema de marcaje impuesto por la Ley 8/2019 sin que ello suponga el control horario de cada uno de tus empleados.</FontP>
                    <FontP className="parraf">Importa a tus empleados a NUNC sea cual se el ERP que utilice tu empresa.</FontP>
                    <FontP >Crea tus propios horarios y calendarios, según sean en tu empresa. Así, tus empleados tendrán la aplicación más sencilla del mercado, pudiendo comprobar su tiempo trabajado y sus reportes mensuales.</FontP>
                </div>
            </div>
        </PanleControlStyle>
    )
}

export default PanelControl;
