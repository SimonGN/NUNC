import React from "react";

import { PriceStyle } from "./priceStyle";

import FontDescription from "../../styles/pagesStyles/FontDescription";
import FontTitle from "../../styles/pagesStyles/FontTitle";
import Fonth2 from "../../styles/pagesStyles/Fonth2"
import Fontp from "../../styles/pagesStyles/Fontp"

import info from "../../content/info.json"



const Price = props => {
    const {precioTitle, preciosTitle1, preciosDescription1, preciosEuro1, preciosTitle2, preciosDescription2, preciosEuro2, preciosTitle3, preciosDescription3, preciosEuro3, preciosTitle4, preciosDescription4, preciosEuro4, contactaDescription, contactaBoton} = info

    return (

        <PriceStyle data-aos="fade-in">
            <div className="global">
                <Fonth2 clasName="text"align="center">{precioTitle}</Fonth2>
                <div className="price">
                    <div data-aos="fade-in" className="price1">
                        <FontTitle>{preciosTitle1}</FontTitle>
                        <FontDescription>{preciosDescription1}</FontDescription>
                        <FontTitle>{preciosEuro1}</FontTitle>
                    </div>
                    <div data-aos="fade-in" className="price2">
                        <FontTitle>{preciosTitle2}</FontTitle>
                        <FontDescription>{preciosDescription2}</FontDescription>
                        <FontTitle>{preciosEuro2}</FontTitle>
                    </div>
                    <div data-aos="fade-in" className="price3">
                        <FontTitle>{preciosTitle3}</FontTitle>
                        <FontDescription>{preciosDescription3}</FontDescription>
                        <FontTitle>{preciosEuro3}</FontTitle>
                    </div>
                    <div data-aos="fade-in" className="price4">
                        <FontTitle>{preciosTitle4}</FontTitle>
                        <FontDescription>{preciosDescription4}</FontDescription>
                        <FontTitle>{preciosEuro4}</FontTitle>
                    </div>
                </div>

                <div data-aos="fade-in" className="contact">
                    <Fontp>{contactaDescription}</Fontp>
                    <a className="boton" href="mailto:ines.guerra@tailor-hub.com?Subject=⏰%20NU:NC%20información%20⏰">{contactaBoton}</a>
                </div>

                <div className="footer">
                    <div className="stores">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/IconAppstore.svg`} />
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/IconGooleplay.svg`} />
                    </div>
                    <div className="tailor">
                        <FontDescription>Un producto de:</FontDescription>
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/LogoTailor.svg`} />
                    </div>

                </div>
            </div>


        </PriceStyle>

    );
};

export default Price;