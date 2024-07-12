import GlobalStyle from "../styles";
// Don't forget: - but when do I need this?
// import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
