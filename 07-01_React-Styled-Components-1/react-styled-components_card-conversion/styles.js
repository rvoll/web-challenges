import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    line-height: 1.5;
    background-color: lightblue;
  }

  main {
    max-width: 480px;
    margin: 0 auto;
    padding: 8px;
  }
`;
