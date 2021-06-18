import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Rubik:wght@400;500;600&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#5EEAD4" />

          <meta property="og:title" content="Symbols Search" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://symbols-search.vercel.app/"
          />
          <meta
            property="og:description"
            content="Find symbols from Microsoft Word equation easily."
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:image" content="/images/preview.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@farhanbinamin" />
          <meta name="twitter:title" content="Symbols search" />
          <meta
            name="twitter:description"
            content="Find symbols from Microsoft Word equation easily."
          />
          <meta name="twitter:image" content="/images/preview.png" />
        </Head>
        <body className="bg-white dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
