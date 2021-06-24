import store, { history } from "@redux/store";

import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import GlobalStyling from "@stylings/Global.styling";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "@themes/Main.theme";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyling />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
