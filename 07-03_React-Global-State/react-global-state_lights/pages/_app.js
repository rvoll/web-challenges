import GlobalStyle from "../styles";
import Layout from "../components/Layout";

// In this challenge you will automate the lights in your house… well, at least in your browser.

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
