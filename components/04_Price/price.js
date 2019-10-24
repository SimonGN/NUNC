import React from "react";

import { PriceStyle } from "./priceStyle";

import FonDescription from "../../styles/pagesStyles/FontDescription";
import FontTitle from "../../styles/pagesStyles/FontTitle";
import Fonth2 from "../../styles/pagesStyles/Fonth2"

import info from "../../content/info.json"



const Price = props => {
    const {precioTitle, preciosTitle1, preciosDescription1, preciosEuro1, preciosTitle2, preciosDescription2, preciosEuro2, preciosTitle3, preciosDescription3, preciosEuro3, preciosTitle4, preciosDescription4, preciosEuro4, contactaDescription, contactaBoton} = info

    return (

        <PriceStyle>
            <div className="global">
                <Fonth2 clasName="text"align="center">{precioTitle}</Fonth2>
                <div className="price">
                    <div className="price1">
                        <FontTitle>{preciosTitle1}</FontTitle>
                        <FonDescription>{preciosDescription1}</FonDescription>
                        <FontTitle>{preciosEuro1}</FontTitle>
                    </div>
                    <div className="price2">
                        <FontTitle>{preciosTitle2}</FontTitle>
                        <FonDescription>{preciosDescription2}</FonDescription>
                        <FontTitle>{preciosEuro2}</FontTitle>
                    </div>
                    <div className="price3">
                        <FontTitle>{preciosTitle3}</FontTitle>
                        <FonDescription>{preciosDescription3}</FonDescription>
                        <FontTitle>{preciosEuro3}</FontTitle>
                    </div>
                    <div className="price4">
                        <FontTitle>{preciosTitle4}</FontTitle>
                        <FonDescription>{preciosDescription4}</FonDescription>
                        <FontTitle>{preciosEuro4}</FontTitle>
                    </div>
                </div>

                <div className="contact">
                    <FonDescription>{contactaDescription}</FonDescription>
                    <a className="boton" href="mailto:ines.guerra@tailor-hub.com?Subject=⏰%20NU:NC%20información%20⏰">{contactaBoton}</a>
                </div>

                <div className="footer">
                    <div className="stores">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/IconAppstore.svg`} />
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/IconGooleplay.svg`} />
                    </div>
                    <div className="tailor">
                        <FonDescription>Un producto de:</FonDescription>
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/LogoTailor.svg`} />
                    </div>

                </div>
            </div>


        </PriceStyle>

    );
};

export default Price;