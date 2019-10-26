


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
          src: url(${process.env.ASSET_PREFIX}/static/fonts/KareliaWeb-Regular.otf);
          src: local("KareliaWeb-Regular"), url(${process.env.ASSET_PREFIX}/static/fonts/KareliaWeb-Regular.otf) format("otf"),
            /* IE6-IE8 */ url(${process.env.ASSET_PREFIX}/static/fonts/KareliaWeb-Regular.otf) format("otf"),
            /* Super Modern Browsers */ url(${process.env.ASSET_PREFIX}/static/fonts/KareliaWeb-Regular.otf) format("otf"),
            /* Modern Browsers */ url(${process.env.ASSET_PREFIX}/static/fonts/KareliaWeb-Regular.otf) format("truetype"),
            /* Safari, Android, iOS */ url(${process.env.ASSET_PREFIX}/static/fonts/KareliaWeb-Regular.otf) format("svg"); /* Legacy iOS */
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "Texgyreheroscn";
          src: url(${process.env.ASSET_PREFIX}/static/fonts/Texgyreheroscn-regular.otf);
          src: local("KareliaWeb-Regular"), url(${process.env.ASSET_PREFIX}/static/fonts/Texgyreheroscn-regular.otf) format("otf"),
            /* IE6-IE8 */ url(${process.env.ASSET_PREFIX}/static/fonts/Texgyreheroscn-regular.otf) format("otf"),
            /* Super Modern Browsers */ url(${process.env.ASSET_PREFIX}/static/fonts/Texgyreheroscn-regular.otf) format("otf"),
            /* Modern Browsers */ url(${process.env.ASSET_PREFIX}/static/fonts/Texgyreheroscn-regular.otf) format("truetype"),
            /* Safari, Android, iOS */ url(${process.env.ASSET_PREFIX}/static/fonts/Texgyreheroscn-regular.otf) format("svg"); /* Legacy iOS */
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

        html, body {
          overflow-x:hidden;
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
