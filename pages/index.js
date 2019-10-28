import Meta from "../components/Meta";
import React, { createRef } from "react";
import Intro from "../components/00_Intro/intro";
import Funciones from "../components/01_Funciones/funciones";
import Ventajas from "../components/02_Ventajas/ventajas";
import Funciona from "../components/03_Funciona/funciona";
import Price from "../components/04_Price/price";

import AOS from "aos";
import "aos/dist/aos.css";
import router from 'next/router'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      mobile: true
    }
    this.ref = createRef()
  }

  checkWidth = () => {
    if(window.innerWidth > 415) {
      this.setState({...this.state, mobile: false})
    }
  }

  componentDidMount() {
    this.runAOS();
    this.checkWidth()
    if(router.query && router.query.scroll) {
      setTimeout(() => {
        this.handleScroll()
      }, 100);
    }
      
  }

  

  runAOS = () => {
    if (!AOS.refresh()) {
      AOS.init({
        disable: false,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 1000,
        easing: "ease",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
        ssr: true
      });
    }
  };

  handleScroll = () => {
    this.ref.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
  return (<React.Fragment>
    <Meta/>
    <Intro/>
    <Funciones/>
    <Ventajas/>
    <Funciona mobile={this.state.mobile}/>
    <Price/>
 
  </React.Fragment>);
}
}

export default Home;