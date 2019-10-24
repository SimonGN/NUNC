import Meta from "../components/Meta";

import Intro from "../components/00_Intro/intro";
import Funciones from "../components/01_Funciones/funciones";
import Ventajas from "../components/02_Ventajas/ventajas";
// import BotonLlamar from "../components/Botones/BotonLlamar";

// import Price from "../components/04_Price/Porque";
// import Price from "../components/Price/Price";
// import Final from "../components/Final/Final";
// import Footer from "../components/Footer/Footer";


function Home() {
  return (<React.Fragment>
    <Meta/>
    <Intro/>
    <Funciones/>
    <Ventajas/>

    {/* <Price/> */}
    {/* <Final/> */}
    {/* <BotonLlamar/> */}
    {/* <Footer/> */}
   

  </React.Fragment>);
}

export default Home;