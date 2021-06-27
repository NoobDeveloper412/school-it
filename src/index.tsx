import store, { persistor } from "@redux/store";

import App from "./App";
import GlobalStyling from "@stylings/Global.styling";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "@themes/Main.theme";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyling />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
