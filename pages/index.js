import Meta from "../components/Meta"

import Intro from "../components/Intro/Intro"
import Info from "../components/Info/Info"
import Porque from "../components/Porque/Porque"

function Home() {
  return (<React.Fragment>
    <Meta/>
    <Intro/>
    <Info/>
    <Porque/>

  </React.Fragment>);
}

export default Home;