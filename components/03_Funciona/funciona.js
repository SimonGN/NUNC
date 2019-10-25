import React from "react";
import { FuncionaStyle } from "./funcionaStyle";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import info from "../../content/info.json"

import FonDescription from "../../styles/pagesStyles/FontDescription";
import FontTitle from "../../styles/pagesStyles/FontTitle";
import Fonth2 from "../../styles/pagesStyles/Fonth2";



const Funciona = props => {
    const { funcionaTitle, number1, funcionaTitle1, funcionaSubtitle1, number2, funcionaTitle2, funcionaSubtitle2, number3, funcionaTitle3, funcionaSubtitle3, number4, funcionaTitle4, funcionaSubtitle4 } = info
    return (

        <FuncionaStyle>
            <div className="text">
                <Fonth2 align="center">{funcionaTitle}</Fonth2>

            </div>

            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'none' }}
                    date=""
                    iconStyle={{ background: '#A3C5F5', color: '#A3C5F5' }}>
                    
                    <img className="imgs" src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion5.svg`} />
                    <FontTitle color="#56CC7E">{funcionaTitle1}</FontTitle>
                    <FonDescription>{funcionaSubtitle1}</FonDescription>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'none' }}
                    date=""
                    iconStyle={{ background: '#A3C5F5', color: '#A3C5F5' }}>
                    
                    <img className="imgs" src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion6.svg`} />
                    <FontTitle color="#56CC7E">{funcionaTitle2}</FontTitle>
                    <FonDescription>{funcionaSubtitle2}</FonDescription>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'none' }}
                    date=""
                    iconStyle={{ background: '#A3C5F5', color: '#A3C5F5' }}>
                    
                    <img className="imgs" src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion7.svg`} />
                    <FontTitle color="#56CC7E">{funcionaTitle3}</FontTitle>
                    <FonDescription>{funcionaSubtitle3}</FonDescription>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'none' }}
                    date=""
                    iconStyle={{ background: '#A3C5F5', color: '#A3C5F5' }}>
                    
                    <img className="imgs" src={`${process.env.ASSET_PREFIX}/static/svg/ilustracion8.svg`} />
                    <FontTitle color="#56CC7E">{funcionaTitle4}</FontTitle>
                    <FonDescription>{funcionaSubtitle4}</FonDescription>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </FuncionaStyle>

    );
};

export default Funciona;