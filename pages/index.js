import Meta from "../components/Meta";

import Intro from "../components/Intro/Intro";
import BotonLlamar from "../components/Botones/BotonLlamar";
import Info from "../components/Info/Info";
import Porque from "../components/Porque/Porque";
import PanelControl from "../components/PanelControl/PanelControl";
import Price from "../components/Price/Price";
import Final from "../components/Final/Final";
import Footer from "../components/Footer/Footer";


function Home() {
  return (<React.Fragment>
    <Meta/>
    <Intro/>
    
    <Info/>
    <Porque/>
    <PanelControl/>
    <Price/>
    <Final/>
    {/* <BotonLlamar/> */}
    <Footer/>
   

  </React.Fragment>);
}

export default Home;