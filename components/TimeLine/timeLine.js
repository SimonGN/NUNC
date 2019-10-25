import React from "react";

import { TimeLineSyle, Line, Circle } from "./timeLineStyle";

import info from "../../content/info.json"

import FonDescription from "../../styles/pagesStyles/FontDescription";
import FontTitle from "../../styles/pagesStyles/FontTitle";


const TimeLine = props => {
    const { number1, funcionaTitle1, funcionaSubtitle1, number2, funcionaTitle2, funcionaSubtitle2, number3, funcionaTitle3, funcionaSubtitle3, number4, funcionaTitle4, funcionaSubtitle4 } = info
    return (

        <TimeLineSyle>
            <div className="box1">
                <Line />
                <Circle />
                <div className="text1">
                    <FontTitle color="#56CC7E">{funcionaTitle1}</FontTitle>
                    <FonDescription>{funcionaSubtitle1}</FonDescription>
                </div>
                <div className="imgs1">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion5.svg`} />
                </div>

            </div>
            <div className="box2">
                <Line />
                <Circle className="circle"/>
                <div className="imgs2">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion6.svg`} />
                </div>
                <div className="text2">
                    <FontTitle color="#56CC7E">{funcionaTitle2}</FontTitle>
                    <FonDescription>{funcionaSubtitle2}</FonDescription>
                </div>

            </div>
            <div className="box3">
                <Line />
                <Circle />
                <div className="text3">
                    <FontTitle color="#56CC7E">{funcionaTitle3}</FontTitle>
                    <FonDescription>{funcionaSubtitle3}</FonDescription>
                </div>
                <div className="imgs3">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion7.svg`} />
                </div>

            </div>
            <div className="box4">
                <Line />
                <Circle />
                <div className="imgs4">
                    <img src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion8.svg`} />
                </div>
                <div className="text4">
                    <FontTitle color="#56CC7E">{funcionaTitle4}</FontTitle>
                    <FonDescription>{funcionaSubtitle4}</FonDescription>
                </div>

            </div>

        </TimeLineSyle>

    );
};

export default TimeLine;