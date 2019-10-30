


import Head from "next/head";

const Meta = () => {
  return (
    <React.Fragment>
      <Head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/static/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/static/manifest.json" />


        <title>NU:NC – Registro de jornada</title>
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
