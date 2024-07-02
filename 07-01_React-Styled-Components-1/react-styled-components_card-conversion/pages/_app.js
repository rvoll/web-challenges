import GlobalStyle from "../styles.js";
import "../components/Card/Card.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
