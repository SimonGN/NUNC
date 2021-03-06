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
            <div data-aos="fade-in" className="text">
                <Fonth2 align="center">{ventajasTitle}</Fonth2>
            </div>
            <div className="global">
                <div data-aos="fade-right" className="ipad">
                    <img src={`${process.env.ASSET_PREFIX}/static/img/iPadNunc.png`} />
                </div>
                <div className="info">
                    <div  data-aos="fade-in" className="info1">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/icon1.svg`} />
                        <div>
                            <FontTitle color="#56CC7E">{ventajasTitle1}</FontTitle>
                            <FonDescription>{ventajasSubtitle1}</FonDescription>
                        </div>
                    </div>
                    <div  data-aos="fade-in" className="info2">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/icon2.svg`} />
                        <div>
                            <FontTitle color="#56CC7E">{ventajasTitle2}</FontTitle>
                            <FonDescription>{ventajasSubtitle2}</FonDescription>
                        </div>
                    </div>
                    <div  data-aos="fade-in" className="info3">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/icon3.svg`} />
                        <div>
                            <FontTitle color="#56CC7E">{ventajasTitle3}</FontTitle>
                            <FonDescription>{ventajasSubtitle3}</FonDescription>
                        </div>
                    </div>
                    <div  data-aos="fade-in" className="info4">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/icon4.svg`} />
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
