import React from "react";
import { FuncionaStyle } from "./funcionaStyle";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Timeline from "../TimeLine/timeLine"
import info from "../../content/info.json"

import FonDescription from "../../styles/pagesStyles/FontDescription";
import FontTitle from "../../styles/pagesStyles/FontTitle";
import Fonth2 from "../../styles/pagesStyles/Fonth2";



const Funciona = props => {
    const {mobile} = props;
    const { funcionaTitle, number1, funcionaTitle1, funcionaSubtitle1, number2, funcionaTitle2, funcionaSubtitle2, number3, funcionaTitle3, funcionaSubtitle3, number4, funcionaTitle4, funcionaSubtitle4 } = info
    return (

        <FuncionaStyle>
            <div data-aos="fade-in" className="text" >
                <Fonth2 align="center">{funcionaTitle}</Fonth2>
            </div>
            <Timeline mobile={mobile}/>
            
        </FuncionaStyle>

    );
};

export default Funciona;