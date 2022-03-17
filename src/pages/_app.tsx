import type { AppProps } from "next/app";
import GlobalStyle from "../GlobalStyle";
import "./_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
