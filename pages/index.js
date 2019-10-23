import Meta from "../components/Meta";

import Intro from "../components/00_Intro/Intro";
// import BotonLlamar from "../components/Botones/BotonLlamar";
import Funciones from "../components/01_Funciones/funciones";
// import Price from "../components/04_Price/Porque";
// import PanelControl from "../components/PanelControl/PanelControl";
// import Price from "../components/Price/Price";
// import Final from "../components/Final/Final";
// import Footer from "../components/Footer/Footer";


function Home() {
  return (<React.Fragment>
    <Meta/>
    <Intro/>
    
    <Funciones/>
    {/* <Price/> */}
    {/* <PanelControl/> */}
    {/* <Price/> */}
    {/* <Final/> */}
    {/* <BotonLlamar/> */}
    {/* <Footer/> */}
   

  </React.Fragment>);
}

export default Home;