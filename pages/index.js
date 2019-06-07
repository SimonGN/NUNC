import Meta from "../components/Meta"

import Intro from "../components/Intro/Intro"
import Info from "../components/Info/Info"
import Porque from "../components/Porque/Porque"
import PanelControl from "../components/PanelControl/PanelControl"
import Price from "../components/Price/Price"

function Home() {
  return (<React.Fragment>
    <Meta/>
    <Intro/>
    <Info/>
    <Porque/>
    <PanelControl/>
    <Price/>

  </React.Fragment>);
}

export default Home;