import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  body {
    margin: 0 !important;
    width: 0 !important;
    font-family: 'Poppins', sans-serif;
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }
`;

export default GlobalStyling;
