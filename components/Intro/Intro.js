import React from "react";
import { IntroStyle } from "./IntroStyle";

import logoNunc from "./Logo.svg";

import AppStore from "./IconAppstore.svg";
import Googleplay from "./IconGooleplay.svg";
import movilNunc from "./movilNunc.png"
import FontH1 from "../../styles/pagesStyles/Fonth1";

const Intro = props => {
    return (
        <IntroStyle>
            <div className="intro">   
                <div className="home">
                    <img className="logoNUNC" src={logoNunc} />

                    <div className="text"> 
                        <FontH1 >Cumple con las obligaciones de marcaje sin que nada cambie en tu empresa.</FontH1>
                    </div>
                    <div className="stores">
                        <img className="appStore" src={AppStore}></img>
                        <img className="googleplay" src={Googleplay}></img>
                    </div>
                </div>
                <div className="iphone">
                    <img className="movil" src={movilNunc}></img>
                </div>
            </div>
        </IntroStyle>
    )
}

export default Intro;
