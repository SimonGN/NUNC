import React from "react";
import { VentajasStyle } from "./ventajasStyle";

import FonDescription from "../../styles/pagesStyles/FontDescription";
import FontTitle from "../../styles/pagesStyles/FontTitle";
import Fonth2 from "../../styles/pagesStyles/Fonth2"

import info from "../../content/info.json"

const Ventajas = props => {
    const { ventajasTitle, ventajasTitle1, ventajasSubtitle1, ventajasTitle2, ventajasSubtitle2, ventajasTitle3, ventajasSubtitle3, ventajasTitle4, ventajasSubtitle4 } = info
    return (

        <VentajasStyle>
            <div className="title">
                <Fonth2 align="center">{ventajasTitle}</Fonth2>
            </div>
            <div>
                <div className="ipad">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion1.svg`} />
                </div>
                <div className="info">
                    <div className="info1">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion1.svg`} />
                        <div>
                            <FontTitle color="#56CC7E">{ventajasTitle1}</FontTitle>
                            <FonDescription>{ventajasSubtitle1}</FonDescription>
                        </div>
                    </div>
                    <div className="info2">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion1.svg`} />
                        <div>
                            <FontTitle color="#56CC7E">{ventajasTitle2}</FontTitle>
                            <FonDescription>{ventajasSubtitle2}</FonDescription>
                        </div>
                    </div>
                    <div className="info3">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion1.svg`} />
                        <div>
                            <FontTitle color="#56CC7E">{ventajasTitle3}</FontTitle>
                            <FonDescription>{ventajasSubtitle3}</FonDescription>
                        </div>
                    </div>
                    <div className="info4">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion1.svg`} />
                        <div>
                            <FontTitle color="#56CC7E">{ventajasTitle4}</FontTitle>
                            <FonDescription>{ventajasSubtitle4}</FonDescription>
                        </div>
                    </div>
                </div>
            </div>

        </VentajasStyle>
    )
}

export default Ventajas;
