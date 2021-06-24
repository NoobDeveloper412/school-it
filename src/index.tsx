import App from "./App";
import GlobalStyling from "@stylings/Global.styling";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "@redux/store";
import theme from "@themes/Main.theme";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <GlobalStyling>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </GlobalStyling>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
