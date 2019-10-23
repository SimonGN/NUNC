import React from "react";
import { FuncionesStyle } from "./funcionesStyle";

import FonDescription from "../../styles/pagesStyles/FontDescription";
import FontTitle from "../../styles/pagesStyles/FontTitle";
import Fonth2 from "../../styles/pagesStyles/Fonth2"

import info from "../../content/info.json"


const Funciones = props => {
    const { description1, funcionesTitle, funcionesTitle1, funcionesSubtitle1, funcionesTitle2,funcionesSubtitle2,funcionesTitle3,funcionesSubtitle3,funcionesTitle4,funcionesSubtitle4 } = info
    return (
        
        <FuncionesStyle>
            <div className="global1">
                <FonDescription>{description1}</FonDescription>
            </div>

            <div className="globla2">
                <Fonth2 align="center">{funcionesTitle}</Fonth2>
                <div className="funciones1">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/Logo.svg`} />
                    <FontTitle color="#56CC7E">{funcionesTitle1}</FontTitle>
                    <FonDescription>{funcionesSubtitle1}</FonDescription>
                </div>
                <div className="funciones2">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/Logo.svg`} />
                    <FontTitle color="#56CC7E">{funcionesTitle2}</FontTitle>
                    <FonDescription>{funcionesSubtitle2}</FonDescription>
                </div>
                <div className="funciones3">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/Logo.svg`} />
                    <FontTitle color="#56CC7E">{funcionesTitle3}</FontTitle>
                    <FonDescription>{funcionesSubtitle3}</FonDescription>
                </div>
                <div className="funciones4">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/Logo.svg`} />
                    <FontTitle color="#56CC7E">{funcionesTitle4}</FontTitle>
                    <FonDescription>{funcionesSubtitle4}</FonDescription>
                </div>
            </div>
        </FuncionesStyle>

    ); 
  };
  
  export default Funciones;