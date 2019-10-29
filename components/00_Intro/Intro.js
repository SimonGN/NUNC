import React from "react";
import { IntroStyle } from "./introStyle";
import FontH1 from "../../styles/pagesStyles/Fonth1";

import info from "../../content/info.json"


const Intro = props => {
    const { pageTitle1, pageTitle2 } = info
    return (

        <IntroStyle>
            <div className="global">

                <div className="text">
                    <div className="logo">
                        <img src={`${process.env.ASSET_PREFIX}/static/svg/Logo.svg`} />
                    </div>

                    <div>
                        <FontH1 className="h1" color="white">{pageTitle1}</FontH1>
                        <FontH1 color="white">{pageTitle2}</FontH1>
                    </div>
                    
                    <div className="stores">
                        <a href="https://apps.apple.com/es/app/nu-nc/id1469934297" target="_blank"><img src={`${process.env.ASSET_PREFIX}/static/svg/IconAppstoreWhite.svg`} /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.nuncpanelapp&gl=ES" target="_blank"><img src={`${process.env.ASSET_PREFIX}/static/svg/IconGooleplayWhite.svg`} /></a>
                    </div>
                </div>


            </div>

        </IntroStyle>


    )

}

export default Intro;
