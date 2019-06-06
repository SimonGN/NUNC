import KareliaWeb from "../static/fonts/KareliaWeb-Regular.otf";
import Texgyreheroscn from "../static/fonts/Texgyreheroscn-regular.otf";

import Head from "next/head";

const Meta = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>NU:NC</title>
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: "KareliaWeb-Regular";
          src: url(${KareliaWeb}) format("truetype");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "Texgyreheroscn";
          src: url(${Texgyreheroscn}) format("truetype");
          font-weight: normal;
          font-style: normal;
        }
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
        }
        h1,
        h2,
        h3 p {
          margin-top: 0;
          margin-bottom: 0;
        }

        .* {
          box-sizing: border-box;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Meta;
