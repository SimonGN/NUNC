import React from "react";
import { IntroStyle } from "./IntroStyle";

import logoNunc from "../../static/svg/Logo.svg";
import FontpHome from "../../styles/pagesStyles/p";

const Intro = props => {
  return (
    <IntroStyle>
      <div className="homeBack">
        <img className="logoNUNC" src={logoNunc} />
        <FontpHome color="white">Creating meaningful products</FontpHome>
      </div>
    </IntroStyle>
  );
};

export default Intro;
