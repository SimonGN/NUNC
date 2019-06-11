import React from "react";
import { IntroStyle } from "./IntroStyle";

import logoNunc from "../../static/svg/Logo.svg";
import AppStore from "../../static/svg/IconAppstore.svg";
import Googleplay from "../../static/svg/IconGooleplay.svg";

import FontH1 from "../../styles/pagesStyles/Fonth1";

const Intro = props => {
    return (
        <IntroStyle>
            <div className="intro">   
                <div className="home">
                    <img className="logoNUNC" src={logoNunc}></img>
                    <div className="text"> 
                        <FontH1 >Cumple con las obligaciones de marcaje sin que nada cambie en tu empresa.</FontH1>
                    </div>
                    <div className="stores">
                        <img className="appStore"src={AppStore}></img>
                        <img className="googleplay"src={Googleplay}></img>
                    </div>
                </div>
                <div className="iphone">
                    <img className="movil"src="../../static/img/movilNunc.png"></img>
                </div>
            </div>
        </IntroStyle>
    )
}

export default Intro;
