import Meta from "../components/Meta";

import Intro from "../components/00_Intro/intro";
import Funciones from "../components/01_Funciones/funciones";
import Ventajas from "../components/02_Ventajas/ventajas";
import Funciona from "../components/03_Funciona/funciona";
import Price from "../components/04_Price/price";
import TimeLine from "../components/TimeLine/timeLine";


// import BotonLlamar from "../components/Botones/BotonLlamar";

// import Final from "../components/Final/Final";
// import Footer from "../components/Footer/Footer";


function Home() {
  return (<React.Fragment>
    <Meta/>
    <Intro/>
    <Funciones/>
    <Ventajas/>
    <Funciona/>
    <TimeLine/>
    <Price/>
 
  </React.Fragment>);
}

export default Home;