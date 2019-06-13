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
          src: url(${KareliaWeb});
          src: local("KareliaWeb-Regular"), url(${KareliaWeb}) format("otf"),
            /* IE6-IE8 */ url(${KareliaWeb}) format("otf"),
            /* Super Modern Browsers */ url(${KareliaWeb}) format("otf"),
            /* Modern Browsers */ url(${KareliaWeb}) format("truetype"),
            /* Safari, Android, iOS */ url(${KareliaWeb}) format("svg"); /* Legacy iOS */
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "Texgyreheroscn";
          src: url(${Texgyreheroscn});
          src: local("KareliaWeb-Regular"), url(${Texgyreheroscn}) format("otf"),
            /* IE6-IE8 */ url(${Texgyreheroscn}) format("otf"),
            /* Super Modern Browsers */ url(${Texgyreheroscn}) format("otf"),
            /* Modern Browsers */ url(${Texgyreheroscn}) format("truetype"),
            /* Safari, Android, iOS */ url(${Texgyreheroscn}) format("svg"); /* Legacy iOS */
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
        h3,
        p {
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
