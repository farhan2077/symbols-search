import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Symbols Search</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#5EEAD4" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
