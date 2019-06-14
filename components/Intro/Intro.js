import React from "react";
import { IntroStyle } from "./IntroStyle";
import FontH1 from "../../styles/pagesStyles/Fonth1";

const Intro = props => {
    return (
        <IntroStyle>
            <div className="intro">   
                <div className="home">
                    <img className="logoNUNC" src={`${process.env.ASSET_PREFIX}/static/svg/Logo.svg`} />

                    <div className="text"> 
                        <FontH1 >Cumple con las obligaciones de marcaje sin que nada cambie en tu empresa.</FontH1>
                    </div>
                    <div className="stores">
                        <img className="appStore" src={`${process.env.ASSET_PREFIX}/static/svg/IconAppstore.svg`}></img>
                        <img className="googleplay" src={`${process.env.ASSET_PREFIX}/static/svg/IconGooleplay.svg`}></img>
                    </div>
                </div>
                <div className="iphone">
                    <img className="movil" src={`${process.env.ASSET_PREFIX}/static/img/movilNunc.png`}></img>
                </div>
            </div>
        </IntroStyle>
    )
}

export default Intro;
