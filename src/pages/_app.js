// client/_app.js
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="App">
        <Head>
          <title>Test</title>
          <meta name="description" content="Testing- uniswap SDK" />
          <meta property="og:title" content="TrueX" />
          <meta property="og:description" content="Testing- uniswap SDK" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {<Component {...pageProps} />}
      </div>
    </>
  );
}

export default MyApp;
