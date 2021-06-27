import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  body {
    margin: 0 !important;
    width: 0 !important;
    font-family: 'Poppins', sans-serif;
    background-color: #1a1e34;
    color: #f4f5f7;
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }
`;

export default GlobalStyling;
