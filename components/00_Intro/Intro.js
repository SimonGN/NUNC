import React from "react";
import { IntroStyle } from "./IntroStyle";
import FontH1 from "../../styles/pagesStyles/Fonth1";

import info from "../../content/info.json"


const Intro = props => {
    const { pageTitle1, pageTitle2 } = info
    return (

        <IntroStyle>
            <div className="global">
                <div className="local">
                    <div className="text">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/Logo.svg`} />
                        <div>
                            <FontH1 className="h1" color="white">{pageTitle1}</FontH1>
                            <FontH1 color="white">{pageTitle2}</FontH1>
                        </div>
                    </div>
                </div>
              
            </div>

        </IntroStyle>


    )

}

export default Intro;
